import logging
from fastapi import APIRouter, Depends, HTTPException, Query
from app.models import DailyLogSchema, QuickLogRequest
from app.database import get_database
from datetime import date as dt_date

logger = logging.getLogger("aquara")
router = APIRouter(prefix="/intake", tags=["Intake"])

DEFAULT_SCHEDULE = [
    {"id": 1, "time": "7:00 AM", "title": "Morning Activation", "description": "Kickstart metabolic processes.", "amountMl": 300, "completed": False},
    {"id": 2, "time": "9:00 AM", "title": "Cognitive Boost", "description": "Maintain focus during deep work.", "amountMl": 250, "completed": False},
    {"id": 3, "time": "12:00 PM", "title": "Midday Replenishment", "description": "Support digestion and nutrient transport.", "amountMl": 500, "completed": False},
    {"id": 4, "time": "3:00 PM", "title": "Afternoon Flow", "description": "Prevent the afternoon slump.", "amountMl": 250, "completed": False},
    {"id": 5, "time": "7:00 PM", "title": "Evening Recovery", "description": "Gentle hydration pre-dinner.", "amountMl": 300, "completed": False}
]

# Resilient in-memory fallback store
IN_MEMORY_LOGS = {}

async def get_or_create_daily_log(date_str: str, db) -> dict:
    global IN_MEMORY_LOGS
    
    # Try fetching from DB
    try:
        log = await db.daily_logs.find_one({"_id": date_str})
        if log:
            # Sync to local cache
            IN_MEMORY_LOGS[date_str] = log.copy()
            return log
    except Exception as e:
        logger.warning(f"MongoDB read failed for daily logs: {e}. Checking in-memory logs.")
        if date_str in IN_MEMORY_LOGS:
            return IN_MEMORY_LOGS[date_str]

    # Initialize a new log
    today_str = dt_date.today().isoformat()
    is_today = (date_str == today_str)
    
    initial_intake = 1800 if is_today else 0
    schedule = [item.copy() for item in DEFAULT_SCHEDULE]
    if is_today:
        schedule[0]["completed"] = True
        schedule[1]["completed"] = True
        
    log = {
        "_id": date_str,
        "date": date_str,
        "intakeLoggedMl": initial_intake,
        "scheduleItems": schedule
    }
    
    # Try inserting to DB
    try:
        await db.daily_logs.insert_one(log.copy())
    except Exception as e:
        logger.warning(f"MongoDB insert failed: {e}. Storing daily log in-memory.")
        
    IN_MEMORY_LOGS[date_str] = log
    return log

@router.get("", response_model=DailyLogSchema)
async def get_intake(
    date: str = Query(..., description="Date in YYYY-MM-DD format"),
    db = Depends(get_database)
):
    log = await get_or_create_daily_log(date, db)
    return log

@router.post("/log", response_model=DailyLogSchema)
async def log_water(
    req: QuickLogRequest,
    date: str = Query(..., description="Date in YYYY-MM-DD format"),
    db = Depends(get_database)
):
    log = await get_or_create_daily_log(date, db)
    new_intake = max(0, log["intakeLoggedMl"] + req.amountMl)
    log["intakeLoggedMl"] = new_intake
    
    try:
        await db.daily_logs.update_one(
            {"_id": date},
            {"$set": {"intakeLoggedMl": new_intake}}
        )
    except Exception as e:
        logger.warning(f"MongoDB write failed: {e}. Updating in-memory daily log.")
        
    IN_MEMORY_LOGS[date] = log
    return log

@router.put("/reset", response_model=DailyLogSchema)
async def reset_intake(
    date: str = Query(..., description="Date in YYYY-MM-DD format"),
    amountMl: int = Query(0, description="Amount to reset to"),
    db = Depends(get_database)
):
    log = await get_or_create_daily_log(date, db)
    
    schedule = log["scheduleItems"]
    if amountMl == 0:
        for item in schedule:
            item["completed"] = False
            
    log["intakeLoggedMl"] = amountMl
    log["scheduleItems"] = schedule
    
    try:
        await db.daily_logs.update_one(
            {"_id": date},
            {"$set": {
                "intakeLoggedMl": amountMl,
                "scheduleItems": schedule
            }}
        )
    except Exception as e:
        logger.warning(f"MongoDB reset failed: {e}. Updating in-memory daily log.")
        
    IN_MEMORY_LOGS[date] = log
    return log

@router.post("/schedule/{item_id}/toggle", response_model=DailyLogSchema)
async def toggle_schedule_item(
    item_id: int,
    date: str = Query(..., description="Date in YYYY-MM-DD format"),
    db = Depends(get_database)
):
    log = await get_or_create_daily_log(date, db)
    schedule = log["scheduleItems"]
    intake = log["intakeLoggedMl"]
    
    item_found = False
    for item in schedule:
        if item["id"] == item_id:
            next_completed = not item["completed"]
            item["completed"] = next_completed
            item_found = True
            
            if next_completed:
                intake += item["amountMl"]
            else:
                intake = max(0, intake - item["amountMl"])
            break
            
    if not item_found:
        raise HTTPException(status_code=404, detail="Schedule item not found")
        
    log["intakeLoggedMl"] = intake
    log["scheduleItems"] = schedule
    
    try:
        await db.daily_logs.update_one(
            {"_id": date},
            {"$set": {
                "intakeLoggedMl": intake,
                "scheduleItems": schedule
            }}
        )
    except Exception as e:
        logger.warning(f"MongoDB toggle update failed: {e}. Updating in-memory daily log.")
        
    IN_MEMORY_LOGS[date] = log
    return log

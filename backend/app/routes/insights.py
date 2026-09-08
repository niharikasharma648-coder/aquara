import logging
from fastapi import APIRouter, Depends, Query
from app.database import get_database
from app.routes.profile import DEFAULT_PROFILE, IN_MEMORY_PROFILE
from app.routes.intake import IN_MEMORY_LOGS
from datetime import datetime, timedelta
from typing import List, Dict, Any

logger = logging.getLogger("aquara")
router = APIRouter(prefix="/insights", tags=["Insights"])

def calculate_hydration_target(profile: dict) -> float:
    base_ml = profile.get("weight", 72.0) * 35
    sex = profile.get("sex", "male")
    if sex == "female":
        base_ml *= 0.95
    elif sex == "male":
        base_ml *= 1.05
        
    activity_map = {"low": 0, "moderate": 250, "high": 500, "very_high": 800}
    base_ml += activity_map.get(profile.get("activity", "moderate"), 250)
    
    climate_map = {"cool": 0, "moderate": 150, "hot": 450, "very_hot": 750}
    base_ml += climate_map.get(profile.get("climate", "moderate"), 150)
    
    exercise_map = {"none": 0, "30min": 250, "60min": 500, "90min": 800}
    base_ml += exercise_map.get(profile.get("exercise", "60min"), 500)
    
    total_ml = round(base_ml / 100) * 100
    return float(f"{total_ml / 1000:.1f}")

MOCK_HISTORY = {
    0: 1.7, # Mon
    1: 2.2, # Tue
    2: 2.7, # Wed
    3: 2.0, # Thu
    4: 2.4, # Fri
    5: 1.4, # Sat
    6: 2.5, # Sun
}

@router.get("")
async def get_insights(
    date: str = Query(..., description="Focus date in YYYY-MM-DD format"),
    db = Depends(get_database)
):
    # 1. Get user profile for goal calculation
    profile = IN_MEMORY_PROFILE
    try:
        db_profile = await db.users.find_one({"_id": "default_user"})
        if db_profile:
            profile = db_profile
    except Exception as e:
        logger.warning(f"MongoDB read failed for profile in insights: {e}. Using cached profile.")
    
    goal_l = calculate_hydration_target(profile)
    
    # 2. Parse focus date
    try:
        focus_dt = datetime.strptime(date, "%Y-%m-%d").date()
    except ValueError:
        focus_dt = datetime.today().date()
        
    start_of_week = focus_dt - timedelta(days=focus_dt.weekday())
    
    weekly_data = []
    day_names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    
    for i in range(7):
        current_day_dt = start_of_week + timedelta(days=i)
        current_day_str = current_day_dt.isoformat()
        day_name = day_names[i]
        
        # Check database or fallback in-memory log
        log = None
        try:
            log = await db.daily_logs.find_one({"_id": current_day_str})
        except Exception as e:
            logger.warning(f"MongoDB read failed for daily logs in insights: {e}. Checking cache.")
            log = IN_MEMORY_LOGS.get(current_day_str)
            
        is_focus_day = (current_day_dt == focus_dt)
        
        if log:
            intake_l = float(f"{log['intakeLoggedMl'] / 1000:.1f}")
        else:
            # Fallback to visual demo mock data if in the past relative to focus date, else 0
            if current_day_dt <= focus_dt:
                intake_l = MOCK_HISTORY.get(i, 2.0)
            else:
                intake_l = 0.0
                
        percent = int(min(100, (intake_l / goal_l) * 100)) if goal_l > 0 else 0
        
        day_info = {
            "day": day_name,
            "intake": intake_l,
            "goal": goal_l,
            "percent": percent,
        }
        if is_focus_day:
            day_info["current"] = True
            
        weekly_data.append(day_info)
        
    return {
        "weeklyData": weekly_data,
        "dailyGoal": goal_l,
        "streakDays": profile.get("streakDays", 24)
    }

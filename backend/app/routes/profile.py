import logging
from fastapi import APIRouter, Depends
from app.models import UserProfileSchema, ProfileUpdateRequest
from app.database import get_database

logger = logging.getLogger("aquara")
router = APIRouter(prefix="/profile", tags=["Profile"])

DEFAULT_PROFILE = {
    "_id": "default_user",
    "name": "Alex Morgan",
    "weight": 72.0,
    "height": 178.0,
    "age": 28,
    "sex": "male",
    "activity": "moderate",
    "climate": "moderate",
    "exercise": "60min",
    "streakDays": 24
}

# Resilient in-memory fallback
IN_MEMORY_PROFILE = DEFAULT_PROFILE.copy()

@router.get("", response_model=UserProfileSchema)
async def get_profile(db=Depends(get_database)):
    try:
        # Check database (with a short timeout implicit in motor client config or handled on exception)
        profile = await db.users.find_one({"_id": "default_user"})
        if not profile:
            profile_to_insert = DEFAULT_PROFILE.copy()
            await db.users.insert_one(profile_to_insert)
            profile = profile_to_insert
        # Sync to in-memory cache in case db goes offline later
        global IN_MEMORY_PROFILE
        IN_MEMORY_PROFILE = profile.copy()
        return profile
    except Exception as e:
        logger.warning(f"MongoDB connection failed: {e}. Falling back to in-memory profile store.")
        return IN_MEMORY_PROFILE

@router.post("", response_model=UserProfileSchema)
async def update_profile(data: ProfileUpdateRequest, db=Depends(get_database)):
    update_data = {k: v for k, v in data.model_dump().items() if v is not None}
    
    global IN_MEMORY_PROFILE
    try:
        profile = await db.users.find_one({"_id": "default_user"})
        if not profile:
            profile = DEFAULT_PROFILE.copy()
            await db.users.insert_one(profile)
        
        if update_data:
            await db.users.update_one({"_id": "default_user"}, {"$set": update_data})
            profile.update(update_data)
        
        IN_MEMORY_PROFILE = profile.copy()
        return profile
    except Exception as e:
        logger.warning(f"MongoDB write failed: {e}. Updating in-memory profile store.")
        IN_MEMORY_PROFILE.update(update_data)
        return IN_MEMORY_PROFILE

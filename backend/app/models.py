from pydantic import BaseModel, Field
from typing import List, Dict, Optional

class UserProfileSchema(BaseModel):
    name: str = "Alex Morgan"
    weight: float = 72.0
    height: float = 178.0
    age: int = 28
    sex: str = "male" # 'male' | 'female' | 'prefer_not_to_say'
    activity: str = "moderate" # 'low' | 'moderate' | 'high' | 'very_high'
    climate: str = "moderate" # 'cool' | 'moderate' | 'hot' | 'very_hot'
    exercise: str = "60min" # 'none' | '30min' | '60min' | '90min'
    streakDays: int = 24

class ScheduleItemSchema(BaseModel):
    id: int
    time: str
    title: str
    description: str
    amountMl: int
    completed: bool = False

class DailyLogSchema(BaseModel):
    date: str # format: YYYY-MM-DD
    intakeLoggedMl: int = 1800
    scheduleItems: List[ScheduleItemSchema] = []

class QuickLogRequest(BaseModel):
    amountMl: int = 250

class ProfileUpdateRequest(BaseModel):
    name: Optional[str] = None
    weight: Optional[float] = None
    height: Optional[float] = None
    age: Optional[int] = None
    sex: Optional[str] = None
    activity: Optional[str] = None
    climate: Optional[str] = None
    exercise: Optional[str] = None

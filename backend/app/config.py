import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SUPABASE_URL: str = "https://vewemhrnvnjxugsvejni.supabase.co"
    SUPABASE_KEY: str = "sb_publishable_YReNnQDhu24OmF6wrR5kFg_ceaH9m3O"
    MONGO_URI: str = "mongodb://localhost:27017"
    DB_NAME: str = "aquara"
    PORT: int = 8000

    class Config:
        env_file = ".env"
        extra = "ignore"

settings = Settings()

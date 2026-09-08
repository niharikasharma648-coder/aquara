import logging
from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

logger = logging.getLogger("aquara")

class Database:
    client: AsyncIOMotorClient = None
    db = None

db_connection = Database()

def get_database():
    if db_connection.client is None:
        # Configure short timeouts so offline fallbacks trigger instantly
        db_connection.client = AsyncIOMotorClient(
            settings.MONGO_URI, 
            serverSelectionTimeoutMS=2000, 
            connectTimeoutMS=2000
        )
        db_connection.db = db_connection.client[settings.DB_NAME]
    return db_connection.db

async def close_database():
    if db_connection.client is not None:
        db_connection.client.close()
        db_connection.client = None
        db_connection.db = None

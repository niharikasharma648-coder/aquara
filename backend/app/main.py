from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.profile import router as profile_router
from app.routes.intake import router as intake_router
from app.routes.insights import router as insights_router
from app.database import close_database
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup behavior
    yield
    # Shutdown behavior
    await close_database()

app = FastAPI(
    title="Aquara Hydration Platform API",
    description="Backend API for Aquara hydration tracking, biometrics calculation, and checklist logs.",
    version="1.0.0",
    lifespan=lifespan
)

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173", 
        "http://127.0.0.1:5173", 
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profile_router, prefix="/api")
app.include_router(intake_router, prefix="/api")
app.include_router(insights_router, prefix="/api")

@app.get("/")
async def root():
    return {
        "message": "Welcome to the Aquara API!",
        "docs": "/docs",
        "status": "healthy"
    }

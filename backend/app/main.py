from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.db import Base, engine
from app.models.project import Project
from app.routes.project_routes import router as project_router

app = FastAPI()
Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(project_router)
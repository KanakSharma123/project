from fastapi import APIRouter
from sqlalchemy.orm import Session
from app.database.db import SessionLocal
from app.models.project import Project
from app.schemas.project_schema import ProjectCreate

router = APIRouter()

@router.post("/projects")
def create_project(project: ProjectCreate):

    db: Session = SessionLocal()

    new_project = Project(
        company_name=project.company_name,
        industry=project.industry,
        target_market=project.target_market,
        business_model=project.business_model
    )

    db.add(new_project)
    db.commit()
    db.refresh(new_project)

    return new_project
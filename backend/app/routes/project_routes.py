from fastapi import APIRouter, HTTPException
from sqlalchemy.orm import Session

from app.database.db import SessionLocal
from app.models.project import Project
from app.schemas.project_schema import ProjectCreate
from app.services.market_scoring import calculate_market_score
from app.services.gemini_service import generate_market_analysis

router = APIRouter()


@router.post("/projects")
def create_project(project: ProjectCreate):

    db: Session = SessionLocal()

    try:

        # Calculate market score
        market_score = calculate_market_score(project)

        # Generate AI analysis
        ai_analysis = generate_market_analysis(
            project,
            market_score
        )

        # Create project
        new_project = Project(
            company_name=project.company_name,
            industry=project.industry,
            target_market=project.target_market,
            business_model=project.business_model,
            market_size=project.market_size,
            competition_level=project.competition_level,
            growth_rate=project.growth_rate,
            regulatory_risk=project.regulatory_risk,
            market_score=market_score,
            ai_analysis=ai_analysis
        )

        db.add(new_project)
        db.commit()
        db.refresh(new_project)

        return {
            "id": new_project.id,
            "market_score": market_score,
            "ai_analysis": ai_analysis
        }

    finally:

        db.close()


@router.get("/projects/{project_id}")
def get_project(project_id: int):

    db: Session = SessionLocal()

    try:

        project = db.query(Project).filter(
            Project.id == project_id
        ).first()

        if not project:
            raise HTTPException(
                status_code=404,
                detail="Project not found"
            )

        return project

    finally:

        db.close()
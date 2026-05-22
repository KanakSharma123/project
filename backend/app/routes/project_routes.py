from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.database.db import SessionLocal
from app.models.project import Project
from app.schemas.project_schema import ProjectCreate
from app.services.market_scoring import calculate_market_score

router = APIRouter()


@router.post("/projects")
def create_project(project: ProjectCreate):

    db: Session = SessionLocal()

    # Calculate market score
    market_score = calculate_market_score(project)

    # Create project
    new_project = Project(
        company_name=project.company_name,
        industry=project.industry,
        target_market=project.target_market,
        business_model=project.business_model,
        market_size=project.market_size,
        competition_level=project.competition_level,
        growth_rate=project.growth_rate,
        regulatory_risk=project.regulatory_risk
    )

    db.add(new_project)
    db.commit()
    db.refresh(new_project)

    return {
        "project": new_project,
        "market_score": market_score
    }
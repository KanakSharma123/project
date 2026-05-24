from sqlalchemy import Column, Integer, String
from app.database.db import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    company_name = Column(String)
    industry = Column(String)
    target_market = Column(String)
    business_model = Column(String)
    market_size = Column(String)
    competition_level = Column(String)
    growth_rate = Column(String)
    regulatory_risk = Column(String)
    market_score = Column(Integer)
    ai_analysis = Column(String)
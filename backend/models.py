from sqlalchemy import Column, Integer, String, Text
from database import Base

class Analysis(Base):

    __tablename__ = "analyses"

    id = Column(Integer, primary_key=True, index=True)

    business_type = Column(String)

    location = Column(String)

    budget = Column(String)

    audience = Column(String)

    feasibility_score = Column(Integer)

    risk_level = Column(String)

    estimated_roi = Column(String)

    recommendation = Column(Text)

    ai_insights = Column(Text)
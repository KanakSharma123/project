from pydantic import BaseModel

class ProjectCreate(BaseModel):
    company_name: str
    industry: str
    target_market: str
    business_model: str
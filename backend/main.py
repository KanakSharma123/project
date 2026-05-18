from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class BusinessData(BaseModel):
    business_type: str
    location: str
    budget: int
    audience: str

# Analysis endpoint
@app.post("/analyze")
def analyze_business(data: BusinessData):

    score = 50

    # Simple rule-based logic
    if data.budget > 50000:
        score += 20

    if "students" in data.audience.lower():
        score += 10

    if data.business_type.lower() == "coffee shop":
        score += 10

    risk = "Medium"

    if score >= 80:
        risk = "Low"

    elif score < 60:
        risk = "High"

    return {
        "feasibility_score": score,
        "risk_level": risk,
        "estimated_roi": f"{score // 3}%",
        "recommendation": f"{data.business_type} business in {data.location} shows promising potential."
    }
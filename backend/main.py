from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Load model
model = genai.GenerativeModel("models/gemini-2.5-flash")

# Initialize FastAPI
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request schema
class BusinessData(BaseModel):
    business_type: str
    location: str
    budget: float
    audience: str

# API Route
@app.post("/analyze")
def analyze_business(data: BusinessData):

    # Basic scoring logic
    score = 50

    if float(data.budget) > 50000:
        score += 20

    if "students" in data.audience.lower():
        score += 10

    if data.business_type.lower() == "coffee shop":
        score += 10

    # Risk evaluation
    risk = "Medium"

    if score >= 80:
        risk = "Low"

    elif score < 60:
        risk = "High"

    # AI Prompt
    prompt = f"""
    You are a professional business consultant.

    Analyze this business idea:

    Business Type: {data.business_type}
    Location: {data.location}
    Budget: {data.budget}
    Target Audience: {data.audience}

    Generate:
    1. SWOT Analysis
    2. Business Recommendation
    3. Key Risks
    4. Market Opportunity

    Keep the response concise, professional, and structured.
    """

    # Generate AI response safely
    try:
        ai_response = model.generate_content(prompt)
        insights = ai_response.text

    except Exception as e:
        insights = f"AI generation failed: {str(e)}"

    # Return response
    return {
        "feasibility_score": score,
        "risk_level": risk,
        "estimated_roi": f"{score // 3}%",
        "recommendation": f"{data.business_type} business in {data.location} shows promising potential.",
        "ai_insights": insights
    }
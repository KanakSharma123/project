import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)

model = genai.GenerativeModel("models/gemini-2.5-flash")


def generate_market_analysis(project, market_score):

    prompt = f"""
    Analyze this market expansion opportunity.

    Company: {project.company_name}
    Industry: {project.industry}
    Target Market: {project.target_market}
    Business Model: {project.business_model}

    Market Size: {project.market_size}
    Competition Level: {project.competition_level}
    Growth Rate: {project.growth_rate}
    Regulatory Risk: {project.regulatory_risk}

    Market Attractiveness Score: {market_score}/100

    Provide:
    1. Market Overview
    2. Opportunities
    3. Risks
    4. Recommended Entry Strategy
    5. Final Recommendation
    """

    try:

        response = model.generate_content(prompt)

        return response.text

    except Exception as e:

        print("Gemini Error:", e)

        return """
AI analysis is temporarily unavailable due to API quota limits.

Fallback Strategic Summary:

- Market conditions appear favorable.
- Competitive intensity should be monitored carefully.
- A phased market entry strategy is recommended.
- Consider pilot launches before full expansion.
- Focus on differentiation and operational efficiency.
"""
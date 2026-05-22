def calculate_market_score(data):

    score = 0

    # Market Size

    if data.market_size == "large":
        score += 30
    elif data.market_size == "medium":
        score += 20
    else:
        score += 10

    # Competition

    if data.competition_level == "low":
        score += 25
    elif data.competition_level == "medium":
        score += 15
    else:
        score += 5

    # Growth Rate

    if data.growth_rate == "fast":
        score += 25
    elif data.growth_rate == "moderate":
        score += 15
    else:
        score += 5

    # Regulatory Risk

    if data.regulatory_risk == "low":
        score += 20
    elif data.regulatory_risk == "medium":
        score += 10
    else:
        score += 5

    return score
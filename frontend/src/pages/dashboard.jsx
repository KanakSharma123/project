import SwotAnalysis from "../components/SwotAnalysis";
import { useState } from "react";
import axios from "axios";
import RevenueChart from "../components/RevenueChart";

const Dashboard = () => {

  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    business_type: "",
    location: "",
    budget: "",
    audience: "",
  });

  const [result, setResult] = useState({
    feasibility_score: 82,
    risk_level: "Medium",
    estimated_roi: "24%",
    recommendation: "Your business insights will appear here.",
    ai_insights: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        formData
      );

      setResult(response.data);

      setHistory((prev) => [
        response.data,
        ...prev,
      ]);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="flex">

      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-slate-900 text-white p-6">

        <h1 className="text-2xl font-bold mb-10">
          MarketMind AI
        </h1>

        <ul className="space-y-4">

          <li className="hover:text-blue-400 cursor-pointer">
            Dashboard
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Analysis
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Forecasts
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Competitors
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen p-8">

        {/* Navbar */}
        <div className="bg-white p-5 rounded-2xl shadow mb-8 flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            Dashboard
          </h2>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
            New Analysis
          </button>

        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Feasibility */}
          <div className="bg-gradient-to-r from-green-500 to-green-400 text-white p-6 rounded-2xl shadow">

            <h3 className="text-white">
              Feasibility Score
            </h3>

            <p className="text-4xl font-bold mt-3 text-white">
              {result.feasibility_score}%
            </p>

          </div>

          {/* Risk */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-400 text-white p-6 rounded-2xl shadow">

            <h3 className="text-white">
              Risk Level
            </h3>

            <p className="text-4xl font-bold mt-3 text-white">
              {result.risk_level}
            </p>

          </div>

          {/* ROI */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl shadow">

            <h3 className="text-white">
              Estimated ROI
            </h3>

            <p className="text-4xl font-bold mt-3 text-white">
              {result.estimated_roi}
            </p>

          </div>

        </div>

        {/* Chart Section */}
        <div className="bg-white p-6 rounded-2xl shadow mb-8">

          <h3 className="text-xl font-bold mb-4">
            Revenue Forecast
          </h3>

          <RevenueChart />

        </div>

        {/* Analysis Form */}
        <div className="bg-white p-6 rounded-2xl shadow">

          <h3 className="text-xl font-bold mb-6">
            Business Analysis
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              name="business_type"
              placeholder="Business Type"
              className="p-3 rounded-xl border"
              onChange={handleChange}
            />

            <input
              type="text"
              name="location"
              placeholder="Target Location"
              className="p-3 rounded-xl border"
              onChange={handleChange}
            />

            <input
              type="number"
              name="budget"
              placeholder="Budget"
              className="p-3 rounded-xl border"
              onChange={handleChange}
            />

            <input
              type="text"
              name="audience"
              placeholder="Target Audience"
              className="p-3 rounded-xl border"
              onChange={handleChange}
            />

          </div>

          {/* Analyze Button */}
          <button
            onClick={handleSubmit}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            {loading ? "Analyzing..." : "Analyze Business"}
          </button>

          {/* Recommendation */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl">

            <h4 className="font-bold mb-2">
              Recommendation
            </h4>

            <p className="text-gray-700">
              {result.recommendation}
            </p>

          </div>

          {/* SWOT Analysis */}
          <SwotAnalysis insights={result.ai_insights} />

          {/* History Section */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">
              Previous Analyses
            </h2>

            <div className="space-y-4">

              {history.map((item, index) => (

                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow border"
                >

                  <p>
                    <strong>Score:</strong> {item.feasibility_score}%
                  </p>

                  <p>
                    <strong>Risk:</strong> {item.risk_level}
                  </p>

                  <p>
                    <strong>ROI:</strong> {item.estimated_roi}
                  </p>

                  <p className="mt-2 text-gray-600 text-sm">
                    {item.recommendation}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DashboardLayout from "../layouts/DashboardLayout";

function AnalysisPage() {

  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {

    fetchProject();

  }, []);

  const fetchProject = async () => {

    try {

      const response = await axios.get(
        `http://127.0.0.1:8000/projects/${id}`
      );

      setProject(response.data);

    } catch (error) {

      console.error(error);

    }
  };

  if (!project) {

    return <div>Loading...</div>;

  }

  return (

    <DashboardLayout>

      <div className="max-w-5xl mx-auto space-y-6">

        <div className="bg-white p-6 rounded-2xl shadow">

          <h1 className="text-3xl font-bold mb-2">
            {project.company_name}
          </h1>

          <p className="text-gray-500">
            {project.industry} • {project.target_market}
          </p>

        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl">

          <h2 className="text-2xl font-bold text-blue-700 mb-2">
            Market Attractiveness Score
          </h2>

          <p className="text-6xl font-bold text-blue-900">
            {project.market_score}/100
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold mb-4">
            AI Strategic Analysis
          </h2>

          <div className="whitespace-pre-wrap text-gray-700 leading-7">
            {project.ai_analysis}
          </div>

        </div>

      </div>

    </DashboardLayout>

  );
}

export default AnalysisPage;
const SwotAnalysis = ({ insights }) => {

  if (!insights) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

      <div className="bg-green-100 p-5 rounded-2xl">
        <h3 className="text-xl font-bold mb-3 text-green-800">
          Strengths
        </h3>

        <pre className="whitespace-pre-wrap text-sm">
          {insights}
        </pre>
      </div>

      <div className="bg-red-100 p-5 rounded-2xl">
        <h3 className="text-xl font-bold mb-3 text-red-800">
          Weaknesses / Threats
        </h3>

        <pre className="whitespace-pre-wrap text-sm">
          {insights}
        </pre>
      </div>

    </div>
  );
};

export default SwotAnalysis;
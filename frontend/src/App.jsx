import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/")
      .then((response) => {
        setMessage(response.data.message);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          AI Market Entry Advisor
        </h1>

        <p className="text-lg text-gray-700">
          Backend says: {message}
        </p>
      </div>
    </div>
  );
}

export default App;
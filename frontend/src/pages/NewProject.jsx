import { useState } from "react";
import axios from "axios";

function NewProject() {

  const [formData, setFormData] = useState({
    company_name: "",
    industry: "",
    target_market: "",
    business_model: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://127.0.0.1:8000/projects",
      formData
    );

    alert("Project Created");
  };

  return (
    <div>
      <h1>Create Project</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Company Name"
          onChange={(e) =>
            setFormData({
              ...formData,
              company_name: e.target.value
            })
          }
        />

        <button type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default NewProject;
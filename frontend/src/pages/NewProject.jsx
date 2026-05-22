import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

function NewProject() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    company_name: "",
    industry: "",
    target_market: "",
    business_model: "",
    budget: "",
    goals: "",
  });

  return (
    <DashboardLayout>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">

        <h1 className="text-3xl font-bold mb-2">
          Create New Project
        </h1>

        <div className="flex justify-between items-center mb-6">

          <p className="text-gray-500">
            Complete the onboarding process
          </p>

          <span className="text-sm font-medium text-blue-600">
            Step {step} of 4
          </span>

        </div>

        {/* Progress Bar */}

        <div className="w-full bg-gray-200 h-3 rounded-full mb-8">

          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />

        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <div className="space-y-4">

            <h2 className="text-xl font-semibold">
              Company Information
            </h2>

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.company_name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company_name: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Industry"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.industry}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  industry: e.target.value,
                })
              }
            />

          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div className="space-y-4">

            <h2 className="text-xl font-semibold">
              Market Information
            </h2>

            <input
              type="text"
              placeholder="Target Market"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.target_market}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  target_market: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Business Model"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.business_model}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  business_model: e.target.value,
                })
              }
            />

          </div>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <div className="space-y-4">

            <h2 className="text-xl font-semibold">
              Business Goals
            </h2>

            <textarea
              placeholder="Enter business goals"
              className="w-full border p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.goals}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  goals: e.target.value,
                })
              }
            />

          </div>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <div className="space-y-4">

            <h2 className="text-xl font-semibold">
              Budget & Constraints
            </h2>

            <input
              type="number"
              placeholder="Budget"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.budget}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  budget: e.target.value,
                })
              }
            />

          </div>
        )}

        {/* Navigation Buttons */}

        <div className="flex justify-between mt-8">

          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="bg-gray-300 px-5 py-2 rounded-lg"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-2 rounded-lg"
            >
              Submit
            </button>
          )}

        </div>

      </div>

    </DashboardLayout>
  );
}

export default NewProject;
import React from 'react'

export const ExperienceData = ({ formData, setFormData, BackStep, skipStep, nextStep }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>

      {formData.experience.map((exp, index) => (
        <div 
        key={index} 
        className="mb-4">
          <input
            type="text"
            placeholder="Company / Organization"
            value={exp.company}
            onChange={(e) => {
              const updatedExperience = [...formData.experience];
              updatedExperience[index].company = e.target.value;
              setFormData({ ...formData, experience: updatedExperience });
            }}
            className="border p-2 mb-2 w-full rounded-lg"
          />
          <input
            type="text"
            placeholder="Position / Role"
            value={exp.position}
            onChange={(e) => {
              const updatedExperience = [...formData.experience];
              updatedExperience[index].position = e.target.value;
              setFormData({ ...formData, experience: updatedExperience });
            }}
            className="border p-2 mb-2 w-full rounded-lg"
          />
          <input
            type="text"
            placeholder="Duration (e.g., 2022-2024)"
            value={exp.duration}
            onChange={(e) => {
              const updatedExperience = [...formData.experience];
              updatedExperience[index].duration = e.target.value;
              setFormData({ ...formData, experience: updatedExperience });
            }}
            className="border p-2 w-full rounded-lg"
          />
        </div>
      ))}

      <button
        onClick={() =>
          setFormData({
            ...formData,
            experience: [
              ...formData.experience,
              { company: "", position: "", duration: "" },
            ],
          })
        }
        className="bg-green-500 text-white px-4 py-2 mb-6 rounded-lg"
      >
        + Add Another
      </button>

      <div className="flex justify-between">
        <button
          onClick={BackStep}
          className="text-gray-600 border border-gray-300 px-6 py-2 rounded-lg"
        >
          Back
        </button>
        <button
          onClick={skipStep}
          className="text-gray-600 border border-gray-300 px-6 py-2 rounded-lg"
        >
          Skip
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

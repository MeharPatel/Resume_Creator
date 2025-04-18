import React from 'react'

export const EducationData = ({ formData, skipStep, nextStep, BackStep, setFormData}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>

      {formData.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="School / University"
            value={edu.school}
            onChange={(e) => {
              const updatedEducation = [...formData.education];
              updatedEducation[index].school = e.target.value;
              setFormData({ ...formData, education: updatedEducation });
            }}
            className="border p-2 mb-2 w-full rounded-lg"
          />
          <input
            type="text"
            placeholder="Degree / Program"
            value={edu.degree}
            onChange={(e) => {
              const updatedEducation = [...formData.education];
              updatedEducation[index].degree = e.target.value;
              setFormData({ ...formData, education: updatedEducation });
            }}
            className="border p-2 mb-2 w-full rounded-lg"
          />
          <input
            type="text"
            placeholder="Year"
            value={edu.year}
            onChange={(e) => {
              const updatedEducation = [...formData.education];
              updatedEducation[index].year = e.target.value;
              setFormData({ ...formData, education: updatedEducation });
            }}
            className="border p-2 w-full rounded-lg"
          />
        </div>
      ))}

      <button
        onClick={() =>
          setFormData({
            ...formData,
            education: [
              ...formData.education,
              { school: "", degree: "", year: "" },
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
          className="text-gray-600 border border-gray-300 px-6 py-2 rounded-lg">
          Back
        </button>
        <button
          onClick={skipStep}
          className="text-gray-600 border border-gray-300 px-6 py-2 rounded-lg">
          Skip
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
}

import React from 'react'

export const ExperienceData = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Work Experience</h2>

      {formData.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor={index + "company"} className="block text-sm font-medium mb-1">
                    Company
              </label>
              <input
                type="text"
                id={index + "company"}
                name="company"
                placeholder="company"
                value={exp.company}
                onChange={(e) => {
                  const updatedExperience = [...formData.experience];
                  updatedExperience[index].company = e.target.value;
                  setFormData({ ...formData, experience: updatedExperience });
                }}
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>
            <div>
              <label htmlFor={index + "position"} className="block text-sm font-medium mb-1">
                      Position
              </label>
              <input
                type="text"
                id={index + "position"}
                name="position"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => {
                  const updatedExperience = [...formData.experience];
                  updatedExperience[index].position = e.target.value;
                  setFormData({ ...formData, experience: updatedExperience });
                }}
                className="border p-2 mb-4 w-full rounded-lg"
                />
              </div>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor={index + "start_date"} className="block text-sm font-medium mb-1">
                    Start Date
              </label>
              <input
                type="month"
                id={index + "start_date"}
                name="start_date"
                value={exp.start_date}
                onChange={(e) => {
                  const updatedExperience = [...formData.experience];
                  updatedExperience[index].start_date = e.target.value;
                  setFormData({ ...formData, experience: updatedExperience });
                }}
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>
            <div>
            <div className="flex items-center mb-2">
              <label htmlFor={index + "end_date"} className="block text-sm font-medium">
                End Date
              </label>
              <div className="ml-auto flex items-center space-x-2">
                <input
                  type="checkbox" 
                  id={index + "currentJob"}
                  defaultChecked={exp.current}
                  onChange={(e) => {
                    const updatedExperience = [...formData.experience];
                    updatedExperience[index].current = e.target.value;
                    setFormData({ ...formData, experience: updatedExperience });
                  }}
                />
                <label 
                  htmlFor={index + "currentJob"} 
                  className="text-xs text-gray-600 cursor-pointer">
                  Currently working here
                </label>
              </div>
            </div>
              <input
                type="month"
                id={index + "end_date"}
                name="end_date"
                value={exp.end_date}
                onChange={(e) => {
                  const updatedExperience = [...formData.experience];
                  updatedExperience[index].end_date = e.target.value;
                  setFormData({ ...formData, experience: updatedExperience });
                }}
                disabled={exp.current}
                className="border p-2 mb-4 w-full rounded-lg"
                />
              </div>
            </div>

            <div>
              <label htmlFor={index + "description"} className="block text-sm font-medium mb-1">
                    Description
              </label>
              <input
                id={index + "description"}
                type="text"
                name="description"
                value={exp.description}
                onChange={(e) => {
                  const updatedExperience = [...formData.experience];
                  updatedExperience[index].description = e.target.value;
                  setFormData({ ...formData, experience: updatedExperience });
                }}
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>

        </div>
      ))}

      <button
        onClick={() =>
          setFormData({
            ...formData,
            experience: [
              ...formData.experience,
              { company: "", position: "", start_date: "", end_date: "", current: false, description: "" },
            ],
          })
        }
        className="bg-green-500 text-white px-4 py-2 mb-6 rounded-lg"
      >
        + Add Another
      </button>

    </div>
  );
}

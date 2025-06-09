import React from 'react'
import { XIcon } from 'lucide-react';
import { toast } from "sonner";

export const EducationData = ({ formData, setFormData}) => {

  const handleDeleteEducation = (index) => {
    setFormData((prev) => ({
        ...prev,
        education: prev.education.filter((_, i) => i !== index),
    }));
    toast.success('Education deleted successfully');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>

      {formData.education.map((edu, index) => (
        <div key={index} className="mb-4 edu-one p-4">
            <div className='flex justify-end'>
            <button
              onClick={() => handleDeleteEducation(index)}
              className="h-7 w-7 text-gray-500 hover:text-red-500">
                <XIcon className="h-3.5 w-3.5" />
              </button>
            </div>
            <div>
              <label htmlFor={index + "school"} className="block text-sm font-medium mb-1">
                    School / University
              </label>
              <input
                id={index + "school"}
                type="text"
                name="school"
                placeholder="School Name"
                value={edu.school}
                onChange={(e) => {
                  const updatedEducation = [...formData.education];
                  updatedEducation[index].school = e.target.value;
                  setFormData({ ...formData, education: updatedEducation });
                }}
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor={index + "degree"} className="block text-sm font-medium mb-1">
                    Degree
              </label>
              <input
                type="text"
                id={index + "degree"}
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => {
                  const updatedEducation = [...formData.education];
                  updatedEducation[index].degree = e.target.value;
                  setFormData({ ...formData, education: updatedEducation });
                }}
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>
            <div>
              <label htmlFor={index + "field_of_study"} className="block text-sm font-medium mb-1">
                      Field Of Study
              </label>
              <input
                type="text"
                id={index + "field_of_study"}
                name="field_of_study"
                placeholder="Field Of Study"
                value={edu.field_of_study}
                onChange={(e) => {
                  const updatedEducation = [...formData.education];
                  updatedEducation[index].field_of_study = e.target.value;
                  setFormData({ ...formData, education: updatedEducation });
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
                value={edu.start_date}
                onChange={(e) => {
                  const updatedEducation = [...formData.education];
                  updatedEducation[index].start_date = e.target.value;
                  setFormData({ ...formData, education: updatedEducation });
                }}
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>
            <div>
              <label htmlFor={index + "end_date"} className="block text-sm font-medium mb-1">
                      End Date (or Expectred)
              </label>
              <input
                type="month"
                id={index + "end_date"}
                name="end_date"
                value={edu.end_date}
                onChange={(e) => {
                  const updatedEducation = [...formData.education];
                  updatedEducation[index].end_date = e.target.value;
                  setFormData({ ...formData, education: updatedEducation });
                }}
                className="border p-2 mb-4 w-full rounded-lg"
                />
              </div>
            </div>

            <div>
              <label htmlFor={index + "description"} className="block text-sm font-medium mb-1">
                    Description
              </label>
              <input
                type="text"
                id={index + "description"}
                name="description"
                placeholder="Description"
                value={edu.description}
                onChange={(e) => {
                  const updatedEducation = [...formData.education];
                  updatedEducation[index].description = e.target.value;
                  setFormData({ ...formData, education: updatedEducation });
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
            education: [
              ...formData.education,
              { school: "", degree: "", field_of_study: "", start_date: "", end_date: "", description: "" },
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

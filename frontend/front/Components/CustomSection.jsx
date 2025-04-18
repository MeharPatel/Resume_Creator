import React, { useState } from 'react'

export const CustomSection = ({ formData, setFormData, BackStep, saveResumeData }) => {

    const [sections, setSections] = useState([]);

    const addSection = () => {
      setSections([...sections, { sectionName: '', items: [''] }]);
    };

    const updateSectionName = (index, name) => {
      const updated = [...sections];
      updated[index].sectionName = name;
      setSections(updated);
      onChange(updated);
    };

    const updateItem = (sectionIndex, itemIndex, value) => {
      const updated = [...sections];
      updated[sectionIndex].items[itemIndex] = value;
      setSections(updated);
      onChange(updated);
    };

    const addItem = (sectionIndex) => {
      const updated = [...sections];
      updated[sectionIndex].items.push('');
      setSections(updated);
      onChange(updated);
    };


    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold">📝 Add Custom Sections</h2>

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border p-4 rounded-md space-y-3">
            <input
              type="text"
              placeholder="Section Name (e.g., Hobbies)"
              value={section.sectionName}
              onChange={(e) => updateSectionName(sectionIndex, e.target.value)}
              className="w-full p-2 border rounded"
            />

            {section.items.map((item, itemIndex) => (
              <input
                key={itemIndex}
                type="text"
                placeholder={`Item ${itemIndex + 1}`}
                value={item}
                onChange={(e) => updateItem(sectionIndex, itemIndex, e.target.value)}
                className="w-full p-2 border rounded mt-2"
              />
            ))}

            <button
              type="button"
              onClick={() => addItem(sectionIndex)}
              className="text-blue-600 underline mt-2"
            >
              Add Another Item
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addSection}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add New Section
        </button>
        <div className="flex justify-between">
          <button
                  onClick={BackStep}
                  className="text-gray-600 border border-gray-300 px-6 py-2 rounded-lg"
              >
              Back
              </button>
              <button
                  onClick={saveResumeData}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                  Finish
          </button>
          </div>
      </div>
    )
}

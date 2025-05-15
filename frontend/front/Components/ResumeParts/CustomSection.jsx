import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CustomSection = ({ BackStep, saveResumeData, formData, setFormData }) => {
    const [sections, setSections] = useState(formData.customSections || []);
    
    const addSection = () => {
        const updatedSections = [...sections, { sectionName: '', items: [''] }];
        setSections(updatedSections);
        updateFormData(updatedSections);
    };

    const updateSectionName = (index, name) => {
        const updated = [...sections];
        updated[index].sectionName = name;
        setSections(updated);
        updateFormData(updated);
    };

    const updateItem = (sectionIndex, itemIndex, value) => {
        const updated = [...sections];
        updated[sectionIndex].items[itemIndex] = value;
        setSections(updated);
        updateFormData(updated);
    };

    const addItem = (sectionIndex) => {
        const updated = [...sections];
        updated[sectionIndex].items.push('');
        setSections(updated);
        updateFormData(updated);
    };

    const updateFormData = (updatedSections) => {
        setFormData(prev => ({
            ...prev,
            customSections: updatedSections
        }));
    };

    const handleSave = () => {
        updateFormData(sections);
        saveResumeData();
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
                <Link to='/resumepreview' 
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                >
                    Finish
                </Link>
            </div>
        </div>
    )
}
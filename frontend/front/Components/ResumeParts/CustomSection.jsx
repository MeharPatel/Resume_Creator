import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CustomSection = ({ formData, setFormData }) => {
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

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold">📝 Add Custom Sections</h2>

            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="border p-4 rounded-md space-y-3">
                 <div>
                    <label htmlFor={sectionIndex + "name"} className="block text-sm font-medium mb-1">
                            Section Name
                    </label>
                    <input
                        type="text"
                        id={sectionIndex + "name"}
                        name="name"
                        placeholder="Section Name"
                        value={section.sectionName}
                        onChange={(e) => updateSectionName(sectionIndex, e.target.value)}
                        className="border p-2 mb-4 w-full rounded-lg"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    {section.items.map((item, itemIndex) => (
                        <div>
                
                        <label htmlFor={itemIndex + "item"} className="block text-sm font-medium mb-1">
                                Item{itemIndex + 1} Name
                        </label>
                        <input
                            type="text"
                            id={itemIndex + "item"}
                            name="item"
                            placeholder="Item Name"
                            value={item}
                            onChange={(e) => updateItem(sectionIndex, itemIndex, e.target.value)}
                            className="border p-2 mb-0 w-full rounded-lg"
                            />
                        </div>
                    ))}
                        </div>

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
            
        </div>
    )
}
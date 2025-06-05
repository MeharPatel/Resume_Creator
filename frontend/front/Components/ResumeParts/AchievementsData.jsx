import React, { useState } from 'react'
import { PencilIcon, XIcon } from 'lucide-react';
import { toast } from "sonner";

export const AchievementsData = ({ formData, setFormData }) => {
    const [currentAchievement, setCurrentAchievement] = useState({
        title: ""
    });
    const [editIndex, setEditIndex] = useState(null);

    const handleEditAchievement = (index) => {
        setCurrentAchievement(formData.achievements[index]);
        setEditIndex(index);
    };

    const handleDeleteAchievement = (index) => {
        setFormData((prev) => ({
            ...prev,
            achievements: prev.achievements.filter((_, i) => i !== index),
        }));
        if (editIndex === index) {
            setCurrentAchievement({ title: "" });
            setEditIndex(null);
        }
        toast.success("Achievement deleted successfully");
    };

    const handleSaveAchievements = () => {
        if (!currentAchievement.title.trim()) {
            toast.error("Achievement title is required");
            return;
        }

        if (editIndex !== null) {
            setFormData((prev) => ({
                ...prev,
                achievements: prev.achievements.map((achievement, i) => (i === editIndex ? currentAchievement : achievement)),
            }));
            toast.success("Skill updated successfully");
            setEditIndex(null);
        } else {
            setFormData((prev) => ({
                ...prev,
                achievements: [...prev.achievements, currentAchievement],
            }));
            console.log(currentAchievement);
            
            toast.success("Achievements added successfully");
        }
        setCurrentAchievement({ title: "" });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentAchievement((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Achievements</h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            <div>
              <label htmlFor="achievement" className="block text-sm font-medium mb-1">
                    Achievement Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={currentAchievement.title}
                onChange={handleInputChange}
                placeholder="Achievement Name"
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>
      
            {/* </div> */}

        <div className="mb-4">
            <button
            onClick={handleSaveAchievements}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
            {editIndex !== null ? "Update Achievement" : "Add Achievement"}
            </button>
        </div>

        <ul className="mb-6">
            {formData.achievements.map((ach, index) => (
            <li
                key={index}
                className="bg-gray-100 p-3 rounded mb-2 flex justify-between items-center"
            >
                <span>{ach.title}</span>
                {ach.file && (
                <span className="text-sm text-blue-600">{ach.file.name}</span>
                )}
                <div className="flex gap-1">
                            <button
                                onClick={() => handleEditAchievement(index)}
                                className="h-7 w-7 text-gray-500 hover:text-resume-primary"
                            >
                                <PencilIcon className="h-3.5 w-3.5" />
                            </button>
                            <button
                                onClick={() => handleDeleteAchievement(index)}
                                className="h-7 w-7 text-gray-500 hover:text-red-500"
                            >
                                <XIcon className="h-3.5 w-3.5" />
                            </button>
                        </div>
            </li>
            ))}
        </ul>

        </div>
    );
}

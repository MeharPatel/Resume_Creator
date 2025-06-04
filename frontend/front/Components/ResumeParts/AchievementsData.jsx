import React, { useState } from 'react'
import { PencilIcon, XIcon } from 'lucide-react';
import { toast } from "sonner";

export const AchievementsData = ({ formData, setFormData }) => {
    const [currentAchievement, setCurrentAchievement] = useState({
        title: "",
        file: null,
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
            setCurrentAchievement({ name: "", level: 1 });
            setEditIndex(null);
        }
        toast.success("Achievement deleted successfully");
    };

    const handleSaveAchievements = () => {
        if (!currentAchievement.name.trim()) {
            toast.error("Skill name is required");
            return;
        }
        const newAchievement = { title: "", file: null }; 

        if (editIndex !== null) {
            setFormData((prev) => ({
                ...prev,
                skills: prev.skills.map((skill, i) => (i === editIndex ? newAchievement : skill)),
            }));
            toast.success("Skill updated successfully");
            setEditIndex(null);
        } else {
            setFormData((prev) => ({
                ...prev,
                skills: [...prev.skills, newAchievement],
            }));
            toast.success("Skill added successfully");
        }
        setCurrentAchievement({ name: "", level: 1 });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentAchievement((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="achievement" className="block text-sm font-medium mb-1">
                    Achievement Name
              </label>
              <input
                type="text"
                id="achievement"
                name="achievement"
                placeholder="Achievement Name"
                value={currentAchievement.title}
                onChange={handleInputChange}
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>
            <div>
              <label htmlFor="file" className="block text-sm font-medium mb-1">
                      Files
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={(e) =>
                    setCurrentAchievement({
                    ...currentAchievement,
                    file: e.target.files[0],
                    })
                }
                className="border p-2 mb-4 w-full rounded-lg"
                />
              </div>
            </div>

        <div className="mb-4">
            <button
            onClick={() => {
                if (currentAchievement.title.trim() !== "") {
                setFormData({
                    ...formData,
                    achievements: [...formData.achievements, currentAchievement],
                });
                setCurrentAchievement({ title: "", file: null });
                }
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
            Add Achievement
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
                                // onClick={() => handleEditSkill(index)}
                                className="h-7 w-7 text-gray-500 hover:text-resume-primary"
                            >
                                <PencilIcon className="h-3.5 w-3.5" />
                            </button>
                            <button
                                // onClick={() => handleDeleteSkill(index)}
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

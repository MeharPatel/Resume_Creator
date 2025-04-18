import React, { useState } from 'react'

export const AchievementsData = ({ formData, setFormData, skipStep, BackStep, nextStep }) => {
    const [currentAchievement, setCurrentAchievement] = useState({
        title: "",
        file: null,
    });
    return (
        <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Achievements</h2>

        <div className="mb-4">
            <input
            type="text"
            placeholder="Achievement Title"
            value={currentAchievement.title}
            onChange={(e) =>
                setCurrentAchievement({
                ...currentAchievement,
                title: e.target.value,
                })
            }
            className="border p-2 w-full rounded mb-2"
            />
            <input
            type="file"
            onChange={(e) =>
                setCurrentAchievement({
                ...currentAchievement,
                file: e.target.files[0],
                })
            }
            className="mb-2"
            />
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
            </li>
            ))}
        </ul>

        <div className="flex justify-between">
            <button
            onClick={skipStep}
            className="text-gray-600 border border-gray-300 px-6 py-2 rounded-lg"
            >
            Skip
            </button>
            <button
            onClick={BackStep}
            className="text-gray-600 border border-gray-300 px-6 py-2 rounded-lg"
            >
            Back
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

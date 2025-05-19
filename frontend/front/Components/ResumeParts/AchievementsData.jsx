import React, { useState } from 'react'

export const AchievementsData = ({ formData, setFormData }) => {
    const [currentAchievement, setCurrentAchievement] = useState({
        title: "",
        file: null,
    });
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
                onChange={(e) =>
                    setCurrentAchievement({
                    ...currentAchievement,
                    title: e.target.value,
                    })
                }
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
            </li>
            ))}
        </ul>

        </div>
    );
}

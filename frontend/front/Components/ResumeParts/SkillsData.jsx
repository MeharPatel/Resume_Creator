import React, { useState } from 'react'

export default function SkillsData({ formData, setFormData }) {
    const [currentSkill, setCurrentSkill] = useState();

    return (
        <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>

        <div className="flex mb-4">
            <input
            type="text"
            placeholder="Enter a skill"
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
            className="border p-2 flex-1 rounded-l-lg"
            />
            <button
            onClick={() => {
                if (currentSkill.trim() !== "") {
                setFormData({
                    ...formData,
                    skills: [...formData.skills, currentSkill.trim()],
                });
                setCurrentSkill(""); // clear the input
                }
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-r-lg"
            >
            Add Skill
            </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
            {formData.skills.map((skill, index) => (
            <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                {skill}
            </span>
            ))}
        </div>

        </div>
    );
}

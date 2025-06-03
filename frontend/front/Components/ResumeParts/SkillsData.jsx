import React, { useState } from 'react'
import Slider from '../Slider';
import { PencilIcon, XIcon } from 'lucide-react'
import { toast } from "sonner";
// import { Slider } from '../Slider';

export default function SkillsData({ formData, setFormData, handleChange }) {
    const [currentSkill, setCurrentSkill] = useState();

    const handleEditSkill = (index) => {
      setCurrentSkill({ ...formData.skills[index], index });
    };

    const handleDeleteSkill = (index) => {
      setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index),
      }));
    };

    return (
        <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Skill Name
          </label>
          <input
            id="name"
            name="name"
            value={currentSkill}
            onChange={handleChange}
            placeholder="JavaScript"
            required
          />
        </div>

        <div className=" mb-4">
            <input
            type="text"
            placeholder="Enter a skill"
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
            className="border p-2 flex-1 rounded-l-lg"
            />

        {/* <Slider
            value={proficiency}
            onValueChange={setProficiency}
            min={1}
            max={5}
            step={1}
          /> */}

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
            <div
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-xl">
                <div>
                
                <h4 className="font-medium">{skill}</h4>
                <span className="text-xs text-gray-600 ml-2">
                  Beginner
                </span>
                </div>

                <div className="flex gap-1">
                    <button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(skill)}
                      className="h-7 w-7 text-gray-500 hover:text-resume-primary"
                    >
                      <PencilIcon className="h-3.5 w-3.5" />
                    </button>
                    <button
                      variant="ghost"
                      size="icon"
                      // onClick={() => handleDelete(skill.id)}
                      className="h-7 w-7 text-gray-500 hover:text-red-500"
                    >
                      <XIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
            </div>
            ))}
        </div>

        </div>
    );
}

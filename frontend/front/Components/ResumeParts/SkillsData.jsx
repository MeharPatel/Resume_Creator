import React, { useState } from 'react';
import Slider from '../Slider';
import { PencilIcon, XIcon, Plus, Check } from 'lucide-react';
import { toast } from "sonner";

export default function SkillsData({ formData, setFormData }) {
    const [currentSkill, setCurrentSkill] = useState({ name: "", level: 1 });
    const [editIndex, setEditIndex] = useState(null);
    const [sliderValue, setSliderValue] = useState([1]); // Fix: Track slider value separately

    // Map level to stage name
    const levelToStage = (level) => {
        switch (level) {
            case 1: return "Beginner";
            case 2: return "Intermediate";
            case 3: return "Proficient";
            case 4: return "Advanced";
            case 5: return "Expert";
            default: return "Beginner";
        }
    };

    const handleEditSkill = (index) => {
        setCurrentSkill(formData.skills[index]);
        setSliderValue([formData.skills[index].level]); // Fix: Set slider value
        setEditIndex(index);
    };

    const handleDeleteSkill = (index) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index),
        }));
        if (editIndex === index) {
            setCurrentSkill({ name: "", level: 1 });
            setSliderValue([1]); 
            setEditIndex(null);
        }
        toast.success("Skill deleted successfully");
    };

    const handleSaveSkill = () => {
        if (!currentSkill.name.trim()) {
            toast.error("Skill name is required");
            return;
        }
        const newSkill = { name: currentSkill.name.trim(), level: sliderValue[0] }; 

        if (editIndex !== null) {
            setFormData((prev) => ({
                ...prev,
                skills: prev.skills.map((skill, i) => (i === editIndex ? newSkill : skill)),
            }));
            toast.success("Skill updated successfully");
            setEditIndex(null);
        } else {
            setFormData((prev) => ({
                ...prev,
                skills: [...prev.skills, newSkill],
            }));
            toast.success("Skill added successfully");
        }
        setCurrentSkill({ name: "", level: 1 });
        setSliderValue([1]); // Fix: Reset slider value
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentSkill((prev) => ({ ...prev, [name]: value }));
    };

    const handleSliderChange = (value) => {
        setSliderValue(value);
        setCurrentSkill((prev) => ({ ...prev, level: value[0] }));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>

            <div>
                <label htmlFor="name" className="resume-input-label block text-sm font-medium mb-1">
                    Skill Name
                </label>
                <input
                    id="name"
                    name="name"
                    value={currentSkill.name}
                    onChange={handleInputChange}
                    placeholder="JavaScript"
                    required
                    className="resume-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            <div className="mb-4 mt-5">
                <label htmlFor="level" className="resume-input-label block text-sm font-medium mb-1">
                    Proficiency Level ({levelToStage(sliderValue[0])}) 
                </label>
                <Slider
                    value={sliderValue} 
                    onValueChange={handleSliderChange}
                    min={1}
                    max={5}
                    step={1}
                    className="mt-2"
                />
                <div className="flex justify-between text-xs resume-input-label mt-1">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Proficient</span>
                    <span>Advanced</span>
                    <span>Expert</span>
                </div>

                <div className='mt-4 '>
                    <button type="button" className="add_btn flex"
                        onClick={handleSaveSkill}
                        >
                        <span className="add_text flex items-center justify-center">
                          <span className="m-2 add_btn_text_part"> {editIndex !== null ? "Update Skill" : "Add Skill"} </span>
                        </span>
                        <span className="add_plus p-1 flex items-center justify-center">
                            { editIndex !== null ? <Check className='h-8 w-8' /> : <Plus className="h-8 w-8" /> }
                        </span>
                      </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {formData.skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-xl flex items-center justify-between"
                    >
                        <div className='px-2'>
                            <h4 className="font-medium">{skill.name}</h4>
                            <span className="text-xs text-gray-600 mx-2">
                                {levelToStage(skill.level)}
                            </span>
                        </div>
                        <div className="flex gap-1">
                            <button
                                onClick={() => handleEditSkill(index)}
                                className="h-7 w-7"
                            >
                                <PencilIcon className="h-3.5 w-3.5 pencil-icon" />
                            </button>
                            <button
                                onClick={() => handleDeleteSkill(index)}
                                className="h-7 w-7 hover:text-red-500"
                            >
                                <XIcon className="h-3.5 w-3.5 x-item-icon" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
import React, { useState } from 'react'
import { PencilIcon, XIcon } from 'lucide-react';
import { toast } from "sonner";

export const SocialLinksData = ({ formData, setFormData }) => {
    const [currentSocial, setCurrentSocial] = useState({ name: "", link: "" });
    const [editIndex, setEditIndex] = useState(null);

    const defaultSocials = [
        { name: "GitHub", key: "github", icon: "logo-github" },
        { name: "LinkedIn", key: "linkedin", icon: "logo-linkedin" },
        { name: "Instagram", key: "instagram", icon: "logo-instagram" },
        { name: "Facebook", key: "facebook", icon: "logo-facebook" },
        { name: "Portfolio", key: "portfolio", icon: "at" },
    ];

    const handleEditSocial = (index) => {
        setCurrentSocial(formData.otherSocialLinks[index]);
        setEditIndex(index);
    };

    const handleDeleteSocial = (index) => {
            setFormData((prev) => ({
                ...prev,
                otherSocialLinks: prev.otherSocialLinks.filter((_, i) => i !== index),
            }));
            if (editIndex === index) {
                setCurrentSocial({ name: "", link: "" });
                setEditIndex(null);
            }
            toast.success("Project deleted successfully");
        };

        const handleSaveSocial = () => {
            if (!currentSocial.name.trim()) {
                toast.error("Social Media name is required");
                return;
            }
            const newSocial = { name: currentSocial.name.trim(), link: currentSocial.link.trim() }; 
            
    
            if (editIndex !== null) {
                setFormData((prev) => ({
                    ...prev,
                    otherSocialLinks: prev.otherSocialLinks.map((social, i) => (i === editIndex ? newSocial : social)),
                }));
                toast.success("Social Media updated successfully");
                setEditIndex(null);
            } else {
                setFormData((prev) => ({
                    ...prev,
                    otherSocialLinks: [...prev.otherSocialLinks, newSocial],
                }));
                toast.success("Social Media added successfully");
            }
            setCurrentSocial({ name: "", link: "" });
        };


    return (
        <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Social Accounts</h2>

        <div className="space-y-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {defaultSocials.map((social, index) => (

            <div key={index} className="flex items-center gap-4">
                <ion-icon
                name={social.icon}
                alt={social.name}
                className="w-8 h-8" />
                <input
                type="text"
                placeholder={`Your ${social.name} link`}
                value={formData.socialLinks[social.key] || ""}
                onChange={(e) =>
                    setFormData({
                    ...formData,
                    socialLinks: {
                        ...formData.socialLinks,
                        [social.key]: e.target.value,
                    },
                    })
                }
                className="border p-2 flex-1 rounded" />
            </div>
            ))}
            </div>
        </div>

        <div className="mb-4 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Want To Add More?</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Social Media Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Social Media Name"
                value={currentSocial.name}
                onChange={(e) =>
                    setCurrentSocial({ ...currentSocial, name: e.target.value })
                }
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>
            <div>
              <label htmlFor="link" className="block text-sm font-medium mb-1">
                      Social Media Link
              </label>
              <input
                type="text"
                id="link"
                name="link"
                placeholder="Social Media Link"
                value={currentSocial.link}
                onChange={(e) =>
                    setCurrentSocial({ ...currentSocial, link: e.target.value })
                }
                className="border p-2 mb-4 w-full rounded-lg"
                />
              </div>
            </div>

            <button
            onClick={handleSaveSocial}
            className="bg-green-500 text-white px-4 py-2 rounded-lg">
                {editIndex !== null ? "Update Social Media" : "Add Social Media"}
            </button>

            <ul className="mt-4">
            {formData.otherSocialLinks.map((social, index) => (
            <div className='bg-gray-100 p-3 rounded mb-2 flex justify-between'>

                <li key={index} className="text-sm text-gray-700 mb-1">
                <span className='font-semibold text-gray-900'>{social.name}</span>: {social.link}
                </li>
                <div className="flex gap-1">
                <button
                    onClick={() => handleEditSocial(index)}
                    className="h-7 w-7 text-gray-500 hover:text-resume-primary"
                >
                    <PencilIcon className="h-3.5 w-3.5" />
                </button>
                <button
                    onClick={() => handleDeleteSocial(index)}
                    className="h-7 w-7 text-gray-500 hover:text-red-500"
                >
                    <XIcon className="h-3.5 w-3.5" />
                </button>
            </div>
            </div>
            ))}
            </ul>
        </div>

        </div>
    );
}

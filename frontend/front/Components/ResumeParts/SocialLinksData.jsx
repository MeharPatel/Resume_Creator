import React, { useState } from 'react'

export const SocialLinksData = ({ formData, setFormData }) => {
    const [currentSocial, setCurrentSocial] = useState({ name: "", link: "" });

    const defaultSocials = [
        { name: "GitHub", key: "github", icon: "logo-github" },
        { name: "LinkedIn", key: "linkedin", icon: "logo-linkedin" },
        { name: "Instagram", key: "instagram", icon: "logo-instagram" },
        { name: "Facebook", key: "facebook", icon: "logo-facebook" },
        { name: "Portfolio", key: "portfolio", icon: "at" },
        { name: "Contact", key: "contact", icon: "contact" },
        { name: "EmailId", key: "EmailId", icon: "mail" },
    ];

    return (
        <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Social Accounts</h2>

        <div className="space-y-4 mb-6">
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

        <div className="mb-4 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Add Other Social Media</h3>

            <input
            type="text"
            placeholder="Social Media Name"
            value={currentSocial.name}
            onChange={(e) =>
                setCurrentSocial({ ...currentSocial, name: e.target.value })
            }
            className="border p-2 w-full rounded mb-2" /> 
            <input
            type="text"
            placeholder="Social Media Link"
            value={currentSocial.link}
            onChange={(e) =>
                setCurrentSocial({ ...currentSocial, link: e.target.value })
            }
            className="border p-2 w-full rounded mb-4" />

            <button
            onClick={() => {
                if (currentSocial.name.trim() && currentSocial.link.trim()) {
                setFormData({
                    ...formData,
                    otherSocialLinks: [...formData.otherSocialLinks, currentSocial],
                });
                setCurrentSocial({ name: "", link: "" });
                }
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Add Social Media
            </button>

            <ul className="mt-4">
            {formData.otherSocialLinks.map((social, index) => (
                <li key={index} className="text-sm text-gray-700 mb-1">
                {social.name}: {social.link}
                </li>
            ))}
            </ul>
        </div>

        </div>
    );
}

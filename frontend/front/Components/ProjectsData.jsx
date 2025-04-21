import React, { useState } from 'react'

export const ProjectsData = ({ formData, setFormData, skipStep, BackStep, nextStep }) => {
    const [currentProject, setCurrentProject] = useState({
        title: "",
        projectUrl: "",
        githubLink: "",
        image: null,
        description: "",
    });
    return (
        <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>

        <div className="mb-4">
            <input
            type="text"
            placeholder="Project Title"
            value={currentProject.title}
            onChange={(e) =>
                setCurrentProject({
                ...currentProject,
                title: e.target.value,
                })
            }
            className="border p-2 w-full rounded mb-2" />

            <input
            type="text"
            placeholder="Project URL (optional)"
            value={currentProject.projectUrl}
            onChange={(e) =>
                setCurrentProject({
                ...currentProject,
                projectUrl: e.target.value,
                })
            }
            className="border p-2 w-full rounded mb-2" />

            <input
            type="text"
            placeholder="GitHub Link (optional)"
            value={currentProject.githubLink}
            onChange={(e) =>
                setCurrentProject({
                ...currentProject,
                githubLink: e.target.value,
                })
            }
            className="border p-2 w-full rounded mb-2" />

            <input
            type="file"
            onChange={(e) =>
                setCurrentProject({
                ...currentProject,
                image: e.target.files[0],
                })
            }
            className="mb-2" />

            <textarea
            placeholder="Project Description (optional)"
            value={currentProject.description}
            onChange={(e) =>
                setCurrentProject({
                ...currentProject,
                description: e.target.value,
                })
            }
            className="border p-2 w-full rounded mb-4 h-24" >
            </textarea>

            <button
            onClick={() => {
                if (currentProject.title.trim() !== "") {
                setFormData({
                    ...formData,
                    projects: [...formData.projects, currentProject],
                });
                setCurrentProject({
                    title: "",
                    projectUrl: "",
                    githubLink: "",
                    image: null,
                    description: "",
                });
                }
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg" >
            Add Project
            </button>
        </div>

        <ul className="mb-6">
            {formData.projects.map((proj, index) => (
            <li
                key={index}
                className="bg-gray-100 p-3 rounded mb-2 flex flex-col gap-1"
            >
                <span className="font-semibold">{proj.title}</span>
                {proj.projectUrl && (
                <a
                    href={proj.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm" >
                    Live Site
                </a>
                )}
                {proj.githubLink && (
                <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm" >
                    GitHub
                </a>
                )}
                {proj.description && (
                <p className="text-sm text-gray-700">{proj.description}</p>
                )}
                {proj.image && (
                <p className="text-xs text-gray-500">{proj.image.name}</p>
                )}
            </li>
            ))}
        </ul>

        <div className="flex justify-between">
            <button
            onClick={BackStep}
            className="text-gray-600 border border-gray-300 px-6 py-2 rounded-lg">
            Back
            </button>
            <button
            onClick={skipStep}
            className="text-gray-600 border border-gray-300 px-6 py-2 rounded-lg">
            Skip
            </button>
            <button
            onClick={nextStep}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Next
            </button>
        </div>
        </div>
    );
}

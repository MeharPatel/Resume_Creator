import React, { useState } from 'react'

export const ProjectsData = ({ formData, setFormData }) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                    Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Project Title"
                value={currentProject.title}
                onChange={(e) =>
                    setCurrentProject({
                    ...currentProject,
                    title: e.target.value,
                    })
                }
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>
            <div>
              <label htmlFor="project_url" className="block text-sm font-medium mb-1">
                      Project Link
              </label>
              <input
                type="text"
                id="project_url"
                name="project_url"
                placeholder="http://your_project.app"
                value={currentProject.projectUrl}
                onChange={(e) =>
                    setCurrentProject({
                    ...currentProject,
                    projectUrl: e.target.value,
                    })
                }
                className="border p-2 mb-4 w-full rounded-lg"
                />
              </div>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="github_link" className="block text-sm font-medium mb-1">
                    Github_Link
              </label>
              <input
                type="text"
                id="github_link"
                name="github_link"
                placeholder="Github Link"
                value={currentProject.githubLink}
                onChange={(e) =>
                setCurrentProject({
                ...currentProject,
                githubLink: e.target.value,
                })
            }
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>
            <div>
              <label htmlFor="project_file" className="block text-sm font-medium mb-1">
                      Project File
              </label>
              <input
                type="file"
                id="project_file"
                name="project_file"
                onChange={(e) =>
                    setCurrentProject({
                    ...currentProject,
                    image: e.target.files[0],
                    })
                }
                className="border p-2 mb-4 w-full rounded-lg"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                    Project Description
              </label>
              <input
                type="text"
                id="project_description"
                name="project_description"
                placeholder="Description"
                value={currentProject.description}
                onChange={(e) =>
                    setCurrentProject({
                    ...currentProject,
                    description: e.target.value,
                    })
                }
                className="border p-2 mb-4 w-full rounded-lg"
                />
            </div>

        <div className="mb-4">
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

        </div>
    );
}

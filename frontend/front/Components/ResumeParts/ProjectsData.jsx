import React, { useState } from 'react'
import { PencilIcon, XIcon, Plus, Check } from 'lucide-react';
import { toast } from "sonner";

export const ProjectsData = ({ formData, setFormData }) => {
    const [currentProject, setCurrentProject] = useState({
        title: "",
        projectUrl: "",
        description: "",
    });
    const [editIndex, setEditIndex] = useState(null);
    
    const handleEditProject = (index) => {
        setCurrentProject(formData.projects[index]);
        setEditIndex(index);
    };

    const handleDeleteProject = (index) => {
            setFormData((prev) => ({
                ...prev,
                projects: prev.projects.filter((_, i) => i !== index),
            }));
            if (editIndex === index) {
                setCurrentProject({ title: "", projectUrl: "", description: ""});
                setEditIndex(null);
            }
            toast.success("Project deleted successfully");
        };

        const handleSaveProject = () => {
            
                if (!currentProject.title.trim()) {
                    toast.error("Project name is required");
                    return;
                }
                const newProject = { title: currentProject.title.trim(), projectUrl: currentProject.projectUrl.trim(), description: currentProject.description.trim() }; 
                
        
                if (editIndex !== null) {
                    setFormData((prev) => ({
                        ...prev,
                        projects: prev.projects.map((project, i) => (i === editIndex ? newProject : project)),
                    }));
                    toast.success("Project updated successfully");
                    setEditIndex(null);
                } else {
                    setFormData((prev) => ({
                        ...prev,
                        projects: [...prev.projects, newProject],
                    }));
                    toast.success("Project added successfully");
                }
                setCurrentProject({ title: "", projectUrl: "", description: "" });
            };

    return (
        <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="resume-input-label block text-sm font-medium mb-1">
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
                className="resume-input border p-2 mb-4 w-full rounded-lg"
                />
            </div>
            

        <div>
              <label htmlFor="project_url" className="resume-input-label block text-sm font-medium mb-1">
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
                className="resume-input border p-2 mb-4 w-full rounded-lg"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="resume-input-label block text-sm font-medium mb-1">
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
                className="resume-input border p-2 mb-4 w-full rounded-lg"
                />
            </div>

        <div className="mb-4">
            <button type="button" className="flex add_btn"
                onClick = {handleSaveProject}
                >
                <span className="add_text flex items-center justify-center">
                <span className="m-2 add_btn_text_part"> 
                    {editIndex !== null ? "Update Project" : "Add Project"}
                </span>
                </span>
                <span className="add_plus p-1 flex items-center justify-center">
                    {editIndex !== null ? <Check className="h-8 w-8" /> : <Plus className="h-8 w-8" />}
                </span>
            </button>
        </div>

        <ul className="mb-6">
            {formData.projects.map((proj, index) => (
                <div className='bg-gray-100 p-3 rounded mb-2 flex justify-between'>
            <li key={index}
                className="flex flex-col gap-1">
                <span className="font-semibold">{proj.title}</span>
                {proj.projectUrl && (
                <a
                    href={proj.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm" >
                    Live Site ({proj.projectUrl})
                </a>
                )}
                {proj.description && (
                <p className="text-sm text-gray-700">{proj.description}</p>
                )}
            </li>
            <div className="flex gap-1">
                <button
                    onClick={() => handleEditProject(index)}
                    className="h-7 w-7 text-gray-500 hover:text-resume-primary"
                >
                    <PencilIcon className="h-3.5 w-3.5 pencil-icon" />
                </button>
                <button
                    onClick={() => handleDeleteProject(index)}
                    className="h-7 w-7 text-gray-500 hover:text-red-500"
                >
                    <XIcon className="h-3.5 w-3.5 x-item-icon" />
                </button>
            </div>
            </div>
            ))}
        </ul>

        </div>
    );
}

import React, { useState } from 'react'

export const ResumeQues = () => {
    const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: [],
    experience: [],
    skills: [],
    achievements: [],
    projects: [],
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
      facebook: "",
      portfolio: "",
    },
    otherSocialLinks: [],
  });

  const nextStep = () => setStep(prev => prev + 1);
  const skipStep = () => setStep(prev => prev + 1);
  const BackStep = () => setStep(prev => prev - 1);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const [currentSkill, setCurrentSkill] = useState();
  const [currentAchievement, setCurrentAchievement] = useState({ title: "", file: null });
  const [currentProject, setCurrentProject] = useState({
    title: "",
    projectUrl: "",
    githubLink: "",
    image: null,
    description: "",
  });

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

    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="text-gray-500 mb-6 text-sm text-center">
          Step {step} of 7
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Personal Information</h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2 mb-4 w-full rounded-lg"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-2 mb-4 w-full rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 mb-4 w-full rounded-lg"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 mb-4 w-full rounded-lg"
            />
            <div className="flex justify-between">
              {/* No skip on Personal Info */}
              <button 
                onClick={nextStep}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>

            {formData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  placeholder="School / University"
                  value={edu.school}
                  onChange={(e) => {
                    const updatedEducation = [...formData.education];
                    updatedEducation[index].school = e.target.value;
                    setFormData({ ...formData, education: updatedEducation });
                  }}
                  className="border p-2 mb-2 w-full rounded-lg" />
                <input
                  type="text"
                  placeholder="Degree / Program"
                  value={edu.degree}
                  onChange={(e) => {
                    const updatedEducation = [...formData.education];
                    updatedEducation[index].degree = e.target.value;
                    setFormData({ ...formData, education: updatedEducation });
                  }}
                  className="border p-2 mb-2 w-full rounded-lg" />
                <input
                  type="text"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) => {
                    const updatedEducation = [...formData.education];
                    updatedEducation[index].year = e.target.value;
                    setFormData({ ...formData, education: updatedEducation });
                  }}
                  className="border p-2 w-full rounded-lg" />
              </div>
            ))}

            <button
              onClick={() =>
                setFormData({
                  ...formData,
                  education: [...formData.education, { school: "", degree: "", year: "" }],
                })
              }
              className="bg-green-500 text-white px-4 py-2 mb-6 rounded-lg"
            >
              + Add Another
            </button>

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
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>

            {formData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  placeholder="Company / Organization"
                  value={exp.company}
                  onChange={(e) => {
                    const updatedExperience = [...formData.experience];
                    updatedExperience[index].company = e.target.value;
                    setFormData({ ...formData, experience: updatedExperience });
                  }}
                  className="border p-2 mb-2 w-full rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Position / Role"
                  value={exp.position}
                  onChange={(e) => {
                    const updatedExperience = [...formData.experience];
                    updatedExperience[index].position = e.target.value;
                    setFormData({ ...formData, experience: updatedExperience });
                  }}
                  className="border p-2 mb-2 w-full rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Duration (e.g., 2022-2024)"
                  value={exp.duration}
                  onChange={(e) => {
                    const updatedExperience = [...formData.experience];
                    updatedExperience[index].duration = e.target.value;
                    setFormData({ ...formData, experience: updatedExperience });
                  }}
                  className="border p-2 w-full rounded-lg"
                />
              </div>
            ))}

            <button
              onClick={() =>
                setFormData({
                  ...formData,
                  experience: [...formData.experience, { company: "", position: "", duration: "" }],
                })
              }
              className="bg-green-500 text-white px-4 py-2 mb-6 rounded-lg"
            >
              + Add Another
            </button>

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
        )}

        {step === 4 && (
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
                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

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
        )}

        {step === 5 && (
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
                      achievements: [
                        ...formData.achievements,
                        currentAchievement,
                      ],
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
        )}

        {step === 6 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Project Title"
                value={currentProject.title}
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, title: e.target.value })
                }
                className="border p-2 w-full rounded mb-2"
              />

              <input
                type="text"
                placeholder="Project URL (optional)"
                value={currentProject.projectUrl}
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, projectUrl: e.target.value })
                }
                className="border p-2 w-full rounded mb-2"
              />

              <input
                type="text"
                placeholder="GitHub Link (optional)"
                value={currentProject.githubLink}
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, githubLink: e.target.value })
                }
                className="border p-2 w-full rounded mb-2"
              />

              <input
                type="file"
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, image: e.target.files[0] })
                }
                className="mb-2"
              />

              <textarea
                placeholder="Project Description (optional)"
                value={currentProject.description}
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, description: e.target.value })
                }
                className="border p-2 w-full rounded mb-4 h-24"
              ></textarea>

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
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
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
                      className="text-blue-600 text-sm"
                    >
                      Live Site
                    </a>
                  )}
                  {proj.githubLink && (
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm"
                    >
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
        )}

        {step === 7 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Social Accounts</h2>

            <div className="space-y-4 mb-6">
              {defaultSocials.map((social, index) => (
                <div key={index} className="flex items-center gap-4">
                  <ion-icon name={social.icon} alt={social.name} className="w-8 h-8" />
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
                    className="border p-2 flex-1 rounded"
                  />
                </div>
              ))}
            </div>

            {/* Add another social media link */}
            <div className="mb-4 border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Add Other Social Media</h3>

              <input
                type="text"
                placeholder="Social Media Name"
                value={currentSocial.name}
                onChange={(e) =>
                  setCurrentSocial({ ...currentSocial, name: e.target.value })
                }
                className="border p-2 w-full rounded mb-2"
              />
              <input
                type="text"
                placeholder="Social Media Link"
                value={currentSocial.link}
                onChange={(e) =>
                  setCurrentSocial({ ...currentSocial, link: e.target.value })
                }
                className="border p-2 w-full rounded mb-4"
              />

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
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
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
                // onClick={}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                Finish
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

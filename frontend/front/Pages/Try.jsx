import { useState } from "react";

// Mock section name mapping (replace with your getSectionName logic)
const sectionNames = {
  personal: "Personal Info",
  education: "Education",
  experience: "Experience",
  skills: "Skills",
  achievements: "Achievements",
  projects: "Projects",
  socials: "Social Media Accounts",
  customSection: "Add-ons",
};

const Try = ({ initialSections }) => {
  const [sections, setSections] = useState(initialSections || ["personal", "education", "experience", "skills", "achievements", "projects", "socials", "customSection"]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
    e.target.classList.add("bg-blue-50", "border-resume-primary");
  };

  const handleDragOver = (e, index) => {
    e.preventDefault(); // Allow dropping
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const newSections = [...sections];
    const [draggedItem] = newSections.splice(dragIndex, 1);
    newSections.splice(dropIndex, 0, draggedItem);
    setSections(newSections);
    e.target.classList.remove("bg-blue-50", "border-resume-primary");
    console.log(sections);
  };
  
  const handleDragEnd = (e) => {
    console.log(sections);
    e.target.classList.remove("bg-blue-50", "border-resume-primary");
  };

  return (
    <div className="animate-fade-in relative pt-32 pb-20 md:py-40 overflow-hidden px-20">
      {sections.map((section, index) => (
        <div
          key={section}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
          className="flex items-center p-2 rounded border bg-white border-gray-200 cursor-move mb-5"
        >
          <span className="mr-2 flex-shrink-0 text-gray-400">⋮⋮</span>
          <span className="text-sm">{sectionNames[section] || section}</span>
        </div>
      ))}

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Tips</h3>
            <ul className="list-disc list-inside text-sm space-y-2 text-gray-600">
              <li>Keep your resume to one page for best results</li>
              <li>Use bullet points for better readability</li>
              <li>Quantify achievements with numbers when possible</li>
              <li>Proofread for any spelling or grammar errors</li>
              <li>Proofread for any spelling or grammar errors</li>
            </ul>
          </div>
    </div>
  );
};

export default Try;
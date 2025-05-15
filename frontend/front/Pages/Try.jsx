import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { MainResumeData } from "../Components/ResumeParts/MainResumeData";
import { EducationData } from "../Components/ResumeParts/EducationData";

const steps = [
  { id: "personal", label: "Personal Info", index: 1 },
  { id: "education", label: "Education", index: 2 },
  { id: "experience", label: "Experience", index: 3 },
  { id: "skills", label: "Skills", index: 4 },
  { id: "achievements", label: "Achievements", index: 5 },
  { id: "project", label: "Projects", index: 6 },
  { id: "socials", label: "Social Accounts", index: 7 },
  { id: "custom-section", label: "Custom Section", index: 8 },
];

const Try = () => {
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
        customSections : []
      });

      const nextStep = () => setStep((prev) => prev + 1);
      const skipStep = () => setStep((prev) => prev + 1);
      const BackStep = () => setStep((prev) => prev - 1);

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };



  const [currentStep, setCurrentStep] = useState("personal");

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleNext = (step) => {
    setCurrentStep(step);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "personal":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <MainResumeData />
            <div className="mt-6 text-right">
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={() => handleNext("education")}
              >
                Next
              </button>
            </div>
          </div>
        );
      case "education":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <EducationData />
            <div className="mt-6 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={() => handleNext("personal")}
              >
                Previous
              </button>
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={() => handleNext("experience")}
              >
                Next
              </button>
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  id="jobTitle"
                  placeholder="Software Engineer"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  id="company"
                  placeholder="Example Corp"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={() => handleNext("education")}
              >
                Previous
              </button>
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={() => handleNext("skills")}
              >
                Next
              </button>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                  Skills (comma-separated)
                </label>
                <input
                  id="skills"
                  placeholder="JavaScript, React, Tailwind"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={() => handleNext("experience")}
              >
                Previous
              </button>
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={() => handleNext("preview")}
              >
                Next
              </button>
            </div>
          </div>
        );
      case "preview":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
            <p className="text-gray-600">Your resume preview will be displayed here.</p>
            <div className="mt-6 text-left">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={() => handleNext("skills")}
              >
                Previous
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2">
          Resume Builder
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Create your professional resume in minutes with our easy-to-use builder. 
          Fill out each section and preview your resume before downloading.
        </p>
        
        {/* Progress Bar */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between mt-4 relative">
            {steps.map((step, index) => {
              const isActive = currentStepIndex >= index;
              const isCurrentStep = currentStep === step.id;
              
              return (
                <div 
                  key={step.id} 
                  className={`flex flex-col items-center cursor-pointer ${isActive ? "text-resume-primary" : "text-gray-400"}`}
                  onClick={() => index <= currentStepIndex && handleNext(step.id)}
                >
                  <div 
                    className={`
                      h-8 w-8 rounded-full flex items-center justify-center 
                      ${isCurrentStep 
                        ? "bg-resume-primary text-white"
                        : isActive
                          ? "border-2 border-resume-primary text-resume-primary"
                          : "border-2 border-gray-300 text-gray-400"
                      }
                    `}
                  >
                    {isActive && !isCurrentStep ? (
                      <CheckIcon className="h-4 w-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className="text-xs mt-1 hidden md:block">{step.label}</span>
                </div>
              );
            })}
            
            {/* Connecting line */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2">
              <div 
                className="h-full bg-resume-primary transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Form Container */}
        <div className="max-w-5xl mx-auto">
          {renderStepContent()}
          
          {currentStep !== "preview" && currentStep !== "personal" && (
            <div className="mt-8 py-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500 mb-4">
                You can always return to previous steps by clicking on the progress bar above.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                  onClick={() => {
                    const prevIndex = Math.max(0, currentStepIndex - 1);
                    handleNext(steps[prevIndex].id);
                  }}
                >
                  Previous Step
                </button>
                <button
                  className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                  onClick={() => {
                    const nextIndex = Math.min(steps.length - 1, currentStepIndex + 1);
                    handleNext(steps[nextIndex].id);
                  }}
                >
                  Next Step
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Try;
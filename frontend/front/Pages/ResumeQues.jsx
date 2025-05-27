import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { MainResumeData } from "../Components/ResumeParts/MainResumeData";
import { EducationData } from "../Components/ResumeParts/EducationData";
import { ExperienceData } from "../Components/ResumeParts/ExperienceData";
import SkillsData from "../Components/ResumeParts/SkillsData";
import { AchievementsData } from "../Components/ResumeParts/AchievementsData";
import { ProjectsData } from "../Components/ResumeParts/ProjectsData";
import { SocialLinksData } from "../Components/ResumeParts/SocialLinksData";
import { CustomSection } from "../Components/ResumeParts/CustomSection";
import { BACKEND_URL } from "../src/config";

const steps = [
  { id: "personal", label: "Personal Info", index: 1 },
  { id: "education", label: "Education", index: 2 },
  { id: "experience", label: "Experience", index: 3 },
  { id: "skills", label: "Skills", index: 4 },
  { id: "achievements", label: "Achievements", index: 5 },
  { id: "project", label: "Projects", index: 6 },
  { id: "socials", label: "Social Accounts", index: 7 },
  { id: "custom-section", label: "Add-On Details", index: 8 },
];

const ResumeQues = () => {
  
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        profssional_title: "",
        professional_description: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        country: "",
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

      const nextStep = () => setCurrentStep(currentStep + 1);
      const skipStep = () => setCurrentStep(currentStep + 1);
      const BackStep = () => setCurrentStep(currentStep - 1);

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };



  const [currentStep, setCurrentStep] = useState(1);

  const currentStepIndex = steps.findIndex((step) => step.index === currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleNext = (step) => {
    setCurrentStep(step);
  };

  const saveResumeData = async () => {
    const response = await fetch(`${BACKEND_URL}/resumedata`, {
      method : 'POST',
      headers : { 'Content-Type' : 'application/json' },
      body : JSON.stringify(formData)
    })
    console.log("Saved Resume Data!");    
    console.log(response);    
  }

  const handleSave = () => {
        // updateFormData(sections);
        saveResumeData();
    };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <MainResumeData formData={formData} handleChange={handleChange} />
            <div className="mt-6 text-right">
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={nextStep}>
                Next: Education
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <EducationData formData={formData} setFormData={setFormData} />
            <div className="mt-6 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={BackStep}>
                Previous: Personal Info
              </button>
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={skipStep}>
                Skip This Step
              </button>
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={nextStep}>
                Next: Experience
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ExperienceData formData={formData} setFormData={setFormData} />
            <div className="mt-6 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={BackStep}>
                Previous: Education
              </button>
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={skipStep}>
                Skip This Step
              </button>
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={nextStep}>
                Next: Skills
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <SkillsData formData={formData} setFormData={setFormData} handleChange={handleChange} />
            <div className="mt-6 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={BackStep}>
                Previous: Experience
              </button>
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={skipStep}>
                Skip This Step
              </button>
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={nextStep}>
                Next: Achievements
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <AchievementsData formData={formData} setFormData={setFormData} />
            <div className="mt-6 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={BackStep}>
                Previous: Skills
              </button>
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={skipStep}>
                Skip This Step
              </button>
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={nextStep}>
                Next: Projects
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ProjectsData formData={formData} setFormData={setFormData} />
            <div className="mt-6 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={BackStep}>
                Previous: Achievements
              </button>
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={skipStep}>
                Skip This Step
              </button>
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={nextStep}>
                Next: Social Accounts
              </button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <SocialLinksData formData={formData} setFormData={setFormData} />
            <div className="mt-6 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={BackStep}>
                Previous: Projects
              </button>
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={skipStep}>
                Previous: Skip This Step
              </button>
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={nextStep}>
                Next: Add-On Details
              </button>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <CustomSection formData={formData} setFormData={setFormData} />
            <div className="mt-6 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={BackStep}>
                Previous: Social Accounts
              </button>
              <button
                className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                onClick={handleSave}>
                Done: Save Data
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
                  onClick={() => index <= currentStepIndex && handleNext(step.index)}
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
                  onClick={BackStep}>
                  Previous Step
                </button>
                <button
                  className="primary-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                  onClick={nextStep}>
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

export default ResumeQues;
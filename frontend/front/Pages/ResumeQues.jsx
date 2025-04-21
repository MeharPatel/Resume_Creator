// import axios from "axios";
import React, { useState } from "react";
import { CustomSection } from "../Components/CustomSection";
import { MainResumeData } from "../Components/MainResumeData";
import { EducationData } from "../Components/EducationData";
import { ExperienceData } from "../Components/ExperienceData";
import SkillsData from "../Components/SkillsData";
import { AchievementsData } from "../Components/AchievementsData";
import { ProjectsData } from "../Components/ProjectsData";
import { SocialLinksData } from "../Components/SocialLinksData";

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
    customSections : []
  });

  const saveResumeData = async () => {
    const response = await fetch('http://localhost:3000/resumedata', {
      method : 'POST',
      headers : { 'Content-Type' : 'application/json' },
      body : JSON.stringify(formData)
    })
    console.log("Saved Resume Data!");    
    console.log(response);    
  }

  const nextStep = () => setStep((prev) => prev + 1);
  const skipStep = () => setStep((prev) => prev + 1);
  const BackStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="text-gray-500 mb-6 text-sm text-center">
          Step {step} of 8
        </div>

        {step === 1 && (
          <MainResumeData formData = {formData} nextStep = {nextStep} handleChange = {handleChange} />
        )}

        {step === 2 && (
          <EducationData formData = {formData} skipStep = {skipStep} nextStep = {nextStep} BackStep = {BackStep} setFormData = {setFormData} />
        )}

        {step === 3 && (
          <ExperienceData formData = {formData} setFormData = {setFormData} BackStep = {BackStep} skipStep = {skipStep} nextStep = {nextStep} />
        )}

        {step === 4 && (
          <SkillsData formData = {formData} setFormData = {setFormData} skipStep = {skipStep} BackStep = {BackStep} nextStep = {nextStep} />
        )}

        {step === 5 && (
          <AchievementsData formData = {formData} setFormData = {setFormData} skipStep = {skipStep} BackStep = {BackStep} nextStep = {nextStep} />
        )}

        {step === 6 && (
          <ProjectsData formData = {formData} setFormData = {setFormData} skipStep = {skipStep} BackStep = {BackStep} nextStep = {nextStep} />
        )}

        {step === 7 && (
          <SocialLinksData formData = {formData} setFormData = {setFormData} skipStep = {skipStep} BackStep = {BackStep} nextStep = {nextStep} />
        )}

        {step === 8 && (
          <CustomSection saveResumeData = {saveResumeData} BackStep = {BackStep} formData = {formData} setFormData={setFormData} />              
        )}
          {/* <CustomSection onChange={(data) => setCustomSections(data)} /> */}
      </div>
    </div>
  );
};

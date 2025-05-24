import { useState } from 'react';
import { templates } from '../src/util/templates';
import { ResumePreview } from '../Pages/ResumePreview';

export const ResumePreviewPage = () => {
  const [formData, setFormData] = useState({
  firstName: 'Mehar',
  lastName: 'Patel',
  profssional_title: '',
  professional_description: '',
  email: 'sdfghjk@gmail.com',
  phone: '23456789',
  address: '',
  city: '',
  state: '',
  zip_code: '',
  country: '',
  education: [
    {
      school: 'iyig',
      degree: 'bfrrrrrrrrrrwe',
      field_of_study: 'bvds',
      start_date: '2023-05',
      end_date: '2025-02',
      description: 'rgefwdas'
    }
  ],
  experience: [
    {
      company: 'bfds',
      position: 'dfghjk',
      start_date: '2024-05',
      end_date: '',
      current: 'on',
      description: 'gvhifhuhsikbdjjs'
    }
  ],
  skills: [],
  achievements: [],
  projects: [],
  socialLinks: {
    github: 'sdfghj',
    linkedin: '',
    instagram: 'dfghj',
    facebook: '',
    portfolio: 'dfghj'
  },
  otherSocialLinks: [],
  customSections: [ { sectionName: 'drfghu', items: ['sdfgh','sdfghj'] },
                    { sectionName: 'rdfxyuhj', items: ['sdfgh','sdfghj'] } ]
});

  const [selectedTemplate, setSelectedTemplate] = useState('professional'); // Default template

  return (
    <div className='relative pt-32 pb-20 md:py-40 overflow-hidden'> 
      {/* Pass the selected template down */}
      <ResumePreview 
        formData={formData} 
        selectedTemplate={selectedTemplate} 
        setSelectedTemplate = {setSelectedTemplate}
      />
    </div>
  );
}
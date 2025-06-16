import { useState } from 'react';
import { templates } from '../src/util/templates';
import { ResumePreview } from '../Pages/ResumePreview';

export const ResumePreviewPage = () => {
  const [formData, setFormData] = useState({
  firstName: 'Mehar',
  lastName: 'Patel',
  profssional_title: 'Backend Developer',
  professional_description: 'Backend Developer for 1+ years',
  email: 'csmeharpatel@gmail.com',
  phone: '5987654321',
  address: 'Nanpura',
  city: 'Surat',
  state: 'Gujarat',
  zip_code: '395001',
  country: 'India',
  education: [
    {
      school: 'RNGPIT',
      degree: 'B.E.',
      field_of_study: 'Computer Science & Engineering',    
      start_date: '2020-08',
      end_date: '2024-05',
      description: 'Bachelor of Engineering with ml'
    },
    {
      school: "St. Xavier's High School",
      degree: 'HSC',
      field_of_study: 'HSC',
      start_date: '2018-07',
      end_date: '2020-05',
      description: 'HSC with Science MPC'
    },
    {
      school: 'Lourdes Convent School',
      degree: 'SSC',
      field_of_study: 'SSC',
      start_date: '2017-05',
      end_date: '2018-03',
      description: 'SSC'
    }
  ],
  experience: [
    {
      company: 'SRKAY Consulting Group',
      position: 'Backend Developer',
      start_date: '2024-05',
      end_date: '',
      current: 'on',
      description: 'Working as Backend Developer'
    }
  ],
  skills: [{name : 'Javascript', level : 'Beginner'} , { name : 'CSS', level : ""} , {name : 'HTML', level : '' } , { name : 'ReactJs', level : ''} , {name : 'NodeJs', level: ''}],
  achievements: [ { title: 'Leetcode Solved 600+ Problems' } ,{ title : 'Heyyyyooooooooo'}],
  projects: [
    {
      title: 'Portfolio',
      projectUrl: 'meharpatel.netlify.app',
      githubLink: 'meharpatel.netlify.app',
      image: null,
      description: 'Portfolio Project'
    }
  ],
  socialLinks: {
    github: 'https://github.com/MeharPatel2512',
    linkedin: 'https://github.com/MeharPatel2512',
    instagram: 'https://github.com/MeharPatel',
    facebook: '',
    portfolio: 'meharpatel.netlify.app'
  },
  otherSocialLinks: [],
  customSections: [ { sectionName: 'Hobbies', items: ['Singing', 'Sketching'] } ]
});

  const [selectedTemplate, setSelectedTemplate] = useState('professional'); // Default template

  return (
    <div className='relative pt-32 pb-20 md:py-40 overflow-hidden'> 

      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold gradient-text mb-4">Preview</h2>
        <p className="text-gray-600">
          Here's a preview of your resume. You can go back to make changes.
        </p>
      </div>



      {/* Pass the selected template down */}
      <ResumePreview 
        formData={formData} 
        selectedTemplate={selectedTemplate} 
        setSelectedTemplate = {setSelectedTemplate}
      />
    </div>
  );
}
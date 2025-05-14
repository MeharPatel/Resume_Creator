import { useState } from 'react';
import { templates } from '../src/util/templates';
import { ResumePreview } from '../Pages/ResumePreview';

export const ResumePreviewPage = () => {
  const [formData, setFormData] = useState({
        firstName: 'Mehar',
        lastName: 'Patel',
        email: 'sdfghjk@gmail.com',
        phone: '23456789987',
        education: [
          {
            school: 'dfghbnj',
            degree: 'xcvbn',
            year: '20202',
          }
        ],
        experience: [
          {
            company: 'oijhvg',
            position: 'rdxcghjn',
            duration: '2020-2022',
          }
        ],
        skills: [ 'js', 'math' ],
        achievements: [
          {
            title: 'uygvguijknjk',
            file: null,
          }
        ],
        projects: [
          {
            title: 'jbnjk',
            description: 'ytfcgyujn',
          }
        ],
        socialLinks: {
          github: 'https://github.com/MeharPatel2512/purple-pixel-portfolio-pun',
          linkedin: 'https://github.com/MeharPatel2512/purple-pixel-portfolio-pun',
          instagram: 'https://github.com/MeharPatel2512/purple-pixel-portfolio-pun',
          facebook: 'https://github.com/MeharPatel2512/purple-pixel-portfolio-pun',
          portfolio: 'https://github.com/MeharPatel2512/purple-pixel-portfolio-pun'
        },
        otherSocialLinks: [],
        customSections: [
          {
            sectionName: 'hobbies',
            items: ['gerhj','hgwgf','hsdsdh'],
          }
        ]
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
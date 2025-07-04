// import { useState } from 'react';
// import { templates } from '../src/util/templates';
// import { ResumePreview1 } from '../Pages/ResumePreview1';
// import { motion } from 'framer-motion';

// export const ResumePreviewPage = () => {
//   const [formData, setFormData] = useState({
//   firstName: 'Mehar',
//   lastName: 'Patel',
//   professional_title: 'Backend Developer',
//   professional_description: 'Backend Developer for 1+ years',
//   email: 'csmeharpatel@gmail.com',
//   phone: '5987654321',
//   address: 'Nanpura',
//   city: 'Surat',
//   state: 'Gujarat',
//   zip_code: '395001',
//   country: 'India',
//   education: [
//     {
//       school: 'RNGPIT',
//       degree: 'B.E.',
//       field_of_study: 'Computer Science & Engineering',    
//       start_date: '2020-08',
//       end_date: '2024-05',
//       description: 'Bachelor of Engineering with ml'
//     },
//     {
//       school: "St. Xavier's High School",
//       degree: 'HSC',
//       field_of_study: 'HSC',
//       start_date: '2018-07',
//       end_date: '2020-05'
//     },
//     {
//       school: 'Lourdes Convent School',
//       degree: 'SSC',
//       field_of_study: 'SSC',
//       start_date: '2017-05',
//       end_date: '2018-03'
//     }
//   ],
//   experience: [
//     {
//       company: 'SRKAY Consulting Group',
//       position: 'Backend Developer',
//       start_date: '2024-05',
//       end_date: '',
//       current: 'on',
//       description: 'Working as Backend Developer'
//     },
//     {
//       company: 'SRKAY Consulting Group',
//       position: 'Backend Developer',
//       start_date: '2024-05',
//       end_date: '',
//       current: 'on',
//       description: 'Working as Backend Developer'
//     }
//   ],
//   skills: [{name : 'Javascript', level : 'Beginner'} , { name : 'CSS', level : "rdtfyg"} , {name : 'HTML', level : 'gftydrtyfugi' } , { name : 'ReactJs', level : 'yutryrtsdfgfui'} , {name : 'NodeJs', level: 'trfugijygutf'}, {name : 'Javascript', level : 'Beginner'} , { name : 'CSS', level : "rdtfyg"} , {name : 'HTML', level : 'gftydrtyfugi' } , { name : 'ReactJs', level : 'yutryrtsdfgfui'} , {name : 'NodeJs', level: 'trfugijygutf'}, {name : 'Javascript', level : 'Beginner'} , { name : 'CSS', level : "rdtfyg"} , {name : 'HTML', level : 'gftydrtyfugi' } , { name : 'ReactJs', level : 'yutryrtsdfgfui'} , {name : 'NodeJs', level: 'trfugijygutf'}],
//   achievements: [ { title: 'Leetcode Solved 600+ Problems' } ,{ title : 'Heyyyyooooooooo'}],
//   projects: [
//     {
//       title: 'Portfolio',
//       projectUrl: 'meharpatel.netlify.app',
//       description: 'Portfolio Project'
//     },
//     {
//       title: 'Portfolio',
//       projectUrl: 'meharpatel.netlify.app',
//       description: 'Portfolio Project'
//     }
//   ],
//   socialLinks: {
//     github: 'https://github.com/MeharPatel2512',
//     linkedin: 'https://linkedin.com/MeharPatel2512',
//     instagram: 'https://instagram.com/MeharPatel',
//     facebook: '',
//     portfolio: 'meharpatel.netlify.app'
//   },
//   otherSocialLinks: [{name: "Some1", link: "liguebdsvgftfrdftgyuh"}, {name: "Som2", link: "uyrsdfxgcyutfghiyfg"}],
//   customSections: [ { sectionName: 'Hobbies', items: ['Singing', 'Sketching'] },
//                     { sectionName: 'Something', items: ['Item1', 'Item2'] } ]
// });

//   const [selectedTemplate, setSelectedTemplate] = useState('professional'); // Default template

//   return (
//     <div className='relative pt-32 pb-20 md:py-40 overflow-hidden'> 

//       <div className="mb-8 text-center">
//         <h2 className="text-2xl font-bold gradient-text mb-4">Preview</h2>
//         <p className="text-gray-600">
//           Here's a preview of your resume. You can go back to make changes.
//         </p>
//       </div>

//       {/* {templates.singlepage} */}

//       {/* Template Selector */}
//       <div className="flex gap-4 mb-8 justify-center flex-wrap">
//         {Object.keys(templates.multipage).map((templateKey) => (
//           <motion.button
//             key={templateKey}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setSelectedTemplate(templateKey)}
//             className={`px-4 py-2 rounded-sm capitalize ${
//               selectedTemplate === templateKey
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-gray-800"
//             }`}
//           >
//             {templateKey}
//           </motion.button>
//         ))}
//       </div>



//       {/* Pass the selected template down */}
//       <ResumePreview1
//         formData={formData} 
//         selectedTemplate={selectedTemplate} 
//         setSelectedTemplate = {setSelectedTemplate}
//       />
//     </div>
//   );
// }



import React from 'react'

export const ResumePreviewPage = () => {
  return (
    <div>
      Mehar
    </div>
  )
}
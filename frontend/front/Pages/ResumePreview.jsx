// import { templates } from '../src/util/templates';
// import { usePDF } from 'react-to-pdf';
// import { motion } from 'framer-motion';
// import { HomeIcon, BriefcaseBusiness, AtSign, Phone, GraduationCap, Building2, Award, ChartPie, FolderHeart, Star, Github, Linkedin, Instagram, Facebook, User, Signature } from 'lucide-react'

// export const ResumePreview = ({ formData, selectedTemplate, setSelectedTemplate }) => {
//   const { toPDF, targetRef } = usePDF({
//     filename: `${formData.firstName}_${formData.lastName}_Resume.pdf`,
//     page: {
//       margin: { top: 15, right: 10, bottom: 15, left: 10 }, // Consistent margins in mm
//       format: 'a4',
//     },
//     resolution: 2,
//   });

//   const template = templates[selectedTemplate];

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       {/* Template Selector */}
//       <div className="flex gap-4 mb-8 justify-center flex-wrap">
//         {Object.keys(templates).map((templateKey) => (
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

//       {/* Resume Preview */}
//       <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">

//       <motion.div
//         key={selectedTemplate}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         ref={targetRef}
//         className={`${template.resume_container} pdf-container`}
//       >

//         <h1 className={template.name}>
//             <>
//               {formData.firstName} {formData.lastName} 
//             </>
//         </h1>
        
//         {/* Contact Info */}
//         {/* Personal Info */}
//         <div className={`${template.itemSubtitle} break-after`}>
//         <div className='flex'>
//           <span className='h-4 w-4 me-2 mt-2'>
//           <AtSign className={template.custom_icons} /></span> {formData.email && <span> {formData.email} | </span>} <span className='h-4 w-4 mx-2 mt-2'>
//           <Phone className={template.custom_icons} /> </span> {formData.phone && <span>{formData.phone}</span>}
//         </div>

//         <div className='flex'>
//           <span className='h-4 w-4 me-2 mt-2'>
//           <BriefcaseBusiness className={template.custom_icons} /></span><p className={template.itemSubtitle}> {formData.professional_title} | {formData.professional_description} </p>
//         </div>

//         <div className='flex'>
//           <span className='h-4 w-4 me-2 mt-2'>
//           <HomeIcon className={template.custom_icons} /></span> <p className={template.itemSubtitle}>{formData.address}, {formData.city}, {formData.state}, {formData.country} - {formData.zip_code} </p>
//         </div>
//         </div>

//         {/* Education */}
//         {formData.education.length > 0 && (
//           <div className='break-after'>
//             <h2 className={template.sectionTitle}>Education</h2>
//             {formData.education.map((edu, index) => (
//               <div key={index} className="mb-4 ">
//                 <div className='flex'>
//                 <span className='h-5 w-5 me-2 mt-3'>
//                 <GraduationCap className={template.custom_icons} /></span>
//                 <h3 className={template.itemTitle}>{edu.degree} ({edu.field_of_study})</h3>
//                 </div>
//                 <p className={template.itemSubtitle}>
//                   {edu.school} | {edu.start_date}  -  {edu.end_date}
//                 </p>
//                 {edu.description && (
//                   <p className={template.itemDescription}>{edu.description}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Experience */}
//         {formData.experience.length > 0 && (
//           <div className='break-after'>
//             <h2 className={template.sectionTitle}>Experience</h2>
//             {formData.experience.map((exp, index) => (
//               <div key={index} className="mb-4">
//               <div className='flex'>
//                 <span className='h-5 w-5 me-2 mt-3'>
//                 <Building2 className={template.custom_icons} /></span>
//                 <h3 className={template.itemTitle}>{exp.company}</h3>
//               </div>
//                 <p className={template.itemSubtitle}>
//                   {exp.position} | {exp.start_date} - {exp.end_date ? exp.end_date : 'Present'}
//                 </p>
//                 <p className={template.itemDescription}>{exp.description}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Skills */}
//         {formData.skills.length > 0 && (
//           <div className='break-after'>
//             <h2 className={template.sectionTitle}>Skills</h2>
//             <div className="flex flex-wrap gap-2">
//               {formData.skills.map((skill, index) => (
//                 <span key={index} className={template.skill}>
//                   <span>{skill.name} - {skill.level} </span>
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Achievements */}
//         {formData.achievements.length > 0 && (
//           <div className='break-after'>
//             <h2 className={template.sectionTitle}>Achievements</h2>
//             {formData.achievements.map((achievement, index) => (
//               <div key={index} className="mb-1 flex">
//                 <span className='h-4 w-4 me-2 mt-2'>
//                 <Award className={template.custom_icons} /></span>
//                 <h3 className={template.itemSubtitle}>{achievement.title}</h3>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Project */}
//         {formData.projects.length > 0 && (
//           <div className='break-after'>
//             <h2 className={template.sectionTitle}>Projects</h2>
//             {formData.projects.map((proj, index) => (
//               <div key={index} className="mb-4">
//               <div className='flex'>
//                 <span className='h-4 w-4 me-2 mt-3'>
//                 <Star className={template.custom_icons} /></span>
//                 <h3 className={template.itemTitle}>{proj.title}</h3>
//               </div>
//                 <p className={template.itemSubtitle}>
//                   {proj.projectUrl}
//                 </p>
//                 <p className={template.itemDescription}>{proj.description}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Social Links */}
//           <div className='break-after'>
//               <div className="grid grid-cols-2 gap-1 mb-4">
//               {formData.socialLinks.github.length > 0 && (

//                 <div className='flex'>
//                   <span className='h-4 w-4 me-2 mt-3'>
//                   <Github className={template.custom_icons} /></span>
//                   <h3 className={template.itemSubtitle}>{formData.socialLinks.github}</h3>
//                 </div>
//               )}
//               {formData.socialLinks.linkedin.length > 0 && (
//                 <div className='flex'>
//                   <span className='h-4 w-4 me-2 mt-3'>
//                   <Linkedin className={template.custom_icons} /></span>
//                   <h3 className={template.itemSubtitle}>{formData.socialLinks.linkedin}</h3>
//                 </div>
//               )}
//               {formData.socialLinks.instagram.length > 0 && (
//                 <div className='flex'>
//                   <span className='h-4 w-4 me-2 mt-3'>
//                   <Instagram className={template.custom_icons} /></span>
//                   <h3 className={template.itemSubtitle}>{formData.socialLinks.instagram}</h3>
//                 </div>
//               )}
//               {formData.socialLinks.facebook.length > 0 && (
//                 <div className='flex'>
//                   <span className='h-4 w-4 me-2 mt-3'>
//                   <Facebook className={template.custom_icons} /></span>
//                   <h3 className={template.itemSubtitle}>{formData.socialLinks.facebook}</h3>
//                 </div>
//               )}
//               {formData.socialLinks.portfolio.length > 0 && (
//                 <div className='flex'>
//                   <span className='h-4 w-4 me-2 mt-3'>
//                   <Signature className={template.custom_icons} /></span>
//                   <h3 className={template.itemSubtitle}>{formData.socialLinks.portfolio}</h3>
//                 </div>
//               )}
//               </div>
//           </div>

//       {/* Custom Sections */}
//       <div>
//         {formData.customSections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className={`${template.customSection} break-after`}>
//             <h2 className={template.customSectionTitle}>{section.sectionName}</h2>
//             <div className='flex flex-wrap gap-2'>
//               {section.items.map((item, itemIndex) => (
//                 <span key={itemIndex} className={template.customSectionItems}>
//                   <span>{item}</span>
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//         </div>

//         {/* </div> */}
//       </motion.div>
      
//       </div>

//       {/* Download Button */}
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={toPDF}
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//         >
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );
// };





// import { templates } from '../src/util/templates';
// import { usePDF } from 'react-to-pdf';
// import { motion } from 'framer-motion';
// import { HomeIcon, BriefcaseBusiness, AtSign, Phone, GraduationCap, Building2, Award, Star, Github, Linkedin, Instagram, Facebook, Signature } from 'lucide-react';

// export const ResumePreview = ({ formData, selectedTemplate, setSelectedTemplate }) => {
//   const { toPDF, targetRef } = usePDF({
//     filename: `${formData.firstName}_${formData.lastName}_Resume.pdf`,
//     page: {
//       margin: { top: 15, right: 10, bottom: 15, left: 10 }, // Consistent margins in mm
//       format: 'a4',
//     },
//     resolution: 2,
//   });

//   const template = templates[selectedTemplate];

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       {/* Template Selector */}
//       <div className="flex gap-4 mb-8 justify-center flex-wrap">
//         {Object.keys(templates).map((templateKey) => (
//           <motion.button
//             key={templateKey}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setSelectedTemplate(templateKey)}
//             className={`px-4 py-2 rounded-sm capitalize ${
//               selectedTemplate === templateKey
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-800'
//             }`}
//           >
//             {templateKey}
//           </motion.button>
//         ))}
//       </div>

//       {/* Resume Preview */}
//       <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
//         <motion.div
//           key={selectedTemplate}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           ref={targetRef}
//           className={`${template.resume_container} pdf-container`}
//         >
//           <h1 className={`${template.name} no-break`}>
//             {formData.firstName} {formData.lastName}
//           </h1>

//           {/* Contact Info and Personal Info */}
//           <div className="no-break">
//             <div className={template.itemSubtitle}>
//               <div className="flex flex-wrap gap-2">
//                 {formData.email && (
//                   <span className="flex items-center">
//                     <AtSign className={`${template.custom_icons} h-4 w-4 mr-1`} />
//                     {formData.email}
//                   </span>
//                 )}
//                 {formData.phone && (
//                   <span className="flex items-center">
//                     <span className="mx-1">|</span>
//                     <Phone className={`${template.custom_icons} h-4 w-4 mr-1`} />
//                     {formData.phone}
//                   </span>
//                 )}
//               </div>
//             </div>

//             {formData.professional_title && (
//               <div className="flex">
//                 <BriefcaseBusiness className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} />
//                 <p className={template.itemSubtitle}>
//                   {formData.professional_title}
//                   {formData.professional_description && ` | ${formData.professional_description}`}
//                 </p>
//               </div>
//             )}

//             {(formData.address || formData.city || formData.state || formData.country || formData.zip_code) && (
//               <div className="flex">
//                 <HomeIcon className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} />
//                 <p className={template.itemSubtitle}>
//                   {[formData.address, formData.city, formData.state, formData.country, formData.zip_code]
//                     .filter(Boolean)
//                     .join(', ')}
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Social Links */}
//           {(formData.socialLinks.github ||
//             formData.socialLinks.linkedin ||
//             formData.socialLinks.instagram ||
//             formData.socialLinks.facebook ||
//             formData.socialLinks.portfolio) && (
//             <div className="no-break">
//               <div className="grid grid-cols-2 gap-1 mb-4">
//                 {formData.socialLinks.github && (
//                   <div className="flex">
//                     <Github className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} />
//                     <a href={formData.socialLinks.github} className={template.itemSubtitle}>
//                       {formData.socialLinks.github}
//                     </a>
//                   </div>
//                 )}
//                 {formData.socialLinks.linkedin && (
//                   <div className="flex">
//                     <Linkedin className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} />
//                     <a href={formData.socialLinks.linkedin} className={template.itemSubtitle}>
//                       {formData.socialLinks.linkedin}
//                     </a>
//                   </div>
//                 )}
//                 {formData.socialLinks.instagram && (
//                   <div className="flex">
//                     <Instagram className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} />
//                     <a href={formData.socialLinks.instagram} className={template.itemSubtitle}>
//                       {formData.socialLinks.instagram}
//                     </a>
//                   </div>
//                 )}
//                 {formData.socialLinks.facebook && (
//                   <div className="flex">
//                     <Facebook className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} />
//                     <a href={formData.socialLinks.facebook} className={template.itemSubtitle}>
//                       {formData.socialLinks.facebook}
//                     </a>
//                   </div>
//                 )}
//                 {formData.socialLinks.portfolio && (
//                   <div className="flex">
//                     <Signature className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} />
//                     <a href={formData.socialLinks.portfolio} className={template.itemSubtitle}>
//                       {formData.socialLinks.portfolio}
//                     </a>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Education */}
//           {formData.education.length > 0 && (
//             <section className="mb-4">
//               <h2 className={`${template.sectionTitle} no-break`}>Education</h2>
//               {formData.education.map((edu, index) => (
//                 <div key={index} className="no-break">
//                   <div className="flex">
//                     <GraduationCap className={`${template.custom_icons} h-5 w-5 mr-2 mt-1`} />
//                     <h3 className={template.itemTitle}>
//                       {edu.degree} ({edu.field_of_study})
//                     </h3>
//                   </div>
//                   <p className={template.itemSubtitle}>
//                     {edu.school} | {edu.start_date} - {edu.end_date}
//                   </p>
//                   {edu.description && <p className={template.itemDescription}>{edu.description}</p>}
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Experience */}
//           {formData.experience.length > 0 && (
//             <section className="mb-4">
//               <h2 className={`${template.sectionTitle} no-break`}>Experience</h2>
//               {formData.experience.map((exp, index) => (
//                 <div key={index} className="no-break">
//                   <div className="flex">
//                     <Building2 className={`${template.custom_icons} h-5 w-5 mr-2 mt-1`} />
//                     <h3 className={template.itemTitle}>{exp.company}</h3>
//                   </div>
//                   <p className={template.itemSubtitle}>
//                     {exp.position} | {exp.start_date} - {exp.end_date ? exp.end_date : 'Present'}
//                   </p>
//                   <p className={template.itemDescription}>{exp.description}</p>
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Skills */}
//           {formData.skills.length > 0 && (
//             <section className="mb-4">
//               <h2 className={`${template.sectionTitle} no-break`}>Skills</h2>
//               <div className="flex flex-wrap gap-2">
//                 {formData.skills.map((skill, index) => (
//                   <span key={index} className={template.skill}>
//                     {skill.name} - {skill.level}
//                   </span>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Achievements */}
//           {formData.achievements.length > 0 && (
//             <section className="mb-4">
//               <h2 className={`${template.sectionTitle} no-break`}>Achievements</h2>
//               {formData.achievements.map((achievement, index) => (
//                 <div key={index} className="no-break">
//                   <div className="flex">
//                     <Award className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} />
//                     <h3 className={template.itemSubtitle}>{achievement.title}</h3>
//                   </div>
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Projects */}
//           {formData.projects.length > 0 && (
//             <section className="mb-4">
//               <h2 className={`${template.sectionTitle} no-break`}>Projects</h2>
//               {formData.projects.map((proj, index) => (
//                 <div key={index} className="no-break">
//                   <div className="flex">
//                     <Star className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} />
//                     <h3 className={template.itemTitle}>{proj.title}</h3>
//                   </div>
//                   {proj.projectUrl && (
//                     <p className={template.itemSubtitle}>
//                       <a href={proj.projectUrl} className="underline">{proj.projectUrl}</a>
//                     </p>
//                   )}
//                   <p className={template.itemDescription}>{proj.description}</p>
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Custom Sections */}
//           {formData.customSections.length > 0 && (
//             <section className="mb-4">
//               {formData.customSections.map((section, sectionIndex) => (
//                 <div key={sectionIndex} className={`${template.customSection} no-break`}>
//                   <h2 className={`${template.customSectionTitle} no-break`}>{section.title}</h2>
//                   <div className="flex flex-wrap gap-2">
//                     {section.items.map((item, itemIndex) => (
//                       <span key={itemIndex} className={template.customSectionItems}>
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </section>
//           )}
//         </motion.div>
//       </div>

//       {/* Download Button */}
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={toPDF}
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//         >
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );
// };









import { templates } from '../src/util/templates';
import { usePDF } from 'react-to-pdf';
import { motion } from 'framer-motion';
import { HomeIcon, BriefcaseBusiness, AtSign, Phone, GraduationCap, Building2, Award, Star, Github, Linkedin, Instagram, Facebook, Signature } from 'lucide-react';

export const ResumePreview = ({ formData, selectedTemplate, setSelectedTemplate }) => {
  const { toPDF, targetRef } = usePDF({
    filename: `${formData.firstName}_${formData.lastName}_Resume.pdf`,
    page: {
      margin: { top: 15, right: 10, bottom: 15, left: 10 }, // Consistent margins in mm
      format: 'a4',
      avoidPageBreak: true, // Attempt to avoid page breaks
    },
    resolution: 2,
  });

  const template = templates[selectedTemplate];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Template Selector */}
      <div className="flex gap-4 mb-8 justify-center flex-wrap">
        {Object.keys(templates).map((templateKey) => (
          <motion.button
            key={templateKey}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedTemplate(templateKey)}
            className={`px-4 py-2 rounded-sm capitalize ${
              selectedTemplate === templateKey
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {templateKey}
          </motion.button>
        ))}
      </div>

      {/* Resume Preview */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
        <motion.div
          key={selectedTemplate}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          ref={targetRef}
          className={`${template.resume_container} pdf-container`}
        >
          <h1 className={`${template.name} keep-together`}>
            {formData.firstName} {formData.lastName}
          </h1>

          {/* Contact Info and Personal Info */}
          <div className="keep-together">
            <div className={template.itemSubtitle}>
              <div className="flex flex-wrap gap-2">
                {formData.email && (
                  <span className="flex items-center">
                    {/* <AtSign className={`${template.custom_icons} h-4 w-4 mr-1`} /> */}
                    {formData.email}
                  </span>
                )}
                {formData.phone && (
                  <span className="flex items-center">
                    <span className="mx-1">|</span>
                    {/* <Phone className={`${template.custom_icons} h-4 w-4 mr-1`} /> */}
                    {formData.phone}
                  </span>
                )}
              </div>
            </div>

            {formData.professional_title && (
              <div className="flex">
                {/* <BriefcaseBusiness className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} /> */}
                <p className={template.itemSubtitle}>
                  {formData.professional_title}
                  {formData.professional_description && ` | ${formData.professional_description}`}
                </p>
              </div>
            )}

            {(formData.address || formData.city || formData.state || formData.country || formData.zip_code) && (
              <div className="flex">
                {/* <HomeIcon className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} /> */}
                <p className={template.itemSubtitle}>
                  {[formData.address, formData.city, formData.state, formData.country, formData.zip_code]
                    .filter(Boolean)
                    .join(', ')}
                </p>
              </div>
            )}
          </div>

          {/* Social Links */}
          {(formData.socialLinks.github ||
            formData.socialLinks.linkedin ||
            formData.socialLinks.instagram ||
            formData.socialLinks.facebook ||
            formData.socialLinks.portfolio) && (
            <div className="keep-together">
              <div className="grid grid-cols-2 gap-1 mb-4">
                {formData.socialLinks.github && (
                  <div className="flex">
                    {/* <Github className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} /> */}
                    <a href={formData.socialLinks.github} className={template.itemSubtitle}>
                      {formData.socialLinks.github}
                    </a>
                  </div>
                )}
                {formData.socialLinks.linkedin && (
                  <div className="flex">
                    {/* <Linkedin className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} /> */}
                    <a href={formData.socialLinks.linkedin} className={template.itemSubtitle}>
                      {formData.socialLinks.linkedin}
                    </a>
                  </div>
                )}
                {formData.socialLinks.instagram && (
                  <div className="flex">
                    {/* <Instagram className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} /> */}
                    <a href={formData.socialLinks.instagram} className={template.itemSubtitle}>
                      {formData.socialLinks.instagram}
                    </a>
                  </div>
                )}
                {formData.socialLinks.facebook && (
                  <div className="flex">
                    {/* <Facebook className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} /> */}
                    <a href={formData.socialLinks.facebook} className={template.itemSubtitle}>
                      {formData.socialLinks.facebook}
                    </a>
                  </div>
                )}
                {formData.socialLinks.portfolio && (
                  <div className="flex">
                    {/* <Signature className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} /> */}
                    <a href={formData.socialLinks.portfolio} className={template.itemSubtitle}>
                      {formData.socialLinks.portfolio}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Education */}
          {formData.education.length > 0 && (
            <section className="keep-together">
              <h2 className={`${template.sectionTitle} no-break`}>Education</h2>
              {formData.education.map((edu, index) => (
                <div key={index} className="no-break">
                  <div className="flex">
                    {/* <GraduationCap className={`${template.custom_icons} h-5 w-5 mr-2 mt-1`} /> */}
                    <h3 className={template.itemTitle}>
                      {edu.degree} ({edu.field_of_study})
                    </h3>
                  </div>
                  <p className={template.itemSubtitle}>
                    {edu.school} | {edu.start_date} - {edu.end_date}
                  </p>
                  {edu.description && <p className={template.itemDescription}>{edu.description}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Experience */}
          {formData.experience.length > 0 && (
            <section className="keep-together">
              <h2 className={`${template.sectionTitle} no-break`}>Experience</h2>
              {formData.experience.map((exp, index) => (
                <div key={index} className="no-break">
                  <div className="flex">
                    {/* <Building2 className={`${template.custom_icons} h-5 w-5 mr-2 mt-1`} /> */}
                    <h3 className={template.itemTitle}>{exp.company}</h3>
                  </div>
                  <p className={template.itemSubtitle}>
                    {exp.position} | {exp.start_date} - {exp.end_date ? exp.end_date : 'Present'}
                  </p>
                  <p className={template.itemDescription}>{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Skills */}
          {formData.skills.length > 0 && (
            <section className="keep-together">
              <h2 className={`${template.sectionTitle} no-break`}>Skills</h2>
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, index) => (
                  <span key={index} className={template.skill}>
                    {skill.name} - {skill.level}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {formData.achievements.length > 0 && (
            <section className="keep-together">
              <h2 className={`${template.sectionTitle} no-break`}>Achievements</h2>
              {formData.achievements.map((achievement, index) => (
                <div key={index} className="no-break">
                  <div className="flex">
                    {/* <Award className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} /> */}
                    <h3 className={template.itemSubtitle}>{achievement.title}</h3>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {formData.projects.length > 0 && (
            <section className="keep-together">
              <h2 className={`${template.sectionTitle} no-break`}>Projects</h2>
              {formData.projects.map((proj, index) => (
                <div key={index} className="no-break">
                  <div className="flex">
                    {/* <Star className={`${template.custom_icons} h-4 w-4 mr-2 mt-1`} /> */}
                    <h3 className={template.itemTitle}>{proj.title}</h3>
                  </div>
                  {proj.projectUrl && (
                    <p className={template.itemSubtitle}>
                      <a href={proj.projectUrl} className="underline">{proj.projectUrl}</a>
                    </p>
                  )}
                  <p className={template.itemDescription}>{proj.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Custom Sections */}
          {formData.customSections.length > 0 && (
            <section className="keep-together">
              {formData.customSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className={`${template.customSection} no-break`}>
                  <h2 className={`${template.customSectionTitle} no-break`}>{section.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item, itemIndex) => (
                      <span key={itemIndex} className={template.customSectionItems}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
        </motion.div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={toPDF}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};
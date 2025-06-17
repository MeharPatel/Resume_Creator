import { templates } from '../src/util/templates';
import { usePDF } from 'react-to-pdf';
import { motion } from 'framer-motion';
import { HomeIcon, BriefcaseBusiness, AtSign, Phone, GraduationCap, Building2, Award } from 'lucide-react'

export const ResumePreview = ({ formData, selectedTemplate, setSelectedTemplate }) => {
  const { toPDF, targetRef } = usePDF({
    filename: `${formData.firstName}_${formData.lastName}_Resume.pdf`,
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
            className={`px-4 py-2 rounded-lg capitalize ${
              selectedTemplate === templateKey
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {templateKey}
          </motion.button>
        ))}
      </div>

      {/* Resume Preview */}
      <div className="flex flex-col lg:flex-row gap-6">

      <motion.div
        key={selectedTemplate}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        ref={targetRef}
        className={template.container}
      >
        {/* Name */}
        {/* <h1 className={template.name}>
          {formData.firstName} {formData.lastName}
        </h1> */}

        <h1 className={template.name}>
          {selectedTemplate === 'creative' ? (
            <>
              <svg 
                width="100%" 
                height="50px" 
                className="inset-0"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="name-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <text
                  x="0" 
                  y="45" 
                  fontFamily="sans-serif"
                  fontSize="2.5rem" 
                  fontWeight="bold" 
                  fill="url(#name-gradient)"
                >
                  {formData.firstName} {formData.lastName}
                </text>
              </svg>
              {/* Fallback text */}
              <span className="opacity-0 pointer-events-none">
                {formData.firstName} {formData.lastName}
              </span>
            </>
          ) : (
            /* Regular text for other templates */
            <>
              {formData.firstName} {formData.lastName} 
            </>
          )}
        </h1>
        
        {/* Contact Info */}
        <div className={template.contact}>
        <div className='flex'>
          <AtSign className='h-4 w-4 me-2 mt-0.5' /> {formData.email && <span> {formData.email} | </span>} <Phone className='h-4 w-4 mx-2 mt-0.5' /> {formData.phone && <span>{formData.phone}</span>}
        </div>
        </div>

        {/* Personal Info */}
        <div className='flex'>
          <BriefcaseBusiness className='h-4 w-4 me-2 mt-0.5' /><p className={template.itemSubtitle}> {formData.professional_title} | {formData.professional_description} </p>
        </div>

        <div className='flex'>
          <HomeIcon className='h-4 w-4 me-2 mt-0.5' /> <p className={template.itemSubtitle}>{formData.address}, {formData.city}, {formData.state}, {formData.country} - {formData.zip_code} </p>
        </div>

        {/* Education */}
        {formData.education.length > 0 && (
          <>
            <h2 className={template.sectionTitle}>Education</h2>
            {formData.education.map((edu, index) => (
              <div key={index} className="mb-4 ">
                <div className='flex'>
                <GraduationCap className='h-5 w-5 me-3 mt-1' />
                <h3 className={template.itemTitle}>{edu.degree} ({edu.field_of_study})</h3>
                </div>
                <p className={template.itemSubtitle}>
                  {edu.school} | {edu.start_date}  -  {edu.end_date}
                </p>
                {edu.description && (
                  <p className={template.itemDescription}>{edu.description}</p>
                )}
              </div>
            ))}
          </>
        )}

        {/* Experience */}
        {formData.experience.length > 0 && (
          <>
            <h2 className={template.sectionTitle}>Experience</h2>
            {formData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
              <div className='flex'>
                <Building2 className='h-4 w-4 me-3 mt-1' />
                <h3 className={template.itemTitle}>{exp.company}</h3>
              </div>
                <p className={template.itemSubtitle}>
                  {exp.position} | {exp.start_date} - {exp.end_date ? exp.end_date : 'Present'}
                </p>
                <p className={template.itemDescription}>{exp.description}</p>
              </div>
            ))}
          </>
        )}

        {/* Skills */}
        {formData.skills.length > 0 && (
          <>
            <h2 className={template.sectionTitle}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 px-3 py-1 rounded-sm text-sm">
                  {skill.name} - {skill.level}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Achievements */}
        {formData.achievements.length > 0 && (
          <>
            <h2 className={template.sectionTitle}>Achievements</h2>
            {formData.achievements.map((achievement, index) => (
              <div key={index} className="mb-1 flex">
                <Award className='h-4 w-4 me-3 mt-1' />
                <h3 className={template.itemSubtitle}>{achievement.title}</h3>
              </div>
            ))}
          </>
        )}

      {/* Custom Sections */}
        {formData.customSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={template.customSection}>
            <h2 className={template.sectionTitle}>{section.sectionName}</h2>
            <div>
              {section.items.map((item, itemIndex) => (
                <span key={itemIndex} className="bg-gray-200 px-3 py-1 rounded-sm text-sm me-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

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
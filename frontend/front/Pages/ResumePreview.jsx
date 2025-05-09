import { templates } from '../src/util/templates';
import { usePDF } from 'react-to-pdf';
import { motion } from 'framer-motion';

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
          {formData.email && <span>{formData.email} | </span>}
          {formData.phone && <span>{formData.phone}</span>}
        </div>

        {/* Education */}
        {formData.education.length > 0 && (
          <>
            <h2 className={template.sectionTitle}>Education</h2>
            {formData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className={template.itemTitle}>{edu.institution}</h3>
                <p className={template.itemSubtitle}>
                  {edu.degree} | {edu.startYear} - {edu.endYear}
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
                <h3 className={template.itemTitle}>{exp.company}</h3>
                <p className={template.itemSubtitle}>
                  {exp.position} | {exp.startDate} - {exp.endDate}
                </p>
                <p className={template.itemDescription}>{exp.description}</p>
              </div>
            ))}
          </>
        )}

        {/* Custom Sections */}
        {formData.customSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={template.customSection}>
            <h2 className={template.sectionTitle}>{section.sectionName}</h2>
            <ul className="list-disc pl-5">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Skills */}
        {formData.skills.length > 0 && (
          <>
            <h2 className={template.sectionTitle}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </>
        )}
      </motion.div>

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
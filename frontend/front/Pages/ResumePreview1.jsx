import { templates } from '../src/util/templates';
import { usePDF } from 'react-to-pdf';
// import { motion } from 'framer-motion';
import { HomeIcon, BriefcaseBusiness, AtSign, Phone, GraduationCap, Building2, Award, ChartPie, FolderHeart, Star, Github, Linkedin, Instagram, Facebook, User, Signature } from 'lucide-react';

export const ResumePreview1 = ({ formData, selectedTemplate }) => {
  const { toPDF, targetRef } = usePDF({
    filename: `${formData.firstName}_${formData.lastName}_Resume.pdf`,
    page: {
      margin: { top: 15, right: 0, bottom: 15, left: 0 }, // Consistent margins in mm
      format: 'a4',
    },
    resolution: 2,
    method: open
  });

  const template = templates.multipage[selectedTemplate];
  

  return (
    <div className="p-8 min-h-screen">
      
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
          <h1 className={template.name}>
            <>
              {formData.firstName} {formData.lastName}
            </>
          </h1>

          {/* Contact Info */}
          <section className={`${template.itemSubtitle}`}>
            <div className="flex">
              <span className="h-4 w-4 me-2 mt-2">
                <AtSign className={template.custom_icons} />
              </span>
              {formData.email && <span> {formData.email} | </span>}
              <span className="h-4 w-4 mx-2 mt-2">
                <Phone className={template.custom_icons} />
              </span>
              {formData.phone && <span>{formData.phone}</span>}
            </div>

            <div className="flex">
              <span className="h-4 w-4 me-2 mt-2">
                <BriefcaseBusiness className={template.custom_icons} />
              </span>
              <p className={template.itemSubtitle}>
                {formData.professional_title} | {formData.professional_description}
              </p>
            </div>

            <div className="flex">
              <span className="h-4 w-4 me-2 mt-2">
                <HomeIcon className={template.custom_icons} />
              </span>
              <p className={template.itemSubtitle}>
                {formData.address}, {formData.city}, {formData.state}, {formData.country} - {formData.zip_code}
              </p>
            </div>
          </section>

          {/* Education */}
          {'education' in formData && (
            <section className="page-break">
              {formData.education.length > 0 && <h2 className={template.sectionTitle}>Education</h2>}
              {formData.education.map((edu, index) => (
                <div key={index} className="mt-2">
                  <div className="flex">
                    <span className="h-5 w-5 me-2 mt-3">
                      <GraduationCap className={template.custom_icons} />
                    </span>
                    <h3 className={template.itemTitle}>{edu.degree} ({edu.field_of_study})</h3>
                    <span className={`${template.itemSubtitle} ms-2 mt-1`}>
                      | {edu.start_date} - {edu.end_date}
                    </span>
                  </div>
                  <p>
                    <span className={template.itemSubtitle}>{edu.school} </span>
                    {edu.description && <span className={template.itemDescription}> | {edu.description}</span>}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* Experience */}
          {'experience' in formData && (
            <section className="page-break">
              {formData.experience.length > 0 && <h2 className={template.sectionTitle}>Experience</h2>}
              {formData.experience.map((exp, index) => (
                <div key={index} className="mt-2">
                  <div className="flex">
                    <span className="h-5 w-5 me-2 mt-3">
                      <Building2 className={template.custom_icons} />
                    </span>
                    <h3 className={template.itemTitle}>{exp.company}</h3>
                    <span className={`${template.itemSubtitle} mt-1 ms-2`}>
                      | {exp.start_date} - {exp.end_date ? exp.end_date : 'Present'}
                    </span>
                  </div>
                  <p>
                    <span className={template.itemSubtitle}> {exp.position} </span> | <span className={template.itemDescription}>{exp.description}</span>
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* Skills */}
          {'skills' in formData && (
            <section className="page-break">
              {formData.skills.length > 0 && <h2 className={template.sectionTitle}>Skills</h2>}
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, index) => (
                  <span key={index} className={template.skill}>
                    <span>{skill.name} - {skill.level} </span>
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {'achievements' in formData && (
            <section className="page-break">
              {formData.achievements.length > 0 && <h2 className={template.sectionTitle}>Achievements</h2>}
              {formData.achievements.map((achievement, index) => (
                <div key={index} className="mt-2 flex">
                  <span className="h-4 w-4 me-2 mt-2">
                    <Award className={template.custom_icons} />
                  </span>
                  <h3 className={template.itemSubtitle}>{achievement.title}</h3>
                </div>
              ))}
            </section>
          )}

          {/* Project */}
          {'projects' in formData && (
            <section className="page-break">
              {formData.projects.length > 0 && <h2 className={template.sectionTitle}>Projects</h2>}
              {formData.projects.map((proj, index) => (
                <div key={index} className="mt-2">
                  <div className="flex">
                    <span className="h-4 w-4 me-2 mt-3">
                      <Star className={template.custom_icons} />
                    </span>
                    <h3 className={template.itemTitle}>{proj.title}</h3>
                    {proj.projectUrl.length > 0 && (
                      <span className={`${template.itemSubtitle} ms-2 mt-1`}> | {proj.projectUrl}</span>
                    )}
                  </div>
                  <p className={template.itemDescription}>{proj.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Social Links */}
          { 'socialLinks' in formData &&
          <section className="page-break">
            <div className="grid grid-cols-2 gap-0 mt-2">
              {formData.socialLinks.github.length > 0 && (
                <div className="flex">
                  <span className="h-4 w-4 me-2 mt-3">
                    <Github className={template.custom_icons} />
                  </span>
                  <h3 className={template.itemSubtitle}>{formData.socialLinks.github}</h3>
                </div>
              )}
              {formData.socialLinks.linkedin.length > 0 && (
                <div className="flex">
                  <span className="h-4 w-4 me-2 mt-3">
                    <Linkedin className={template.custom_icons} />
                  </span>
                  <h3 className={template.itemSubtitle}>{formData.socialLinks.linkedin}</h3>
                </div>
              )}
              {formData.socialLinks.instagram.length > 0 && (
                <div className="flex">
                  <span className="h-4 w-4 me-2 mt-3">
                    <Instagram className={template.custom_icons} />
                  </span>
                  <h3 className={template.itemSubtitle}>{formData.socialLinks.instagram}</h3>
                </div>
              )}
              {formData.socialLinks.facebook.length > 0 && (
                <div className="flex">
                  <span className="h-4 w-4 me-2 mt-3">
                    <Facebook className={template.custom_icons} />
                  </span>
                  <h3 className={template.itemSubtitle}>{formData.socialLinks.facebook}</h3>
                </div>
              )}
              {formData.socialLinks.portfolio.length > 0 && (
                <div className="flex">
                  <span className="h-4 w-4 me-2 mt-3">
                    <Signature className={template.custom_icons} />
                  </span>
                  <h3 className={template.itemSubtitle}>{formData.socialLinks.portfolio}</h3>
                </div>
              )}
              {'otherSocialLinks' in formData && formData.otherSocialLinks.map((soc, index) => (
                <div key={index} className={`${template.custom_icons} break-after`}>
                  <span className={template.itemSubtitle}>{soc.name}</span> {" "}
                  <span className={template.itemSubtitle}>{soc.link}</span>
                </div>
              ))}
            </div>
          </section>
          }

          {/* Custom Sections */}
          <div>          
            {'customSections' in formData && formData.customSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={`${template.customSection} page-break`}>
                <h2 className={template.customSectionTitle}>{section.sectionName}</h2>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, itemIndex) => (
                    <span key={itemIndex} className={template.customSectionItems}>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

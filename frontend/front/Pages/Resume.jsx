import React from 'react'

export const Resume = () => {
  return (
    <div>Resume</div>
  )
}


// import React from 'react'

// export const Resume = () => {
//   return (
//     <div>
//       {/* {step === 'preview' && savedResume && ( */}
//       <div className="p-8 bg-white rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           {savedResume.personalInfo.fullName}
//         </h1>

//         <div className="text-center mb-8">
//           <p>{savedResume.personalInfo.email}</p>
//           <p>{savedResume.personalInfo.mobile}</p>
//           <p>{savedResume.personalInfo.address}</p>
//         </div>

//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Skills</h2>
//           <ul className="list-disc list-inside">
//             {savedResume.skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Projects</h2>
//           {savedResume.projects.map((project, index) => (
//             <div key={index} className="mb-4">
//               <h3 className="text-xl font-bold">{project.title}</h3>
//               <p className="text-sm text-gray-600">{project.description}</p>
//               {project.projectUrl && <a href={project.projectUrl} className="text-blue-500">Live Project</a>}
//               {project.gitLink && <a href={project.gitLink} className="text-blue-500 ml-4">GitHub Repo</a>}
//             </div>
//           ))}
//         </div>

//         {/* Similarly you can add Achievements, Education, Social Links etc. */}
//       </div>
//     {/* )} */}

//     </div>
//   )
// }

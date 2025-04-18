import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex justify-between items-center bg-white-800 p-4 shadow-lg sticky top-0 z-50">
        <div className="text-2xl font-bold">
          <Link to = "/" className="font-times-new-roman">Resumator</Link>
        </div>
        <div className="space-x-6 text-lg">
          <Link to = "/resumeques" className="hover:text-blue-500 font-times-new-roman">Resume Ques</Link>
          <Link to = "/resumethemes" className="hover:text-blue-500 font-times-new-roman">Resume Themes</Link>
          <Link to = "/resume" className="hover:text-blue-500 font-times-new-roman">Resume</Link>
          <Link to = "/test" className="hover:text-blue-500 font-times-new-roman">Test</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import CustomCursor from '../Components/CustomCursor'
import Navbar from '../Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from 'lucide-react'
import { ResumeQues } from '../Pages/ResumeQues'
import { ResumePreviewPage } from '../Components/ResumePreviewPage'
import Footer from '../Components/Footer'
import Try from '../Pages/Try'

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path='/home' element={<Try />} />
        <Route path='/' element={<Home />} />
        <Route path='/resumecreator' element={<ResumeQues />} />
        <Route path='/resumepreview' element={<ResumePreviewPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

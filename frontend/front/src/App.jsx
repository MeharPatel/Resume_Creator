import React from 'react'
import CustomCursor from '../Components/CustomCursor'
import Navbar from '../Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import { ResumeQues } from '../Pages/ResumeQues'
import { ResumePreviewPage } from '../Components/ResumePreviewPage'
import Footer from '../Components/Footer'
import Try from '../Pages/Try'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path='/home' element={<Try />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/resumecreator' element={<ResumeQues />} />
        <Route path='/resumepreview' element={<ResumePreviewPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

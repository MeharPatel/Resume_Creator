import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { ResumeQues } from '../Pages/ResumeQues'
import { ResumePreviewPage } from '../Components/ResumePreviewPage'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import CustomCursor from '../Components/CustomCursor'
import Try from '../Pages/Try'

function App() {

  return (
    <div>
      <CustomCursor />
    <Navbar />
      <Routes>
        <Route path='/home' element={<Try />} />
        <Route path="/" element={<Home />} />
        <Route path="/resumeques" element={<ResumeQues />} />
        <Route path="/resumepreview" element={<ResumePreviewPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App

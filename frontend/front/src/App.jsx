import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { ResumeQues } from './Pages/ResumeQues'
import { ResumeThemes } from './Pages/ResumeThemes'
import { Resume } from './Pages/Resume'
import { Footer } from './Components/Footer'
import Navbar from './Components/NAvbar'
import { Test } from './Pages/Test'

function App() {

  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumeques" element={<ResumeQues />} />
        <Route path="/resumethemes" element={<ResumeThemes />} />
        <Route path="/resumepreview" element={<Resume />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

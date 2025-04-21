import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { ResumeQues } from '../Pages/ResumeQues'
import { ResumePreviewPage } from '../Components/ResumePreviewPage'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'

function App() {

  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumeques" element={<ResumeQues />} />
        <Route path="/resumepreview" element={<ResumePreviewPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import Education from './pages/Education'
import './App.css'
import Navbar from './components/navigation/Navbar'
import Home from './pages/Home'
import Experiances from './pages/Experiances'
import Projects from './pages/Projects'
// import Contact from './pages/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
   <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/education" element={<Education />}/>
          <Route path="/experience" element={<Experiances />} />
          <Route path="/projects" element={<Projects />} /> 
          {/* <Route path="/contact" element={<Contact />} />  */}
    </Routes>
  </BrowserRouter>
   </>
  )
}

export default App
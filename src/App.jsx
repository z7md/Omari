import React from 'react'    
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Ishbilia from './pages/Ishbilia'
 import "./App.css"
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Initiative } from './pages/Initiative'
import Omarycenter from './pages/Omarycenter';
import Derah from './pages/Derah'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Omary" element={<Home />} />
        <Route path="/Omary/Ishbilia" element={<Ishbilia/>} />
        <Route path="/Omary/contact" element={<Contact />} />
        <Route path="/Omary/about" element={<About/>} />
        <Route path="/Omary/projects" element={<Projects/>} />
        <Route path="/Omary/projects/initiative" element={<Initiative/>} />
        <Route path="/Omary/projects/ishbilia" element={<Ishbilia/>} />
        <Route path="/Omary/projects/omarycenter" element={<Omarycenter/>} />
        <Route path="/Omary/projects/derahcenter" element={<Derah/>} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App

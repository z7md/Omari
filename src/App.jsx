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
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ishbilia" element={<Ishbilia/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/initiative" element={<Initiative/>} />
        <Route path="/projects/ishbilia" element={<Ishbilia/>} />
        <Route path="/projects/omarycenter" element={<Omarycenter/>} />
        <Route path="/projects/derahcenter" element={<Derah/>} />
      </Routes>
      </ScrollToTop>
      </BrowserRouter>
    
  )
}

export default App

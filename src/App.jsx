import React from 'react'    
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Ishbilia from './pages/Ishbilia'
 import "./App.css"
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Projects } from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ishbilia" element={<Ishbilia/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App

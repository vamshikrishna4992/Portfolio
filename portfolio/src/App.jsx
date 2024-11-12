import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'


export default function App() {
  return (
      <Router>
         <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
  )
}

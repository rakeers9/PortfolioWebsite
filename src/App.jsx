// src/App.jsx

import React from 'react'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import './styles/globals.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section - Full viewport height */}
      <section id="hero" className="section">
        <Hero />
      </section>

      {/* About Me Section */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  )
}

export default App
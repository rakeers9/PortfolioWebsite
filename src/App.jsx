import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <div className="app">
        {/* Global Navigation Header */}
        <Header />
        
        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
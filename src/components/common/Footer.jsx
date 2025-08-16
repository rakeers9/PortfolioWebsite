import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Footer.css'

const Footer = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gudipati@purdue.edu')
    // You could add a toast notification here
    alert('Email copied to clipboard!')
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left side - Contact */}
          <div className="footer-left">
            <p className="footer-message">
              Currently building AI systems at Purdue University
            </p>
            <button className="copy-email-btn btn btn-outline" onClick={handleCopyEmail}>
              <span className="icon">📋</span>
              Copy email
            </button>
          </div>
          
          {/* Right side - Links */}
          <div className="footer-right">
            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-title">Explore</h4>
                <Link to="/projects" className="footer-link">Projects</Link>
                <Link to="/about" className="footer-link">About</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
              </div>
              
              <div className="link-group">
                <h4 className="link-title">Connect</h4>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  LinkedIn
                </a>
                <a href="/resume.pdf" target="_blank" className="footer-link">Resume</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
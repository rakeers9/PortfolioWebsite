import React from 'react'
import './../../styles/components/Hero.css'

const Hero = () => {
  // Social media links from your specifications
  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:gudipati@purdue.edu',
      icon: '@', // We'll use a simple @ symbol for now, can be replaced with icon component
      ariaLabel: 'Send email to gudipati@purdue.edu'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sreekargudipati',
      icon: 'GH', // Placeholder - will be replaced with actual GitHub icon
      ariaLabel: 'Visit Sreekar\'s GitHub profile'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sreekargudipati',
      icon: 'IN', // Placeholder - will be replaced with actual LinkedIn icon
      ariaLabel: 'Visit Sreekar\'s LinkedIn profile'
    }
  ]

  // Navigation items
  const navItems = [
    { name: 'About me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experiences', href: '#experiences' }
  ]

  // Smooth scroll function for navigation
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hero-container">
      {/* Left Panel - Main Hero Content (65% width) */}
      <div className="hero-content">
        <div className="hero-text">
          {/* Greeting text */}
          <p className="hero-greeting">Hi, I am</p>
          
          {/* Name */}
          <h1 className="hero-name">Sreekar Gudipati</h1>
          
          {/* Title */}
          <p className="hero-title">Software Engineer</p>
          
          {/* Social Icons */}
          <div className="hero-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="social-icon"
                aria-label={link.ariaLabel}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Navigation (35% width) */}
      <div className="hero-nav-panel">
        <nav className="hero-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            
            {/* Contact Me Button */}
            <li className="nav-item">
              <a
                href="#contact"
                className="contact-btn btn"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                CONTACT ME
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Large "IT" Watermark - bottom-right corner */}
      <div className="hero-watermark" aria-hidden="true">
        IT
      </div>
    </div>
  )
}

export default Hero
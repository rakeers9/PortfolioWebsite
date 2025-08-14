import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/components/Header.css'

const Header = () => {
  const location = useLocation()
  
  const navItems = [
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Extra', path: '/extra' },
    { name: 'Resume', path: '/resume', external: true, icon: '→' }
  ]

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          {/* Logo/Home Link */}
          <Link to="/" className="logo">
            <div className="logo-icon">P</div>
            <span className="logo-text">Prayag Kalianda</span>
          </Link>
          
          {/* Navigation Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                {item.external ? (
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link external-link"
                  >
                    {item.name}
                    {item.icon && <span className="nav-icon">{item.icon}</span>}
                  </a>
                ) : (
                  <Link 
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
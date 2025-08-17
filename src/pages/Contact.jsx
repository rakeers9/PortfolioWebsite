import React, { useState } from 'react'
import '../styles/components/Contact.css'

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('gudipati@purdue.edu')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const contactMethods = [
    {
      title: 'Email',
      value: 'gudipati@purdue.edu',
      icon: '📧',
      action: handleEmailCopy,
      actionText: emailCopied ? 'Copied!' : 'Copy Email',
      description: 'Best way to reach me for professional inquiries'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/sreekargudipati',
      icon: '💼',
      link: 'https://linkedin.com/in/sreekargudipati',
      actionText: 'Visit Profile',
      description: 'Connect with me professionally'
    },
    {
      title: 'GitHub',
      value: 'github.com/rakeers9',
      icon: '⚡',
      link: 'https://github.com/rakeers9',
      actionText: 'View Code',
      description: 'Check out my open source projects'
    }
  ]

  return (
    <div className="contact">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              I'm always interested in new opportunities, collaborations, and interesting conversations. 
              Feel free to reach out if you'd like to work together or just want to chat!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div 
                key={method.title} 
                className="contact-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="contact-icon">
                  {method.icon}
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">{method.title}</h3>
                  <p className="contact-value">{method.value}</p>
                  <p className="contact-description">{method.description}</p>
                  
                  {method.action ? (
                    <button 
                      onClick={method.action}
                      className={`contact-button ${emailCopied ? 'copied' : ''}`}
                    >
                      <span className="button-icon">📋</span>
                      {method.actionText}
                    </button>
                  ) : (
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-button"
                    >
                      <span className="button-icon">🔗</span>
                      {method.actionText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Want to Reach Out?</h2>
            <p className="cta-description">
              Drop me an email!
            </p>
            <button 
              onClick={handleEmailCopy}
              className={`cta-button ${emailCopied ? 'copied' : ''}`}
            >
              <span className="cta-icon">📧</span>
              {emailCopied ? 'Email Copied!' : 'Copy My Email'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
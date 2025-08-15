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

      {/* Additional Info Section */}
      <section className="contact-info">
        <div className="container">
          <div className="info-content">
            <div className="info-text">
              <h2 className="info-title">Let's Build Something Great</h2>
              <p className="info-description">
                Whether you have a project in mind, want to discuss potential opportunities, 
                or just want to connect, I'd love to hear from you. I'm particularly interested in:
              </p>
              <ul className="interests-list">
                <li>Full-stack web development projects</li>
                <li>Machine learning and AI applications</li>
                <li>Mobile app development</li>
                <li>Open source collaborations</li>
                <li>Innovative tech solutions</li>
              </ul>
            </div>
            
            <div className="response-time">
              <div className="response-card">
                <div className="response-icon">⚡</div>
                <div className="response-content">
                  <h3>Quick Response</h3>
                  <p>I typically respond to emails within 24 hours</p>
                </div>
              </div>
              
              <div className="availability-card">
                <div className="availability-icon">🌍</div>
                <div className="availability-content">
                  <h3>Location</h3>
                  <p>Based in Indiana, USA (EST timezone)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start a Conversation?</h2>
            <p className="cta-description">
              Drop me a line and let's discuss how we can work together to bring your ideas to life.
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
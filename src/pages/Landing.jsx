import React from 'react'
import '../styles/components/Landing.css'

const Landing = () => {
  // Social links data
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sreekargudipati',
      icon: '💼',
      display: 'LinkedIn'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rakeers9',
      icon: '⚡',
      display: 'GitHub'
    },
    {
      name: 'Email',
      url: 'mailto:gudipati@purdue.edu',
      icon: '📧',
      display: 'Email'
    }
  ]

  // Project data with placeholders
  const projects = [
    {
      id: 1,
      name: "FL Fitness App",
      techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
      description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and social features.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=FL+Fitness+App",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    },
    {
      id: 2,
      name: "Summit",
      techStack: ["React", "TypeScript", "Express", "PostgreSQL"],
      description: "Event management platform for organizing and tracking meetups, conferences, and networking events.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=Summit",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    },
    {
      id: 3,
      name: "AI Football Analyzer",
      techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
      description: "Machine learning application that analyzes football game footage to provide tactical insights and player performance metrics.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=AI+Football+Analyzer",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    },
    {
      id: 4,
      name: "AI Company Mapper",
      techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      description: "AI-powered tool that maps and categorizes companies based on their business models, market presence, and competitive landscape.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=AI+Company+Mapper",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    },
    {
      id: 5,
      name: "NFL Predictive Player Props",
      techStack: ["Python", "NumPy", "Matplotlib", "API Integration"],
      description: "Statistical analysis tool that predicts NFL player performance and betting props using historical data and machine learning models.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=NFL+Predictive+Props",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    },
    {
      id: 6,
      name: "Java Store Calendar Application",
      techStack: ["Java", "Swing", "SQLite", "Maven"],
      description: "Desktop application for retail store management with calendar-based scheduling, inventory tracking, and employee management.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=Java+Store+Calendar",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    }
  ]

  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Main Hero Text with Inline Icon */}
            <h1 className="hero-text">
              <span className="text-muted">I'm a </span>
              <span className="pixel-figure">🧍</span>
              <span className="text-emphasis"> Product designer </span>
              <span className="text-muted">skilled at turning </span>
              <span className="text-emphasis">complex problems </span>
              <span className="text-muted">into </span>
              <span className="text-emphasis">digital solutions</span>
            </h1>
            
            {/* Social Links */}
            <div className="hero-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="social-link"
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-text">{link.display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="work-section">
        <div className="container">
          <h2 className="section-heading">Selected Projects</h2>
          
          <div className="projects-grid">
            {projects.slice(0, 6).map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={`${project.name} screenshot`}
                  />
                </div>
                <div className="project-info">
                  <div className="project-tags">
                    {project.techStack.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Project Links */}
                  <div className="project-links">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <span className="link-icon">⚡</span>
                      GitHub
                    </a>
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                    >
                      <span className="link-icon">🔗</span>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
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

  // Project data with updated descriptions
  const projects = [
    {
      id: 1,
      name: "FL Fitness App",
      techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
      description: "A full-stack fitness platform with live coach–client data sync, AI-powered workout generation, and mobile-first design.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=FL+Fitness+App",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    },
    {
      id: 2,
      name: "Summit",
      techStack: ["React", "TypeScript", "Express", "PostgreSQL"],
      description: "A gamified data-labeling app where users earn rewards while training ML models, with a company-facing web portal.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=Summit",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    },
    {
      id: 3,
      name: "AI Football Analyzer",
      techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
      description: "Computer vision system that detects players, tracks ball movement, and analyzes possession stats from football game clips.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=AI+Football+Analyzer",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    },
    {
      id: 4,
      name: "AI Company Mapper",
      techStack: ["Python", "GPT-4", "LangGraph", "NetworkX"],
      description: "Knowledge graph system powered by GPT and LangGraph, automating company mapping, research triggers, and live news monitoring.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=AI+Company+Mapper",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    },
    {
      id: 5,
      name: "NFL Predictive Player Props",
      techStack: ["Python", "BoilerQuant", "Decision Trees", "Monte Carlo"],
      description: "Built with BoilerQuant: an Elo-based predictive analytics framework using decision trees and Monte Carlo simulations to forecast NFL player performance.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=NFL+Predictive+Props",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9"
    },
    {
      id: 6,
      name: "Java Store Calendar Application",
      techStack: ["Java", "Swing", "SQLite", "Maven"],
      description: "Java Swing desktop application for retail stores with calendar scheduling, inventory tracking, and employee shift management.",
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
              <span className="pixel-figure">👨‍💻</span>
              <span className="text-emphasis"> Software Engineer </span>
              <span className="text-muted">skilled at turning </span>
              <span className="text-emphasis">complex problems </span>
              <span className="text-muted">into </span>
              <span className="text-emphasis">scalable, innovative solutions</span>
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
import React from 'react'
import '../styles/components/Projects.css'

const Projects = () => {
  // All project data
  const projects = [
    {
      id: 1,
      name: "FL Fitness App",
      techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
      description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and social features. Users can create custom workout routines, track their progress over time, and connect with friends for motivation.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=FL+Fitness+App",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9",
      featured: true
    },
    {
      id: 2,
      name: "Summit",
      techStack: ["React", "TypeScript", "Express", "PostgreSQL"],
      description: "Event management platform for organizing and tracking meetups, conferences, and networking events. Features include ticketing, attendee management, and real-time event updates.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=Summit",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9",
      featured: true
    },
    {
      id: 3,
      name: "AI Football Analyzer",
      techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
      description: "Machine learning application that analyzes football game footage to provide tactical insights and player performance metrics. Uses computer vision to track player movements and generate detailed statistics.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=AI+Football+Analyzer",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9",
      featured: true
    },
    {
      id: 4,
      name: "AI Company Mapper",
      techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      description: "AI-powered tool that maps and categorizes companies based on their business models, market presence, and competitive landscape. Helps investors and researchers understand market dynamics.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=AI+Company+Mapper",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9",
      featured: true
    },
    {
      id: 5,
      name: "NFL Predictive Player Props",
      techStack: ["Python", "NumPy", "Matplotlib", "API Integration"],
      description: "Statistical analysis tool that predicts NFL player performance and betting props using historical data and machine learning models. Provides accurate predictions for fantasy football and sports betting.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=NFL+Predictive+Props",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9",
      featured: false
    },
    {
      id: 6,
      name: "Java Store Calendar Application",
      techStack: ["Java", "Swing", "SQLite", "Maven"],
      description: "Desktop application for retail store management with calendar-based scheduling, inventory tracking, and employee management. Built with Java Swing for a native desktop experience.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=Java+Store+Calendar",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9",
      featured: false
    },
    {
      id: 7,
      name: "Simple C Compiler",
      techStack: ["C", "Flex", "Bison", "Assembly"],
      description: "A basic compiler implementation that translates C-like source code into assembly language with lexical and syntax analysis. Educational project demonstrating compiler design principles.",
      image: "https://via.placeholder.com/500x300/F8F8F8/CCCCCC?text=C+Compiler",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="projects">
      {/* Page Header */}
      <section className="projects-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Projects</h1>
            <p className="page-description">
              A collection of applications and tools I've built, ranging from mobile apps 
              to machine learning systems and development tools.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-heading">Featured Projects</h2>
          
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card featured-card">
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

      {/* Other Projects */}
      <section className="other-projects">
        <div className="container">
          <h2 className="section-heading">Other Projects</h2>
          
          <div className="projects-grid compact-grid">
            {otherProjects.map((project) => (
              <div key={project.id} className="project-card compact-card">
                <div className="project-image compact-image">
                  <img 
                    src={project.image} 
                    alt={`${project.name} screenshot`}
                  />
                </div>
                <div className="project-info">
                  <div className="project-tags">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                    {project.techStack.length > 3 && <span>+{project.techStack.length - 3}</span>}
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

export default Projects
import React, { useState } from 'react'
import VideoModal from '../components/common/VideoModal'
import '../styles/components/Projects.css'

const Projects = () => {
  // Video modal state
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoSrc: '',
    title: ''
  })

  // Function to open video modal
  const openVideoModal = (videoSrc, title) => {
    setVideoModal({
      isOpen: true,
      videoSrc,
      title
    })
  }

  // Function to close video modal
  const closeVideoModal = () => {
    setVideoModal({
      isOpen: false,
      videoSrc: '',
      title: ''
    })
  }
  // All project data with updated descriptions
  const projects = [
    {
      id: 1,
      name: "FL Fitness App",
      techStack: ["React Native", "TypeScript", "Expo", "Supabase"],
      description: "A full-stack fitness platform with live coach–client data sync, AI-powered workout generation, and mobile-first design. Users can track workouts, sync with coaches in real-time, and receive AI-generated fitness plans.",
      image: "public/images/projects/FitnessApp.png",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "videos/demos/FitnessApp.mov",
      featured: true
    },
    {
      id: 2,
      name: "Summit",
      techStack: ["Flutter", "MongoDB", "Javascript", "Python"],
      description: "A gamified data-labeling app where users earn rewards while training ML models, with a company-facing web portal. Features include point systems, leaderboards, and data quality metrics for enterprise clients.",
      image: "public/images/projects/Summit.png",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9",
      featured: true
    },
    {
      id: 3,
      name: "AI Football Analyzer",
      techStack: ["Python", "YOLO"],
      description: "Computer vision system that detects players, tracks ball movement, and analyzes possession stats from football game clips. Uses advanced object detection and tracking algorithms for sports analytics.",
      image: "public/images/projects/FootballAnalyzer.png",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "public/videos/demos/FootballAnalyzer.mov",
      featured: true
    },
    {
      id: 4,
      name: "AI Company Mapper",
      techStack: ["Python", "GPT-4", "LangGraph", "NetworkX", "Streamlit"],
      description: "Knowledge graph system powered by GPT and LangGraph, automating company mapping, research triggers, and live news monitoring. Integrates multiple data sources for comprehensive business intelligence.",
      image: "public/images/projects/CompanyMapper.png",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "public/videos/demos/CompanyMapper.mov",
      featured: true
    },
    {
      id: 5,
      name: "NFL Predictive Player Props",
      techStack: ["Python", "Decision Trees"],
      description: "Built with BoilerQuant: an Elo-based predictive analytics framework using decision trees and Monte Carlo simulations to forecast NFL player performance. Provides accurate predictions for fantasy football and sports analytics.",
      image: "public/images/projects/PredictivePlayerProps.png",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "https://github.com/rakeers9",
      featured: false
    },
    {
      id: 6,
      name: "Java Store Calendar Application",
      techStack: ["Java"],
      description: "Java Swing desktop application for retail stores with calendar scheduling, inventory tracking, and employee shift management. Built with a native desktop experience for offline functionality.",
      image: "public/images/projects/StoreCalendar.png",
      githubUrl: "https://github.com/rakeers9",
      demoUrl: "public/videos/demos/StoreCalendar.mov",
      featured: false
    },
    {
      id: 7,
      name: "Simple C Compiler",
      techStack: ["C", "Assembly", "SimpleC", "C++"],
      description: "A basic compiler implementation that translates C-like source code into assembly language with lexical and syntax analysis. Educational project demonstrating compiler design principles and language processing.",
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
                    <button
                      onClick={() => openVideoModal(project.videoSrc, project.name)}
                      className="project-link demo-link"
                    >
                      <span className="link-icon">🎥</span>
                      Demo
                    </button>
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
                    <button
                      onClick={() => openVideoModal(project.videoSrc, project.name)}
                      className="project-link demo-link"
                    >
                      <span className="link-icon">🎥</span>
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={closeVideoModal}
        videoSrc={videoModal.videoSrc}
        title={videoModal.title}
      />
    </div>
  )
}

export default Projects
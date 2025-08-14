import React from 'react'
import '../styles/components/About.css'

const About = () => {
  return (
    <div className="about">
      {/* About Me Section */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            {/* Left - Profile Image */}
            <div className="profile-image">
              <img 
                src="https://via.placeholder.com/350x450/CCCCCC/666666?text=Profile+Photo" 
                alt="Profile photo"
              />
            </div>
            
            {/* Right - About Text */}
            <div className="profile-text">
              <h1 className="about-heading">
                Hi, I'm Prayag <span className="pixel-figure">🧍‍♂️</span>
              </h1>
              
              <div className="about-paragraphs">
                <p>
                  My first experience with design was creating posters of my favorite football 
                  players and convincing them to post them on their Instagram (
                  <a href="#" className="success-link">I succeeded once!</a>
                  ). Fast forward many years, I graduated from BDes Interaction Design 
                  at Emily Carr University in 2025 and am a <strong>creative problem solver</strong> who 
                  enjoys designing solutions to business and user problems through <strong>data- 
                  and insight-driven digital experiences</strong>.
                </p>
                
                <p>
                  In my free time, I'm probably on a run, playing football, or working on 
                  improving my photography skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="work-experience">
        <div className="container">
          <div className="experience-content">
            {/* Left - Section Heading */}
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">🧱</span>
                Work experience
              </h2>
            </div>
            
            {/* Right - Job Entries */}
            <div className="experience-list">
              {/* TextLayer Job */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder black-logo">TL</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">TextLayer</h3>
                  <p className="job-duration">Jul. 2025 – Current / Product Designer</p>
                  <p className="job-description">
                    Working as the only product designer in an AI middleware startup helping enterprises and ambitious 
                    teams build, deploy, and scale advanced AI systems—without rewriting their infrastructure.
                  </p>
                </div>
              </div>

              {/* Mazur.design Job */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder blue-logo">M</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">Mazur.design</h3>
                  <p className="job-duration">March 2025 – Jul. 2025 / Product Designer</p>
                  <p className="job-description">
                    Joined a friend trying to build a design agency specialized on working with AI and Web3 products. Got 
                    the opportunity to work with and design for upcoming tech startups shown below.
                  </p>
                  
                  {/* Client Logos */}
                  <div className="client-logos">
                    <span className="client-logo">📊 LedgerUp</span>
                    <span className="client-logo">◆ TextLayer</span>
                    <span className="client-logo">↗ trawa.</span>
                  </div>
                </div>
              </div>

              {/* The Coaches Site Job */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder gray-logo">C</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">The Coaches Site</h3>
                  <p className="job-duration">Jan. 2024 – Dec. 2024 / UX Designer</p>
                  <p className="job-description">
                    Led design for a football coaching platform, working on user experience improvements and 
                    interface design for coaches and players.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <div className="education-content">
            {/* Left - Section Heading */}
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">🧱</span>
                Education
              </h2>
            </div>
            
            {/* Right - Education Entries */}
            <div className="education-list">
              {/* BDes Entry */}
              <div className="education-entry">
                <div className="education-left">
                  <h3 className="degree-name">BDes Interaction Design</h3>
                </div>
                <div className="education-right">
                  <p className="institution-name">Emily Carr University of Art and Design</p>
                  <span className="education-dates">2021 – 2025</span>
                </div>
              </div>

              {/* IB Entry */}
              <div className="education-entry">
                <div className="education-left">
                  <h3 className="degree-name">International Baccalaureate</h3>
                </div>
                <div className="education-right">
                  <p className="institution-name">Stonehill International School</p>
                  <span className="education-dates">2019 – 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
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
                src="public/images/profile/37CA8674-0553-40D7-B2CD-84C9CC54705F_1_201_a.jpeg" 
                alt="Profile photo"
              />
            </div>
            
            {/* Right - About Text */}
            <div className="profile-text">
              <h1 className="about-heading">
                Hi, I'm Sreekar <span className="pixel-figure">👨‍💻</span>
              </h1>
              
              <div className="about-paragraphs">
                <p>
                  I'm a Computer Science student at Purdue University, passionate about building AI-powered systems, 
                  scalable platforms, and data-driven applications. My work spans enterprise AI pilots, full-stack 
                  development, and research in data science and machine learning.
                </p>
                
                <p>
                  I enjoy solving problems at the intersection of technology and business impact — from automating 
                  enterprise workflows to engineering predictive models that drive real-world decisions.
                </p>
                
                <p>
                  In my free time, I'm usually playing football, running, or experimenting with new AI-driven projects.
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
              {/* AI Collaborator */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder blue-logo">AI</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">Solutions Architect Intern – AI Collaborator</h3>
                  <p className="job-duration">May 2025 – Sep 2025</p>
                  <p className="job-description">
                    Working on enterprise AI solutions and automation platforms, focusing on scalable AI 
                    implementations for business workflows.
                  </p>
                </div>
              </div>

              {/* AlgoradaTech */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder black-logo">AT</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">Software Engineering Intern – AlgoradaTech</h3>
                  <p className="job-duration">May 2025 – Jun 2025</p>
                  <p className="job-description">
                    Built knowledge graph system with GPT-4o + NetworkX, extracting 500+ entities for faster analysis. 
                    Automated research triggers via LangGraph, enabling live, targeted news monitoring. 
                    Deployed Streamlit app with AI agents, reducing analyst review time by 15 minutes per article.
                  </p>
                </div>
              </div>

              {/* Synechron */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder blue-logo">S</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">Software Engineering Intern – Synechron</h3>
                  <p className="job-duration">May 2024 – Jul 2024</p>
                  <p className="job-description">
                    Developed onboarding assessment platform with Azure OpenAI, reducing training time by 30%. 
                    Built resume screening tool using ChromaDB for AI-driven candidate evaluation. 
                    Delivered Flask-based chatbot APIs, improving enterprise automation workflows.
                  </p>
                </div>
              </div>

              {/* Yamaha */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder gray-logo">Y</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">Data Science Researcher – Yamaha</h3>
                  <p className="job-duration">Jan 2024 – May 2024</p>
                  <p className="job-description">
                    Created ML-driven predictive software analyzing 180,000+ records, halving scrap production. 
                    Built ExtraTrees model (94% accuracy) to identify and remove defect drivers.
                  </p>
                </div>
              </div>

              {/* John Deere */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder black-logo">JD</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">Data Science Researcher – John Deere</h3>
                  <p className="job-duration">Aug 2023 – Dec 2023</p>
                  <p className="job-description">
                    Engineered XGBoost model (90% accuracy) predicting Midwest soil moisture for farmers. 
                    Integrated 63,000+ multi-source records via SQL and built Tableau dashboards for planning.
                  </p>
                </div>
              </div>

              {/* Singapore Armed Forces */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder gray-logo">SAF</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">Singapore Armed Forces – Corporal</h3>
                  <p className="job-duration">Aug 2021 – Aug 2023</p>
                  <p className="job-description">
                    Completed Basic Military and Admin Training, serving in MINDEF Communications Organisation. 
                    Performed as guitarist with the Music and Drama Company (MDC) at parades and Army Open House 
                    for 1,000+ attendees. Managed 20+ crew for live performances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Leadership Section */}
      <section className="work-experience">
        <div className="container">
          <div className="experience-content">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">🔬</span>
                Research & Leadership
              </h2>
            </div>
            
            <div className="experience-list">
              {/* Purdue Fusion Studio */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder blue-logo">PFS</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">Undergraduate Research - Purdue Fusion Studio for Entertainment</h3>
                  <p className="job-duration">Jan 2025 – Present</p>
                  <p className="job-description">
                    Collaborated with faculty to automate live theatre prop delivery using robotics + AI. 
                    Built MDP-based computer vision platform for stage navigation and placement. 
                    Designed LIDAR-enabled object detection for real-time tracking and collision avoidance.
                  </p>
                </div>
              </div>

              {/* ML @ Purdue */}
              <div className="job-entry">
                <div className="company-logo">
                  <div className="logo-placeholder black-logo">ML</div>
                </div>
                <div className="job-details">
                  <h3 className="company-name">Project Lead – Machine Learning @ Purdue</h3>
                  <p className="job-duration">Sep 2024 – Present</p>
                  <p className="job-description">
                    Deployed AI evaluation platform at Purdue's Hello World Hackathon, grading 300+ projects live. 
                    Built ReactJS + Flask system integrating NLP + CV models for automated project scoring. 
                    Delivered real-time leaderboard insights to sponsors and judges.
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
                <span className="section-icon">🎓</span>
                Education
              </h2>
            </div>
            
            {/* Right - Education Entries */}
            <div className="education-list">
              {/* Purdue University */}
              <div className="education-entry">
                <div className="education-left">
                  <h3 className="degree-name">B.S. in Computer Science, Minor in Economics</h3>
                  <p className="education-details">GPA: 3.7 | Outstanding Sophomore of the Year | 3× Dean's List | 2× Semester Honors</p>
                </div>
                <div className="education-right">
                  <p className="institution-name">Purdue University</p>
                  <span className="education-dates">2023 – 2027</span>
                </div>
              </div>

              {/* Stonehill International School */}
              <div className="education-entry">
                <div className="education-left">
                  <h3 className="degree-name">A-Levels - 4A*s</h3>
                </div>
                <div className="education-right">
                  <p className="institution-name">GEMS FirstPoint School</p>
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
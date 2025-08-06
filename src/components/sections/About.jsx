// src/components/sections/About.jsx
import React from 'react'

const About = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem', 
      background: '#111', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      color: '#00D8FF'
    }}>
      <div>
        <h2>ABOUT ME</h2>
        <p style={{ maxWidth: '600px', lineHeight: '1.6', marginTop: '1rem' }}>
          I'm a Computer Science major at Purdue University with a passion for building 
          AI-augmented systems that bridge real-world problems and scalable engineering solutions. 
          I've led machine learning and full-stack projects across research labs and companies 
          like Synechron, Yamaha, and John Deere — where I delivered impactful results like 
          reducing manufacturing scrap rates and automating resume screening pipelines. 
          Right now, I'm focused on building a fitness tracking app and experimenting with 
          cutting-edge AI technologies.
        </p>
      </div>
    </div>
  )
}

export default About
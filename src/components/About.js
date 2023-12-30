import React from 'react';

import '../stylesheets/About.css';


const About = () => {
  return (
    <div className="about-container" id='about'>
      <h2 className="about-title">About</h2>
      <div className="about-section">
        <div className="about-info">
          <p>Hey there! My name is <span className='bold'>Ben</span>, and I'm a web developer
          living in the Pacific Northwest.</p>
          <p>Two of the things that best define me are that I value being a life-long learner
          and I'm fascinated by any task that requires problem-solving. These traits have naturally
          led me to develop a passion for <span className='bold'>web development</span> and <span className='bold'>software
          engineering</span> in general.</p>
          <p>My hobbies outside of web development include cooking, hiking, reading, language learning 
          (I speak Spanish and am learning Japanese),
          and gaming.</p>
          <p>Please note that the skills on display are not an exhaustive list, and there are additional
          technologies that I'm proficient in!</p>
        </div>
        <div className="skills-grid">
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='JS' className='dev-icon' />
            <div className="skill-name">JAVASCRIPT</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt='TS' className='dev-icon' />
            <div className="skill-name">TYPESCRIPT</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React' className='dev-icon' />
            <div className="skill-name">REACT</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className='dev-icon' />
            <div className="skill-name">NODE.JS</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt='C#' className='dev-icon' />            
            <div className="skill-name">C#</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='HTML' className='dev-icon' />
            <div className="skill-name">HTML</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='CSS' className='dev-icon' />
            <div className="skill-name">CSS</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt='Tailwind' className='dev-icon' />
            <div className="skill-name">TAILWIND</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt='Jest' className='dev-icon' />
            <div className="skill-name">JEST</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='Git' className='dev-icon' />
            <div className="skill-name">GIT</div>
          </div>
          <div className="skills">       
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" alt='PostgreSQL' className='dev-icon' />
            <div className="skill-name">POSTGRESQL</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" alt='MongoDB' className='dev-icon' />
            <div className="skill-name">MONGODB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
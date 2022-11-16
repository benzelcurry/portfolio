import React from 'react';

import '../stylesheets/About.css';


const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <div className="about-section">
        <div className="about-info">
          <p>Hey there! My name is <span className='bold'>Ben</span>, and I'm a web developer
          living in the Pacific Northwest.</p>
          <p>Two of the things that best define me are that I value being a life-long learner
          and I'm fascinated by any task that requires problem-solving. These traits have naturally
          led me to develop a passion for <span className='bold'>web development</span> and the
          desire to pursue a career within the field.</p>
          <p>My hobbies outside of web development include cooking, hiking, reading, language learning,
          and gaming.</p>
        </div>
        <div className="skills-grid">
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='HTML' className='dev-icon' />
            <div className="skill-name">HTML</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='CSS' className='dev-icon' />
            <div className="skill-name">CSS</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='JS' className='dev-icon' />
            <div className="skill-name">JAVASCRIPT</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React' className='dev-icon' />
            <div className="skill-name">REACT</div>
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt='Webpack' className='dev-icon' />
            <div className="skill-name">WEBPACK</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt='Firebase' className='dev-icon' />
            <div className="skill-name">FIREBASE</div>
          </div>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='NPM' className='dev-icon' />
            <div className="skill-name">NPM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
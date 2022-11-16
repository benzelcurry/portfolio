import React from 'react';

import '../stylesheets/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <div className="about-section">
        <p>Hey there! My name is <span className='bold'>Ben</span>, and I'm a web developer
        living in the Pacific Northwest.</p>
        <p>Two of the things that best define me are that I value being a life-long learner
        and I'm fascinated by any task that requires problem-solving. These traits have naturally 
        led me to develop a passion for <span className='bold'>web development</span> and the
        desire to pursue a career within the field.</p>
        <p>My hobbies outside of web development include cooking, hiking, reading, language learning, 
        and gaming.</p>
      </div>
    </div>
  );
};

export default About;
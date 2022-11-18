import React from 'react';

import '../stylesheets/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title">Contact</div>
      <div className="contact-status">
        I am currently seeking a position as either a front end or full stack 
        web developer. If you're interested in learning more about either me or my
        projects, feel free to reach out to me below!
      </div>
      <div className="contact-form">
        <a href="https://github.com/benzelcurry" target='_blank' rel='noreferrer'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt='Github' className='contact-icon gh'
          />
        </a>
        <a href="https://www.linkedin.com/in/ben-whiting-563526207/" target='_blank' rel='noreferrer'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt='LinkedIn' className='contact-icon'
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
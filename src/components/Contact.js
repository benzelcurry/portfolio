import React from 'react';

import Send from '../images/send.svg';
import '../stylesheets/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container" id='contact'>
      <h2 className="contact-title">Contact</h2>
      <div className="contact-status">
        I'm currently employed as a full stack developer and am not seeking work, but 
        if you're interested in reaching out and talking about anything code-related, feel 
        free to contact me via the form below!
        {/* I am currently seeking a position as either a front end, back end, or full stack 
        web developer. If you're interested in learning more about either me or my
        projects, feel free to reach out to me below! */}
      </div>
      <div className="contact-form">
        <div className="socials">
          <a href="https://github.com/benzelcurry" target='_blank' rel='noreferrer'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt='Github' className='contact-icon gh'
            />
          </a>
          <a href="https://www.linkedin.com/in/benawhiting/" target='_blank' rel='noreferrer'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt='LinkedIn' className='contact-icon'
            />
          </a>
        </div>
        <form action='https://formsubmit.co/91c303a45cb8f48d563705473ae6a190' 
          method='post' className='email-form'>
          <input aria-label='Enter your name' className='form-name' type="text"
            placeholder='Name' required />
          <input aria-label='Enter your email address' className='form-email' 
            type="email" name='email' placeholder='Email' required />
          <textarea aria-label='Enter your message' className='form-message' 
            type="text" name='message' placeholder='Message' required />
          <button className='submit'>Send <img src={Send} alt='' /></button>
        </form>
      </div>
      <a href='#navbar'><button className="return">Return To Top</button></a>
    </div>
  );
};

export default Contact;
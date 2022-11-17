import React from 'react';

import Letterboxd from '../images/letterboxd-clone.png';
import '../stylesheets/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className='project'>
        <img src={Letterboxd} alt='Letterboxd clone' className='screenshot' />
        <div className="project-info">
          <div className="project-name">Letterboxd Clone</div>
          <div className="project-description">
            Clone of letterboxd.com, built from the ground up using React, The Movie
            Database API, and Firebase Hosting.
          </div>
          <a href="https://letterboxd-clone-odin.web.app/"><button>Live App</button></a>
          <a href="https://github.com/benzelcurry/letterboxd-clone"><button>Repository</button></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
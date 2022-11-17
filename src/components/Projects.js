import React from 'react';

import Letterboxd from '../images/letterboxd-clone.png';
import Waldo from '../images/waldo.png';
import ToDo from '../images/to-do.png';
import '../stylesheets/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-display">
        <div className='project'>
          <img src={Letterboxd} alt='Letterboxd clone' className='screenshot' />
          <div className="project-info">
            <div className="project-name">Letterboxd Clone</div>
            <div className="project-description">
              Clone of letterboxd.com, built from the ground up using React, The Movie
              Database API, and Firebase Hosting.
            </div>
            <div className="buttons">
              <a href="https://letterboxd-clone-odin.web.app/" target='_blank' rel='noreferrer'>
                <button>Live App</button>
              </a>
              <a href="https://github.com/benzelcurry/letterboxd-clone" target='_blank' rel='noreferrer'>
                <button>Repository</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <div className="project-name middle">Where's Waldo</div>
            <div className="project-description">
              Where's Waldo web app, built using React, Firestore Database, and Firebase
              hosting.
            </div>
            <div className="buttons middle">
              <a href="https://wheres-waldo-at.web.app/" target='_blank' rel='noreferrer'>
                <button>Live App</button>
              </a>
              <a href="https://github.com/benzelcurry/wheres-waldo" target='_blank' rel='noreferrer'>
                <button>Repository</button>
              </a>
            </div>
          </div>
          <img src={Waldo} alt="Where's Waldo" className='screenshot' />
        </div>
        <div className="project">
          <img src={ToDo} alt='To-Do list' className='screenshot' />
          <div className="project-info">
            <div className="project-name">To-Do List</div>
            <div className="project-description">
              To-do list web app, built using vanilla JS and utilizing local storage for 
              saving user data between sessions.
            </div>
            <div className="buttons">
              <a href="https://benzelcurry.github.io/to-do-list/" target='_blank' rel='noreferrer'>
                <button>Live App</button>
              </a>
              <a href="https://github.com/benzelcurry/to-do-list" target='_blank' rel='noreferrer'>
                <button>Repository</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
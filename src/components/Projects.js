import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Benzelbook from '../images/benzelbook.png';
import Letterboxd from '../images/letterboxd-clone.png';
import Waldo from '../images/waldo.png';
import ENVSMatcher from '../images/envs-matcher.png';
import '../stylesheets/Projects.css';

const Projects = () => {
  const { ref: book, inView: bookVisible } = useInView({});
  const { ref: lb, inView: lbVisible } = useInView({});
  const { ref: waldo, inView: waldoVisible } = useInView({});
  const { ref: todo, inView: todoVisible } = useInView({});
  const [bookShown, setBookShown] = useState(false);
  const [lbShown, setLbShown] = useState(false);
  const [waldoShown, setWaldoShown] = useState(false);
  const [todoShown, setTodoShown] = useState(false);

  useEffect(() => {
    if (bookVisible) { setBookShown(true) }
  }, [bookVisible])

  useEffect(() => {
    if (lbVisible) { setLbShown(true) }
  }, [lbVisible])

  useEffect(() => {
    if (waldoVisible) { setWaldoShown(true) }
  }, [waldoVisible])

  useEffect(() => {
    if (todoVisible) { setTodoShown(true) }
  }, [todoVisible])

  return (
    <div className="projects-container" id='projects'>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-display">
        <div ref={todo} className={`${'project'} ${todoShown ? 'animate-todo' : ''}`}>
          <img src={ENVSMatcher} alt='ENVS Matcher' className='screenshot' />
          <div className="project-info">
            <div className="project-name">ENVS Matcher</div>
            <div className="project-description">
              Full stack career-matching app, allowing admins to update the site
              without writing code. Built with Typescript, React, Node.js, MongoDB, and Tailwind.
            </div>
            <div className="buttons">
              <a href="https://envs-matcher.web.app/" target='_blank' rel='noreferrer'>
                <button>Live App</button>
              </a>
              <a href="https://github.com/benzelcurry/envs-matcher" target='_blank' rel='noreferrer'>
                <button>Repository</button>
              </a>
            </div>
          </div>
        </div>
        <div ref={book} className={`${'project'} ${'middle'} ${bookShown ? 'animate-waldo' : ''}`}>
          <img src={Benzelbook} alt="Benzelbook" className='screenshot waldo' />
          <div className="project-info">
            <div className="project-name middle">Benzelbook</div>
            <div className="project-description">
              Full stack MERN app inspired by Facebook. Primary technologies include React,
              MongoDB, and Express/Node.js.
            </div>
            <div className="buttons middle">
              <a href="https://benzel-book.web.app/" target='_blank' rel='noreferrer'>
                <button>Live App</button>
              </a>
              <a href="https://github.com/benzelcurry/benzelbook" target='_blank' rel='noreferrer'>
                <button>Repository</button>
              </a>
            </div>
          </div>
        </div>
        <div ref={lb} className={`${'project'} ${lbShown ? 'animate-lb' : ''}`}>
          <img src={Letterboxd} alt='Letterboxd clone' className='screenshot' />
          <div className="project-info">
            <div className="project-name">Letterboxd Clone</div>
            <div className="project-description">
              Clone of letterboxd.com, built from the ground up using React, The Movie
              Database API, Google Authentication, and Firebase Hosting.
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
        <div ref={waldo} className={`${'project'} ${'middle'} ${waldoShown ? 'animate-waldo' : ''}`}>
          <img src={Waldo} alt="Where's Waldo" className='screenshot waldo' />
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
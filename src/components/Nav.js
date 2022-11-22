import React from 'react';

import '../stylesheets/Nav.css';

const Nav = () => {
  return (
    <div className='navbar'>
      <div className="nav-icon"><a href='#about'>About</a></div>
      <div className="nav-icon"><a href='#projects'>Projects</a></div>
      <div className="nav-icon"><a href='#contact'>Contact</a></div>
    </div>
  );
};

export default Nav;
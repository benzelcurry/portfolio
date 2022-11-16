import React from 'react';

import '../stylesheets/Nav.css';

const Nav = () => {
  return (
    <div className='navbar'>
      <div className="nav-icon">Home</div>
      <div className="nav-icon">About</div>
      <div className="nav-icon">Projects</div>
      <div className="nav-icon">Contact</div>
    </div>
  );
};

export default Nav;
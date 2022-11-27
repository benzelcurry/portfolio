import React from 'react';

import '../stylesheets/Nav.css';

const Nav = () => {
  return (
    <div className='navbar' id='navbar'>
      <button className="nav-icon"><a href='#about'>About</a></button>
      <button className="nav-icon"><a href='#projects'>Projects</a></button>
      <button className="nav-icon"><a href='#contact'>Contact</a></button>
    </div>
  );
};

export default Nav;
import React from 'react';

import Nav from './Nav';
import Title from './Title';
import About from './About';
import '../stylesheets/App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Nav />
      <div className="content">
        <Title />
        <About />
      </div>
    </div>
  );
}

export default App;

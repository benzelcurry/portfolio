import React from 'react';

import Nav from './Nav';
import Title from './Title';
import About from './About';
import '../stylesheets/App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Nav />
      <Title />
      <About />
    </div>
  );
}

export default App;

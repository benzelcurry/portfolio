import React from 'react';

import Nav from './Nav';
import Title from './Title';
import '../stylesheets/App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Nav />
      <Title />
    </div>
  );
}

export default App;

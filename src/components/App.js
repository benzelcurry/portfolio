import React from 'react';

import Nav from './Nav';
import '../stylesheets/App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Nav />
      <div>Website content will go in here.</div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

import '../stylesheets/Title.css';

const Title = () => {
  const [visible, setVisible] = useState('hidden');

  // Hides job title until personal name has fallen into place
  useEffect(() => {
    setTimeout(() => {
      setVisible('visible')
    }, 500);
  })

  return (
    <div className="title-container">
      <div className="name">Ben Whiting</div>
      <div className="position" style={{visibility: `${visible}`}}>Web Developer</div>
    </div>
  );
};

export default Title;
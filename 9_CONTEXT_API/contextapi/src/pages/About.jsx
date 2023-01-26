import React from 'react';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

function About() {
  const { color, dispatch } = useTitleColorContext();
  return (
    <div>
      <h1 style={{ color }}>ABOUT</h1>
    </div>
  );
}

export default About;

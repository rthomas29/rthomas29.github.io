import React from 'react';
import Rakeem from './Rakeem-min.JPG';
import './App.css';

function About() {
  return(
    <div className="App">
      <img src={Rakeem} alt="rakeem-profile-pic" />
      <ul className="Social-Links">
        <li><a href="https://twitter.com/rthom4s">Twitter</a></li>
        <li><a href="https://www.linkedin.com/in/rakeem-thomas-b3295999/">LinkedIn</a></li>
        <li><a href="https://github.com/rthomas29">Github</a></li>
      </ul>
    </div>
  );
}

export default About;
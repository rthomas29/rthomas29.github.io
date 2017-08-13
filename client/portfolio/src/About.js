import React from 'react';
import Rakeem from './Rakeem-min copy.jpeg';
import './App.css';

function About() {
  return(
    <div className="About-Div">
      <div className="Picture-Div">
        <img src={Rakeem} alt="rakeem-profile-pic" />
      </div>
      <div className="About-Blurb">
        <p>
            Hi, I'm Rakeem. I enjoy learning new things, especially related to web development. I work with <a href="https://www.launchcode.org">LaunchCode</a>, a non-profit with a mission to create economic opportunity for aspiring developers through job placement and training in technology. I'm also looking to take on small side projects! DM me on <a href="https://twitter.com/rthom4s">Twitter</a> to get in touch. See you around!
          </p>
      </div>
    </div>
  );
}

export default About;
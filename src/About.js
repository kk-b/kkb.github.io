import React from 'react';
import dog from './dogg.png';
import './theme.css';
import Typical from 'react-typical';

function About() {
  return (
    <div className="basic">
      <header className="basic-header">
        <img src={dog} className="App-logo" alt="logo" />
        <p>
          <h1>welcome to my about page.</h1>
        </p>
      </header>
    </div>
  );
}

export default About;

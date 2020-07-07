import React from 'react';
import dog from './dogg.png';
import './theme.css';


function Projects() {
  return (
    <div className="basic">
      <header className="basic-header">
        <img src={dog} className="App-logo" alt="logo" />
        <p>
          <h1>welcome to my projects page.</h1>
        </p>
      </header>
    </div>
  );
}

export default Projects;

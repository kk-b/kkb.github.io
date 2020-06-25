import React from 'react';
import dog from './dogg.png';
import './App.css';
import './theme.css';
import Typical from 'react-typical';


function Home() {
  return (
    <div className="basic">
      <header className="basic-header">
        <img src={dog} className="App-logo" alt="logo" />
        <p>
          <h1>kyle khuong-bui.</h1>
          <code><Typical steps = {['welcome to my page.']} loop={1} wrapper="p"/></code>
          <h3>this is still a work in progress. :DD</h3>
        </p>
      </header>
    </div>
  );
}

export default Home;

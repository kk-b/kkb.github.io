import React from 'react';

import {Route, Link} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import navBar from './NavBar';

import './App.css';
import './theme.css';


function App() {
  return (
    <div className="App">
      <navBar />
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/about" component={About}/>
      <Route exact path = "/projects" component={Projects}/>
      <Route exact path = "/nav" component={navBar}/>
    </div>
  );
}

export default App;

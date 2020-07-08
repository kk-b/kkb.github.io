import React from 'react';
import './App.css';
import './theme.css';
import Typical from 'react-typical';


function Home() {
  return (
    <body>
      <div className="basic">
        <header className="basic-header">
          <p>
            <h1>kyle khuong-bui.</h1>
            <code><Typical steps = {['welcome to my page.', 2000, 'this is a work in progress... :DD']} loop={1} wrapper="p"/></code>
            <div className="social">
              <ul>
                <li>
                  <a href ="https://www.linkedin.com/in/kyle-khuong-bui/"><i class="fab fa-linkedin-in" ></i></a>
                </li>
                <li>
                  <a href ="https://github.com/kk-b"><i class="fab fa-github"></i></a>
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                </li>
              </ul>
            </div>
          </p>
        </header>
      </div>
    </body>
  );
}

export default Home;

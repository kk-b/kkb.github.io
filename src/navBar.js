import React from 'react';
import {Link} from 'react-router-dom';

function navBar(){
    return(
        <div className="basic">
            <header className='basic-header'>
            <ul>
                <h1>
                <li><Link to="/"className="links">Home Page</Link></li>
                <li><Link to="/about"className="links">About Page</Link></li>
                <li><Link to="/projects"className="links">Projects Page</Link></li>
                </h1>
            </ul>
            </header>
        </div>
    )
}

export default navBar;
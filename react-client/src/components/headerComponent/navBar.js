import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header className="header">
        <div className="about-me">
          <p className="p-AG">Alexander Grigorenko</p>
          <p className="p-about">Front-end developer</p>
        </div>
         <ul id="headerButtons">
          <li className="navButton">
            <Link to="">Home</Link>
          </li>
           <li className="navButton">
             <Link to="/about">About</Link>
           </li>
           <li className="navButton">
             <Link to="/skills">Skills</Link>
           </li>
           <li className="navButton">
             <Link to="/contacts">Contacts</Link>
           </li>
           <li className="navButton">
             <Link to="/feedback">Feedback</Link>
           </li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
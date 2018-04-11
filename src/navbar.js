import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LINKEDIN_URL = "https://www.linkedin.com/in/angelica-costantini-a627a0a4";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/about">
          <button onClick= {() => console.log("about me")} className="navbutton">About Me</button>
        </Link>
        <Link to="/tictactoe">
          <button onClick= {() => console.log("myproject")} className="navbutton">My Projects</button>
        </Link>        
        <Link to="/contact">
          <button onClick= {() => console.log("contact")} className="navbutton">Contact</button>
        </Link>
        <a href={LINKEDIN_URL} target="_blank">
          <button onClick= {() => console.log("my codes")} className="navbutton">My Linkedin</button>
        </a>
      </div>
    );
  }
}


export default Navbar; 
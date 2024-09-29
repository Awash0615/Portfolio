
/*
Awash Adhikari
301424394
Web Application Development ( Sec.003 )
9/28/2024 (Last Updated)
*/



import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../App.css';


function NavBar() {
  return (
    <nav>
      <div className="logo">
        <h1><img src='logo.jpg' alt='My Portfolio'></img></h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;

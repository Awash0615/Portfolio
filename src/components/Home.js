/*
Awash Adhikari
301424394
Web Application Development ( Sec.003 )
9/28/2024 (Last Updated)
*/




import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>My mission is to leverage my skills in web development to create
         innovative and user-centered solutions that enhance user experiences and drive engagement.
          I am committed to continuous learning and collaboration, striving to make a meaningful
           impact in every project I undertake. This project will mark the beginning of my web developing
           journey and I will try my best to learn as much as possible through this project.</p>
      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
}

export default Home;

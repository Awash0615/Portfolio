/*
Awash Adhikari
301424394
Web Application Development ( Sec.003 )
9/28/2024 (Last Updated)
*/


import React from 'react';
import '../App.css';


function AboutMe() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <img src='mypic.jpg' alt='Awash Adhikari'></img>
      <p>Hello, my name is Awash Adhikari and I am pursuing my dream of becoming a software developer
        at Centennial college. I am 21 years old and this is my first Portfolio project. I have little 
        experience in javascript. I self studied js back when I was curious about it. After learning
        about react, this was my attempt in creating a website using react js. It is far from perfect 
        but I think it turned out decent. Thank You for your time.
      </p>

      <button><a href="My pdf.pdf" download>My Resume</a></button>

      {/* <a href="My pdf.pdf" download>My Resume</a> */}
    </div>
  );
}

export default AboutMe;

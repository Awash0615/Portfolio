/*
Awash Adhikari
301424394
Web Application Development ( Sec.003 )
9/28/2024 (Last Updated)
*/




import React from 'react';
import '../App.css';


function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'I, along with my group created a website for a real estate business company which sells assets.',
      image: 'project1.png'
    },
    {
      title: 'Project 2',
      description: 'I created a centennial login form for my assignment in my second sem.',
      image: 'project2.png'
    },
    {
      title: 'Project 3',
      description: 'I created another website for laptop sales for my assignment. ',
      image: 'project3.png'
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

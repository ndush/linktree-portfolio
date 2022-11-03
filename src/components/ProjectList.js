import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const projects = [
    {
      name: 'React iReporter app',
      github: 'https://github.com/iReporter-Dev-Team/iReporter',
      languages: 'React.js',
      description:
        'report corruption cases and intervention needs',
    },
    
  ];
  return (
    <div className="py-3 d-flex flex-column justify-content-center align-items-center align-content-center">
      <h2 style={{ color: 'white' }}>What I've worked on...</h2>
      <div className="container ">
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              url={project.url}
              name={project.name}
              github={project.github}
              languages={project.languages}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
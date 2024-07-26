import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', imgSrc: 'path-to-image1.jpg', deployUrl: 'http://example.com', repoUrl: 'http://github.com/example' },
    // Add more projects here
  ];

  return (
    <section id="portfolio">
      {projects.map(project => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <img src={project.imgSrc} alt={project.title} />
          <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;

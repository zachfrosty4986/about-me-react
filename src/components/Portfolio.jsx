import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'My Work Portfolio', imgSrc: 'src\assets\portfolio.png', deployUrl: 'https://zachfrosty4986.github.io/My-Work-Porfolio/', repoUrl: 'https://github.com/zachfrosty4986/My-Work-Porfolio' },
    { title: 'My Task Board', imgSrc: 'src\assets\tasks.png', deployUrl: 'https://zachfrosty4986.github.io/My-Task-Board/', repoUrl: 'https://github.com/zachfrosty4986/My-Task-Board' },
    { title: 'Brewsters Brewery finder', imgSrc: 'src\assets\brewsters.png', deployUrl: 'https://zachfrosty4986.github.io/interactive-brewery-map/', repoUrl: 'https://github.com/zachfrosty4986/interactive-brewery-map' },
    { title: 'Prework Study Guide', imgSrc: 'src\assets\prework.png', deployUrl: 'https://zachfrosty4986.github.io/prework-study-guide/', repoUrl: 'https://github.com/zachfrosty4986/prework-study-guide' },
    { title: 'Personal Blog', imgSrc: 'src\assets\blog.png', deployUrl: 'https://zachfrosty4986.github.io/My-Personal-Blog/', repoUrl: 'https://github.com/zachfrosty4986/My-Personal-Blog' },
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

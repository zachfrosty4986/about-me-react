// Import React library to create a functional component
import React from 'react';

// Define the Portfolio functional component
const Portfolio = () => {
  
  // Array of project objects, each containing a title, image source, deployment URL, and GitHub repository URL
  const projects = [
    { 
      title: 'My Work Portfolio', 
      imgSrc: 'src\\assets\\portfolio.png', 
      deployUrl: 'https://zachfrosty4986.github.io/My-Work-Porfolio/', 
      repoUrl: 'https://github.com/zachfrosty4986/My-Work-Porfolio' 
    },
    { 
      title: 'My Task Board', 
      imgSrc: 'src\\assets\\tasks.png', 
      deployUrl: 'https://zachfrosty4986.github.io/My-Task-Board/', 
      repoUrl: 'https://github.com/zachfrosty4986/My-Task-Board' 
    },
    { 
      title: 'Brewsters Brewery Finder', 
      imgSrc: 'src\\assets\\brewsters.png', 
      deployUrl: 'https://zachfrosty4986.github.io/interactive-brewery-map/', 
      repoUrl: 'https://github.com/zachfrosty4986/interactive-brewery-map' 
    },
    { 
      title: 'Prework Study Guide', 
      imgSrc: 'src\\assets\\prework.png', 
      deployUrl: 'https://zachfrosty4986.github.io/prework-study-guide/', 
      repoUrl: 'https://github.com/zachfrosty4986/prework-study-guide' 
    },
    { 
      title: 'Personal Blog', 
      imgSrc: 'src\\assets\\blog.png', 
      deployUrl: 'https://zachfrosty4986.github.io/My-Personal-Blog/', 
      repoUrl: 'https://github.com/zachfrosty4986/My-Personal-Blog' 
    },
  ];

  return (
    // Main section for the portfolio, identified by an ID of "portfolio"
    <section id="portfolio">
      {/* Iterate through the projects array and render each project */}
      {projects.map(project => (
        // Each project is represented by a div, and the key is the project's title (should be unique)
        <div key={project.title}>
          {/* Display the title of the project */}
          <h3>{project.title}</h3>
          
          {/* Display the image of the project with its title as the alt text */}
          <img src={project.imgSrc} alt={project.title} />
          
          {/* Link to the deployed application, opens in a new tab */}
          <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
          
          {/* Link to the GitHub repository, opens in a new tab */}
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      ))}
    </section>
  );
};

// Export the Portfolio component for use in other parts of the application
export default Portfolio;


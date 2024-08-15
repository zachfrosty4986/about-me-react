// Import React library to enable JSX syntax and create components
import React from 'react';

// Define a functional component named Resume
const Resume = () => {
  return (
    // Section element with id of 'resume'
    <section id="resume">
      {/* Hyperlink to a Google Drive file where the resume can be downloaded */}
      <a 
        href="https://drive.google.com/file/d/1bNN8Ede4xNcQp77zDitqp6e_i7aFjbsg/view?usp=sharing" 
        target="_blank" // Ensures the link opens in a new tab
      >
        Download Resume
      </a>
      {/* Unordered list showcasing skill sets */}
      <ul>
        <li>Computer Science and repair</li>
        <li>Full stack application development</li>
      </ul>
    </section>
  );
};

// Export the Resume component as default so it can be used in other parts of the app
export default Resume;

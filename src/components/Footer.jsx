// Importing the React library to create a functional component.
import React from 'react';

// Defining the 'Footer' functional component.
const Footer = () => {
  return (
    // Returning a footer element that contains links to external profiles.
    <footer>
      {/* Link to the user's GitHub profile, opening in a new tab. 
          'rel="noopener noreferrer"' improves security when using target="_blank". */}
      <a href="https://github.com/zachfrosty4986" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>

      {/* Link to the user's LinkedIn profile, opening in a new tab. 
          Same security considerations applied as above. */}
      <a href="https://www.linkedin.com/in/zachary-magras-72311631a/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </footer>
  );
};

// Exporting the 'Footer' component to be used in other parts of the application.
export default Footer;

// Import React library to use JSX and create components
import React from 'react';

// Import NavLink component from react-router-dom for navigation links
import { NavLink } from 'react-router-dom';

// Define the Header functional component
const Header = () => {
  return (
    <header>
      {/* Display the main heading with the name */}
      <h1>Zachary Magras</h1>
      
      {/* Navigation section with NavLink components for different routes */}
      <nav>
        {/* Link to the "About Me" page with activeClassName applied when active */}
        <NavLink exact to="/" activeClassName="active">About Me</NavLink>

        {/* Link to the "Portfolio" page with activeClassName applied when active */}
        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>

        {/* Link to the "Contact" page with activeClassName applied when active */}
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>

        {/* Link to the "Resume" page with activeClassName applied when active */}
        <NavLink to="/resume" activeClassName="active">Resume</NavLink>
      </nav>
    </header>
  );
};

// Export the Header component for use in other parts of the application
export default Header;


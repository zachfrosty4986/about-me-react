// Import the React library to use JSX and create components
import React from 'react';

// Import the Outlet component from react-router-dom to render matched child routes
import { Outlet } from 'react-router-dom';

// Import the Header and Footer components from their respective paths
import Header from './components/Header';
import Footer from './components/Footer';

// Import the main CSS file for the application
import './App.css'

// Define the main App component
const App = () => {
  return (
      // Main wrapper div containing the page structure
      <div>
        {/* Render the Header component at the top */}
        <Header />
        
        {/* Main content section of the page where child routes will be rendered */}
        <main>
          <Outlet /> {/* Outlet renders the current matching route's component */}
        </main>
        
        {/* Render the Footer component at the bottom */}
        <Footer />
      </div>
  );
};

// Export the App component as default so it can be used in other parts of the application
export default App;

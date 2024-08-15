// Import the React library to use JSX and create components
import React from 'react';

// Import ReactDOM for rendering the application
import ReactDOM from 'react-dom/client';

// Import functions and components from react-router-dom for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import the main App component
import App from './App.jsx';

// Import the main CSS file for the application
import './index.css';

// Import individual route components
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

// Create a router with route configuration
const router = createBrowserRouter([
  {
    path: '/', // Base path for the application
    element: <App />, // The root component to render
    children: [
      {
        index: true, // Default child route for the base path
        element: <AboutMe />, // Component to render for the default route
      },
      {
        path: '/portfolio', // Path for the portfolio page
        element: <Portfolio />, // Component to render for the /portfolio route
      },
      {
        path: '/contact', // Path for the contact page
        element: <Contact />, // Component to render for the /contact route
      },
      {
        path: '/resume', // Path for the resume page
        element: <Resume />, // Component to render for the /resume route
      },
    ],
  },
]);

// Render the application to the root element in the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> // Provide the router to the application
);


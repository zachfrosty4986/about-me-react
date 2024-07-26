import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import global CSS styles
import App from './App';

// Render the App component into the root element of the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

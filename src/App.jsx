import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';

const App = () => {
  return (
      <div>
        <Header />
        <main>
          < Outlet />
        </main>
        <Footer />
      </div>
  );
};

export default App;
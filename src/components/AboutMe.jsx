// Importing the React library to use JSX and React components.
import React from 'react';

// Defining a functional component called 'AboutMe'.
const AboutMe = () => {
  return (
    // Creating a section element with the ID 'about-me'.
    <section id="about-me">
      
      {/* Adding an image with the class 'my-photo', linking to a local file, and including alt text for accessibility. */}
      <img className="my-photo" src="./IMG_4508.JPG" alt="Developer Avatar" />

      {/* Adding a paragraph that introduces the user, their background, and their goals in coding and business. */}
      <p>
        Hello! My name is Zachary and I am learning how to code with CSS, HTML, and soon JavaScript! 
        I am currently employed at a local school district as a level 1 IT Technician. I started my 
        own business on social media where I forecast and teach about the weather! Many people refer 
        to me as "Zach Frost". I am learning more code to build applications to expand my business 
        and pursue a career change into the developer field!
      </p>
      
    </section>
  );
};

// Exporting the 'AboutMe' component so it can be imported and used in other files.
export default AboutMe;


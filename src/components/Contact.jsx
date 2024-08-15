// Importing React and the useState hook for managing component state.
import React, { useState } from 'react';

// Defining the 'Contact' functional component.
const Contact = () => {

  // Initializing state to store form data with empty values for 'name', 'email', and 'message'.
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // Initializing state to store error messages for form fields. Default is empty strings for all fields.
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  // Function to validate email format using a regular expression. Returns true if valid, false otherwise.
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Function to handle changes in form inputs. Updates the corresponding form data field dynamically.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle when a form input loses focus (onBlur event). It checks for empty fields and invalid email.
  const handleBlur = (e) => {
    // If the input field is empty, set an error message.
    if (!e.target.value) {
      setErrors({ ...errors, [e.target.name]: 'This field is required' });
    } 
    // If the input is the email field and the email format is invalid, set an error message.
    else if (e.target.name === 'email' && !validateEmail(e.target.value)) {
      setErrors({ ...errors, [e.target.name]: 'Invalid email address' });
    } 
    // Clear the error message if the field is valid.
    else {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  // Function to handle form submission. Currently prevents the default action (e.g., page refresh).
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission will go here, such as sending data to a server.
  };

  // Rendering the contact form.
  return (
    <section id="contact">
      <form onSubmit={handleSubmit}>
        
        {/* Input field for 'Name' with change and blur handlers. Shows error message if validation fails. */}
        <label>Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <span>{errors.name}</span>}
        </label>
        
        {/* Input field for 'Email' with change and blur handlers. Shows error message if validation fails. */}
        <label>Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        
        {/* Text area field for 'Message' with change and blur handlers. Shows error message if validation fails. */}
        <label>Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <span>{errors.message}</span>}
        </label>

        {/* Submit button for the form */}
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

// Exporting the 'Contact' component to be used in other parts of the application.
export default Contact;

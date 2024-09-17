import React from 'react';
import './Contact.css'; // Assuming you have CSS styling in this file

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Feel free to get in touch with me via phone or email!</p>
      </div>

      <div className="contact-details">
        {/* Phone Number */}
        <div className="contact-item">
          <h3>📞 Phone</h3>
          <p>
            <span className="emoji">🔥</span> 9781655489
          </p>
        </div>

        {/* Email */}
        <div className="contact-item">
          <h3>📧 Email</h3>
          <p>
            <span className="emoji">✉️</span> arorauday526@gmail.com
          </p>
        </div>
      </div>

      <footer>
        Made with ❤️ by Uday Arora
      </footer>
    </div>
  );
};

export default Contact;

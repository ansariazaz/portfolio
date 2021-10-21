import React from "react";
import {Link} from "react-router-dom";



function Contact() {
  return (
    <div>
      
      <div className="contact-form">
      <div className="form">
        <div className="name">
          <label>
            <input type="text" placeholder="Your Name" />
          </label>
        </div>
        <div className="email">
          <label>
            <input type="email" placeholder="Your email address" />
          </label>
        </div>
        <div className="message">
          <label>
            <textarea placeholder="Your message"></textarea>
          </label>
        </div>
        <div className="thanks-msg project">
          <Link>Send Message</Link>
          <p>Thank you for your message, we will be in touch in no time!</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;

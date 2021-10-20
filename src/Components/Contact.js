import React from "react";

function Contact() {
  return (
    <div id="contact-form">
      <div className="name">
        <label>
          Name:
          <input type="text" placeholder="Your Name" />
        </label>
      </div>
      <div className="email">
        <label>
          Email:
          <input type="email" placeholder="Your email address" />
        </label>
      </div>
      <div className="message">
        <label>
          Message:
          <textarea placeholder="Your message"></textarea>
        </label>
      </div>
      <div className="thanks-msg">
      <button>Send Message</button>
      <p>Thank you for your message, we will be in touch in no time!</p>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  let message = "Thank you for your message, we will be in touch in no time!";

  return (
    <div className="container3">
      <script type="text/javascript">var submitted = false;</script>
      <iframe
        title="waitlist"
        name="hidden_iframe"
        id="hidden_iframe"
        className="hidden"
        onLoad={() => {
          if (submitted) {
            var form = document.getElementsByClassName("form");
            form[0].classList.add("submitted");
          }
        }}
      ></iframe>
      <form
        className="form"
        action="https://docs.google.com/forms/d/e/1FAIpQLSfEC9da6mf_CZxiuA0PYnZTaktjt-8Wl52E0eAGECIEkchq4g/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={() => {
          setSubmitted(true);
        }}
      >
        {submitted ? (
          <div className="message">{message}</div>
        ) : (
          <div className="contact-form">
            <label>
              <input
                type="text"
                placeholder="Name*"
                name="entry.2005620554"
                required
              />
            </label>
            <label>
              <input
                type="email"
                placeholder="Email address*"
                name="entry.1045781291"
                required
              />
            </label>
            <label>
              <textarea
                placeholder="Message*"
                name="entry.1646254048"
                required
              ></textarea>
            </label>
            <button type="submit" className="btn">Send Message</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;

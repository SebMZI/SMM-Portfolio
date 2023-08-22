import React from "react";

const Contact = () => {
  return (
    <main className="contact">
      <div className="header">
        <div className="contact-title">
          <h1>REACH ME</h1>
          <div className="contact-line"></div>
        </div>
        <p className="contact-subtitle">
          Ask a question, hire me ? This contact form is here for that.
        </p>
      </div>
      <section className="contact-form-container">
        <a href="mailto:mrgy.sebastien@gmail.com" className="btn">
          Contact by mail
        </a>
        <div className="line-container">
          <div className="light-line"></div>
          <p>OR</p>
          <div className="light-line"></div>
        </div>
        <form className="contact-form">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" autoFocus />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input-container">
            <label htmlFor="object">Object</label>
            <input type="text" id="object" />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;

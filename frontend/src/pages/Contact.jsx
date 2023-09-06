import React, { useState } from "react";
import { motion } from "framer-motion";
import variants from "../utils/variants";
import { useSendEmailMutation } from "../features/projects/projectsApiSlice";
import SendConfirmedModal from "../components/Modal/sendConfirmed";

const Contact = () => {
  const [sendEmail, { isLoading }] = useSendEmailMutation();
  const [name, setName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [sendModal, setSendModal] = useState(false);
  const [err, setErr] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailValue || !name || !object || !message) {
      console.log("Please fill every field");
      setErr("Please fill every field!");
      setTimeout(() => {
        setErr("");
      }, 3000);
      return;
    }
    try {
      setPending(true);
      const result = await sendEmail({
        name: name,
        email: emailValue,
        object: object,
        message: message,
      }).then(() => {
        e.target.reset();
        setPending(false);
        setSendModal(true);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.main
      variants={variants}
      initial="out"
      animate="in"
      exit="out"
      className="contact"
    >
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
        {sendModal ? <SendConfirmedModal setSendModal={setSendModal} /> : null}
        <a className="btn" href="mailto:mrgy.sebastien@gmail.com">
          <button>Contact by mail</button>
        </a>
        <div className="line-container">
          <div className="light-line"></div>
          <p>OR</p>
          <div className="light-line"></div>
        </div>
        <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              autoFocus
              autocomplete="address-level4"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              autocomplete="address-level4"
              type="email"
              id="email"
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="object">Object</label>
            <input
              autocomplete="address-level4"
              type="text"
              id="object"
              onChange={(e) => setObject(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea
              autocomplete="address-level4"
              name="message"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="submit-error">{err}</div>
          <button type="submit" className="submit-btn">
            {!pending ? "Send" : <div className="loading"></div>}
          </button>
        </form>
      </section>
    </motion.main>
  );
};

export default Contact;

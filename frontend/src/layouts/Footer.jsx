import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import variants from "../utils/variants";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      variants={variants}
      initial="out"
      animate="in"
      exit="out"
    >
      <div className="footer-talk">
        <h2>Want to have me in your team ?</h2>
        <Link to="/contact">
          <button>Let's get started</button>
        </Link>
      </div>
      <div className="footer-content">
        <div className="footer-text">
          <a href="mailto:mrgy.sebastien@gmail.com">mrgy.sebastien@gmail.com</a>
          <p>© 2023 Sebastian Morazzani, All Rights Reserved.</p>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/sebastien-morazzani/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin icon"></i>
          </a>
          <a href="https://github.com/SebMZI" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-github icon"></i>
          </a>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

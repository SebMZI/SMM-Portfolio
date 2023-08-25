import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="SMM Logo" className="logo" />
      <nav className="nav">
        <ul className="links-container">
          <li>
            <NavHashLink to="/">Home</NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#about"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            >
              About
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#realizations"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            >
              Realizations
            </NavHashLink>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <button>Log out</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

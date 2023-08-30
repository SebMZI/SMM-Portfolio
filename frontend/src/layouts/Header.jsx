import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentToken } from "../features/auth/authSlice";
import Navbar from "../components/Navbar";

const Header = () => {
  const token = useSelector(selectCurrentToken);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="SMM Logo" className="logo" />
      </Link>
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
          {!token ? null : (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <button className="loggout" onClick={() => dispatch(logOut())}>
                Log out
              </button>
            </>
          )}
        </ul>
      </nav>
      <Navbar />
    </header>
  );
};

export default Header;

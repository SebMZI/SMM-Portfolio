import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const menu = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      menu.current.classList.add("slide-in");
      document.body.style.overflow = "hidden";
      setIsOpen(true);
    } else {
      menu.current.classList.remove("slide-in");
      document.body.style.overflow = "visible";
      setIsOpen(false);
    }
  };

  return (
    <div className="menu-burger">
      <button className="burger-icon" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className="burger-menu " ref={menu}>
        <button className="burger-icon burger-close" onClick={toggleMenu}>
          <i className="fa-solid fa-times"></i>
        </button>
        <li onClick={toggleMenu}>
          <NavHashLink to="/">Home</NavHashLink>
        </li>
        <li onClick={toggleMenu}>
          <NavHashLink
            to="/#about"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
          >
            About
          </NavHashLink>
        </li>
        <li onClick={toggleMenu}>
          <NavHashLink
            to="/#realizations"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
          >
            Realizations
          </NavHashLink>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

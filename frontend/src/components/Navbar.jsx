import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const menu = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      menu.current.classList.remove("slide-in");
      menu.current.classList.add("slide-out");
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 1000);
    } else {
      setIsOpen(!isOpen);
      setTimeout(() => {
        menu.current.classList.add("slide-in");
        console.log(menu.current);
      }, 100);
    }
  };

  return (
    <div className="menu-burger">
      <button className="burger-icon" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      {isOpen && (
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
      )}
    </div>
  );
};

export default Navbar;

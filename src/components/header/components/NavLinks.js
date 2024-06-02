import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = ({ isOpen, onToggleMenu }) => {
  const { navLinks, open, active } = styles;

  return (
    <ul className={`${navLinks} ${isOpen ? open : ""}`}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? active : "")}
          onClick={onToggleMenu}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? active : "")}
          onClick={onToggleMenu}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-work"
          className={({ isActive }) => (isActive ? active : "")}
          onClick={onToggleMenu}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? active : "")}
          onClick={onToggleMenu}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

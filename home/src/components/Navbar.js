import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { TbMenuDeep } from "react-icons/tb";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav>
      <div className="logo-section">
        <div>
        <img src={logo} alt="logo" />
        <p>CEDAR INTERIORS</p>
        </div>
        <TbMenuDeep className="menu-icon" onClick={toggleMenu} />
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>PRICINGS</li>
          <li>PORTFOLIO</li>
        </ul>
      </div>
      <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
        <div className="contact">
          <p>CONTACT US</p>
          <FontAwesomeIcon icon={faChevronRight} className="contact-arrow"/>
        </div>
        <div className="quote">
          <p>GET QUOTATION</p>
          <FontAwesomeIcon icon={faChevronRight} className="quote-arrow"/>
        </div>
      </div>
    </nav>
  );
};

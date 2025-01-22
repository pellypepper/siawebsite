

import React, { useState } from "react";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggle() {
    setMenuOpen((prev) => !prev);
  }

  function handleClose() {
    setMenuOpen(false);
  }

  return (
    <section className="nav-wrapper">

      <button onClick={handleToggle} className="menu-toggle">
        <FontAwesomeIcon icon={faBars} className="icon-1" />
      </button>


      <nav className={menuOpen ? "menu open" : "menu"}>
        <ul>

          <li>
            <button onClick={handleClose} className="menu-close">
              <FontAwesomeIcon icon={faTimes} id="icon" />
            </button>
          </li>
          <li><Link to='/'>HOME</Link></li>
         
              
                    <p></p>
                    <li><Link to='/contact'>CONTACT</Link></li>
                    <p></p>
                    <li><Link to='/career'>CAREER</Link></li>
                    <p></p>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <p></p>
                    <li><Link to='/new'>NEWS</Link></li>
        </ul>
      </nav>
    </section>
  );
}

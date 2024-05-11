import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div className="logo-container">
        <Link to="/" className="logo">Fabulous 10 Nails</Link>
      </div>
      <ul>
        <li>
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
          >
            Service Menu
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
          >
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
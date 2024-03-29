import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className="navbar navbar-dark bg-dark sticky-top navbar-expand-lg"
      style={{ paddingLeft: '20px' }}
    >
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="navbar-brand" to="/Movies">
              Movies
            </Link>
          </li>

          <li className="nav-item">
            <Link className="navbar-brand" to="/Podcasts">
              Podcasts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

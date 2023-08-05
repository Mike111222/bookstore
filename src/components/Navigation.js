import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navBar navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h2 className="navTitle navbar-brand">Bookstore CMS</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navLinks navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-5">
              <Link to="/">Books</Link>
            </li>
            <li className="nav-item">
              <Link to="categories">Categories</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <img className="d-none d-md-none d-lg-block" src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/32/000000/external-avatar-interface-anggara-outline-color-anggara-putra.png" alt="profile" />
          </span>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;

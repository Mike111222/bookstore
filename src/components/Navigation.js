import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('books'); // 'books' is the default active link

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navBar">
      <div className="navItems">
        <h2 className="navTitle">Bookstore CMS</h2>
        <ul className="navLinks">
          <li>
            <Link
              to="/"
              className={activeLink === 'books' ? 'active' : ''}
              onClick={() => handleNavLinkClick('books')}
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="categories"
              className={activeLink === 'categories' ? 'active' : ''}
              onClick={() => handleNavLinkClick('categories')}
            >
              Categories
            </Link>
          </li>
        </ul>
      </div>
      <img src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/32/000000/external-avatar-interface-anggara-outline-color-anggara-putra.png" alt="profile" />
    </nav>
  );
};

export default Navbar;

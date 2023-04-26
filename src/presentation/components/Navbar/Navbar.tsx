import React from 'react';
import './navbar.css';
import plane from '../../assets/plane.svg';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <a href="/" className="navbar-logo">
        <img src={plane} className="navbar-image" alt="plane" />
        <span id="logo">TARSTACK</span>
      </a>
    </header>
  );
};

export default Navbar;

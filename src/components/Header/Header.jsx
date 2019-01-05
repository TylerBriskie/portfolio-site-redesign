import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="site-header">
      <h2>Tyler Briskie</h2>
      <div className="nav-button-container">
        <button>Software</button>
        <button>Music</button>
        <button>Graphic Design</button>
        <button>Arcade</button>
      </div>
    </header>
  );
};

export default Header;

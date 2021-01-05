import React from 'react';
import './Navigation.css';

function Navigation() {


  return (
    <nav className="navbar">
      <p className="navbar__logo">NewsExplorer</p>
      <button 
        type="button"
        className="navbar__hamburger"
      ></button>

    </nav>
  );
}

export default Navigation;
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [click, setClick] = useState(true);

  const toggleMobileMenu = () => {
    setClick(!click);
  };
 
  return (
   <> 
    <nav className={`navbar ${click ? '' : 'navbar__mobile'}`}>
      {/* <div className={`navbar__overlay ${click ? '' : 'navbar__overlay-menu'}`}> */}
        <NavLink to="/" className="navbar__logo">NewsExplorer</NavLink>
        <button 
          className={`navbar__mobile-menu ${click ? 'navbar__icon-open' : 'navbar__icon-close'}`} 
          onClick={toggleMobileMenu}
          type="button" />
      {/* </div> */}
      <div className={`navbar__menu ${click ? 'navbar__menu-hidden' : 'navbar__menu-open'}`}>
        <NavLink to="/Home" className="navbar__menu-item">Home</NavLink>
        <button className="navbar__menu-button" type="button">Sign in</button>
      </div>
     
    </nav>
   </> 
  );
}

export default Navigation;
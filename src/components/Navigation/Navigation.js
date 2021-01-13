import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [mobile, SetMobile] = useState(window.innerWidth < 701);
  const [click, setClick] = useState(true);

  const updateMedia = () => {
    SetMobile(window.innerWidth < 701);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }); 

  const toggleMobileMenu = () => {
    setClick(!click);
  };
 
  return (
  
    <nav className={`navbar ${click ? '' : 'navbar__mobile'}`}>
      <NavLink to="/" className="navbar__logo">NewsExplorer</NavLink>
      {mobile ? (
       <>
        <button 
          className={`navbar__mobile-menu ${click ? 'navbar__icon-open' : 'navbar__icon-close'}`} 
          onClick={toggleMobileMenu}
          type="button" />
        <div className={`navbar__overlay ${click ? '' : 'navbar__overlay_active'}`}></div>
        <div className={`navbar__menu ${click ? '' : 'navbar__menu_open'}`}>
           <NavLink to="/Home" className="navbar__menu-item">Home</NavLink>
           <button className="navbar__menu-button" type="button">Sign in</button>
         </div>
       </>
      ) : (
        <>
          <div className={`navbar__menu ${click ? 'navbar__menu-hidden' : 'navbar__menu-open'}`}>
            <NavLink to="/Home" className="navbar__menu-item">Home</NavLink>
            <button className="navbar__menu-button" type="button">Sign in</button>
          </div>
       </>
      )}
    </nav>

  );
}

export default Navigation;
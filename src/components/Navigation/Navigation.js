import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logout from '../../images/logout.svg';

function Navigation({ isSavedNews, loggedIn, onSigninClick }) {
  const [mobile, setMobile] = useState(window.innerWidth < 701);
  const [click, setClick] = useState(true);
  // const [isOpenSigninOpen, setIsSigninOpen] = useState(false);

  const updateMedia = () => {
    setMobile(window.innerWidth < 701);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }); 

  const toggleMobileMenu = () => {
    setClick(!click);
  };

  const mobileMenuClick = () => {
    onSigninClick();
    toggleMobileMenu();
  }
 
  return (
    <nav className={`navbar ${click ? '' : 'navbar__mobile'}`}>
      <NavLink to="/" className={`navbar__logo ${(isSavedNews && click) ? "navbar__logo_saved" : ""}`}>NewsExplorer</NavLink>
      {mobile ? (
       <> 
     
          <button 
            className={`navbar__mobile-menu ${click ? (isSavedNews ? 'navbar__icon-open_saved' : 'navbar__icon-open') : 'navbar__icon-close'}`} 
            onClick={toggleMobileMenu}
            type="button" 
          />
        
        <div className={`navbar__overlay ${click ? '' : 'navbar__overlay_active'}`}></div>
        <div className={`navbar__menu ${click ? '' : 'navbar__menu_open'}`}>
          <NavLink 
            to="/" 
            className={`navbar__menu-item ${isSavedNews ? "navbar__menu-item_saved" : ""}`} 
          >
            Home
          </NavLink>
          {loggedIn && 
            <NavLink 
              to="/saved-news" 
              className={`navbar__menu-item ${isSavedNews ? "navbar__menu-item_saved" : ""}`}
            >  
                Saved Articles
            </NavLink>
          }
          {loggedIn ?
            <button className="navbar__menu-button" type="button">Logout</button>
           :
            <button className='navbar__menu-button' type="button" onClick={mobileMenuClick}>Sign in</button>
          }
         </div>
       </>
      ) : (
        <>
          <div className={`navbar__menu ${click ? '' : 'navbar__menu-open'}`}>
            <NavLink 
              to="/home" 
              activeClassName={`navbar__menu-item_active ${isSavedNews ? 'navbar__menu-item_saved_active' : ''}`}
              className={`navbar__menu-item ${isSavedNews ? "navbar__menu-item_saved" : ""}`}
            >
              Home
              </NavLink>
              {loggedIn && 
              <NavLink 
                to="/saved-news" 
                activeClassName={`navbar__menu-item_active ${isSavedNews ? 'navbar__menu-item_saved_active' : ''}`}
                className={`navbar__menu-item navbar__menu-item_loggedin ${isSavedNews ? "navbar__menu-item_saved" : ""}`}>
                  Saved Articles
              </NavLink>
            }
            {loggedIn ?
              <button 
                className={`navbar__menu-button navbar__menu-button_loggedin ${isSavedNews ? "navbar__menu-button_saved" : ""}`} 
                type="button">Jayme
                  <img className={`navbar__logout ${isSavedNews ? "navbar__logout_saved" : ""}`} 
              />
              </button>
            :
              <button className="navbar__menu-button" type="button" onClick={onSigninClick}>Sign in</button>
            }
          </div>
       </>
      )}
    </nav>

  );
}

export default Navigation;
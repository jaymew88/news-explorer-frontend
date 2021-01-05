import React from 'react';
import './Navigation.css';

function Navigation(props) {


  return (
   <> 
     {/* Mobile View */}
    <nav className="navbar">
      <p className="navbar__logo">NewsExplorer</p>
      <button className="navbar__mobile" />
      
      <ul className="navbar__links">
        <li className="navbar__home">Home</li>
        <li className="navbar__signin">Sign in</li>
      </ul>
    </nav>

    {/* Tablet/Desktop View 
    <nav className="navbar">
      <div className="navbar__mobile-panel">
        <p className="navbar__logo">NewsExplorer</p>
       
      </div>
      <ul className="navbar__links">
        <li className="navbar__options">Home</li>
        <li className="navbar__options">Sign in</li>
      </ul>

    </nav> */}
   </> 
  );
}

export default Navigation;
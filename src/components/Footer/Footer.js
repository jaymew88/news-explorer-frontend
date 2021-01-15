import React from 'react';
import './Footer.css';
// import facebook from '../../images/facebook.svg';
// import github from '../../images/github.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">&copy; 2020 Supersite, Powered by News API</p>
      <nav className="footer__links">
        <ul className="footer__links-yandex">
          <li className="footer__list-item">Home</li>
          <li className="footer__list-item">Practicum by Yandex</li>
        </ul>
        <ul className="footer__links-social">
          <li><a className="footer__list-item footer__list-icon" href="#" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
          <li><a className="footer__list-item footer__list-icon" href="#" target="_blank"><i class="fab fa-github"></i></a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;

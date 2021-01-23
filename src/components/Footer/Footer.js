import React from 'react';
import './Footer.css';
import facebook from '../../images/facebook.svg';
import github from '../../images/github.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">&copy; 2020 Supersite, Powered by News API</p>
      <nav className="footer__links">
        <ul className="footer__links-yandex">
          <li className="footer__list-item">Home</li>
          <li><a className="footer__list-item" href="https://practicum.yandex.com/" target="_blank">Practicum by Yandex</a></li>
        </ul>
        <ul className="footer__links-social">
          <li><a className="footer__list-item footer__list-icon" href="https://www.facebook.com/YPracticum" target="_blank"><img className="" src={facebook} /></a></li>
          <li><a className="footer__list-item footer__list-icon" href="https://github.com/jaymew88" target="_blank"><img className="" src={github} /></a></li>
        </ul>
      </nav>
    </footer>  
  )
}

export default Footer;

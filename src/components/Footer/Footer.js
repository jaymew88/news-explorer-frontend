import React from 'react';
import './Footer.css';
import facebook from '../../images/facebook.svg';
import github from '../../images/github.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">&copy; 2020 Supersite, Powered by News API</p>
      <div className="footer__column">
        <ul className="footer__content footer__content_links">
          <li className="footer__list-item">Home</li>
          <li className="footer__list-item">Practicum by Yandex</li>
        </ul>
        <ul className="footer__content footer__content_social">
          <li><a className="footer__list-icon" src={github} href="#" target="_blank" /></li>
          <li><a className="footer__list-icon" src={facebook} href="#" target="_blank" /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;

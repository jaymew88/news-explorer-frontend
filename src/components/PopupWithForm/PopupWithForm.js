import React from 'react';
import { Link } from 'react-router-dom';
import './PopupWithForm.css';

function PopupWithForm({ isOpen, onClose, onSubmit, name, title, submitButtonText, isActive, formSwitch, formSwitchText, children }) {
  const isOpenClass = isOpen ? "popup_opened" : "";

  return (
    <section className={`popup ${isOpenClass}`}>
      <div className={`popup__container popup__container_${name}`}>
      <button 
        type="button" 
        className="popup__close-btn" 
        onClick={onClose} 
      />
        <form 
          className={`form form_${name}`} 
          action="#" 
          onSubmit={onSubmit}
          noValidate 
        >
          <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
          {children}
          <button className={`form__submit-btn form__submit-btn_${name} ${isActive ? '' : 'form__submit-btn_inactive'}`} type="submit">
            {submitButtonText}
          </button>
          <p className={`form__switch form__switch_${name}`}>or&nbsp; 
            <Link 
              to="#" 
              className="form__switch-link" 
              onClick={formSwitch}
            >
              {formSwitchText}
            </Link>
          </p>
        </form> 
      </div>
    </section> 
  );
}

export default PopupWithForm;

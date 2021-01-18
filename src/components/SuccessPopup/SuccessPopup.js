import React from 'react';
import './SuccessPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SuccessPopup({ isOpen, onClose, onSubmit, onSigninClick }) {
  return (
   <PopupWithForm 
    name="success"
    title="Registration successfully completed!"
    isOpen={isOpen}
    onClose={onClose}
    isActive={true}
    formSwitch={onSigninClick}
    onSubmit={onSubmit}
    submitButtonText='Sign in'
    >
   </PopupWithForm>
  )
}

export default SuccessPopup;

import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './SigninForm.css';

function SigninForm({ isOpen, onClose }) {
  return (
    <PopupWithForm 
      name="signin" 
      title="Sign in"
      submitButtonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      formSwitchText='Sign up'
    >
      <label className="form__label">
        <p className="form__label-name">Email</p>
        <input 
          className="form__field form__field_email"
          name="email-input"
          type="text"
          title="email"
          placeholder="Enter email"
          required
        />
        <p className="form__label-error"></p>
      </label>
      <label className="form__label">
      <p className="form__label-name">Password</p>
        <input 
          className="form__field form__field_password"
          name="email-password"
          type="text"
          title="password"
          placeholder="Enter password"
          required
        />
        <p className="form__label-error"></p>
      </label>
    </PopupWithForm>
  )
}

export default SigninForm;

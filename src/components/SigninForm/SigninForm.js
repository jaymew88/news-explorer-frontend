import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './SigninForm.css';

function SigninForm({ isOpen, onClose, onSubmit, onSignupClick }) {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const [isActive, setIsActive] = useState(false);
  const [emailError, setEmailError] = useState(true);
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordError, setPasswordError] = useState(true);
  const [passwordMessage, setPasswordMessage] = useState('');

  function emailValidity(e) {
    if (!e.target.validity.valid) {
      setEmailMessage(e.target.validationMessage);
      setEmailError(true);
    } else {
      setEmailMessage('');
      setEmailError(false);
    }
    setIsActive(!emailError && !passwordError);
  }

  function passwordValidity(e) {
    if (!e.target.validity.valid) {
      setPasswordMessage(e.target.validationMessage);
      setPasswordError(true);
    } else {
      setPasswordMessage('');
      setPasswordError(false);
    }
    setIsActive(!emailError && !passwordError);
  }

  return (
    <PopupWithForm 
      name="signin" 
      title="Sign in"
      submitButtonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      formSwitch={onSignupClick}
      isActive={isActive}
      formSwitchText='Sign up'
    >
      <label className="form__label">
        <p className="form__label-name">Email</p>
        <input 
          className="form__field form__field_email"
          ref={emailRef}
          onInput={emailValidity}
          name="email-input"
          type="email"
          title="email"
          placeholder="Enter email"
          required
        />
        <p className={`form__label-error ${emailError ? 'form__label-error_active' : ''}`}>{emailMessage}</p>
      </label>
      <label className="form__label">
      <p className="form__label-name">Password</p>
        <input 
          className="form__field form__field_password"
          ref={passwordRef}
          onInput={passwordValidity}
          name="email-password"
          type="text"
          title="password"
          placeholder="Enter password"
          required
        />
        <p className={`form__label-error ${passwordError ? 'form__label-error_active' : ''}`}>{passwordMessage}</p>
      </label>
    </PopupWithForm>
  )
}

export default SigninForm;

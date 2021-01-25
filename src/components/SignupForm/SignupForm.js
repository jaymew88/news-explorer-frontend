import React, { useState }from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignupForm({ isOpen, onClose, onSubmit, onSigninClick }) {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const usernameRef = React.useRef();

  const [isActive, setIsActive] = useState(false);
  const [emailError, setEmailError] = useState(true);
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordError, setPasswordError] = useState(true);
  const [passwordMessage, setPasswordMessage] = useState('');
  const [usernameError, setUsernameError] = useState(true);
  const [usernameMessage, setUsernameMessage] = useState('')

  function emailValidity(e) {
    if (!e.target.validity.valid) {
      setEmailMessage(e.target.validationMessage);
      setEmailError(true);
    } else {
      setEmailMessage('');
      setEmailError(false);
    }
    setIsActive(!emailError && !passwordError && !usernameError);
  }

  function passwordValidity(e) {
    if (!e.target.validity.valid) {
      setPasswordMessage(e.target.validationMessage);
      setPasswordError(true);
    } else {
      setPasswordMessage('');
      setPasswordError(false);
    }
    setIsActive(!emailError && !passwordError && !usernameError);
  }

  function usernameValidity(e) {
    if (!e.target.validity.valid) {
      setUsernameMessage(e.target.validationMessage);
      setUsernameError(true);
    } else {
      setUsernameMessage('');
      setUsernameError(false);
    }
    setIsActive(!emailError && !passwordError && !usernameError);
  }

  return (
    <PopupWithForm 
      name="signup" 
      title="Sign up"
      submitButtonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      isActive={isActive}
      formSwitch={onSigninClick}
      formSwitchText='Sign in'
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
      <label className="form__label">
        <p className="form__label-name">Username</p>
        <input 
          className="form__field form__field_username"
          ref={usernameRef}
          onInput={usernameValidity}
          name="username-input"
          type="text"
          title="username"
          placeholder="Enter your username"
          required
        />
        <p className={`form__label-error ${usernameError ? 'form__label-error_active' : ''}`}>{usernameMessage}</p>
      </label>
    </PopupWithForm>
  )
}

export default SignupForm;

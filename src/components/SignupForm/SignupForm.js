import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignupForm({ isOpen }) {
  return (
    <PopupWithForm 
      name="signup" 
      title="Sign up"
      submitButtonText="Sign up"
      isOpen={isOpen}
      
    >

    </PopupWithForm>
  )
}

export default SignupForm;

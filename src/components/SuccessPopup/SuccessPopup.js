import React from 'react'

function SuccessPopup() {
  return (
    <PopupWithForm 
    name="signup" 
    title="Sign up"
    submitButtonText="Sign in"
    isOpen={props.isOpen}
  >

  </PopupWithForm>
  )
}

export default SuccessPopup

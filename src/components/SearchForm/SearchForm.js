import React from 'react';
import './SearchForm.css';
import '../App/App.css';

function SearchForm() {

  return (
    <>
      <form 
      className="search-form" 
      action="#" 
      name="search-form" 
    // onSubmit={props.onSubmit}
      noValidate 
    >
      <input 
        className="search-form__input" 
        name="search-form"
        type="text"
        title="search-form"
        placeholder="Search"
        minLength={2}
        maxLength={40}
        required
      />
      <button className="search-form__submit-btn" type="submit">Search</button>
    </form>
  </>
  );
}

export default SearchForm;
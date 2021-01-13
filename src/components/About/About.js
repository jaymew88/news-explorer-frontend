import React from 'react';
import './About.css';
import authorPic from '../../images/author.jpg'

function About () {

  return (
   <>
    <section className="about">
      <img className="about__pic" src={authorPic} alt="author" />
      <div className="about__info">
        <h1 className="about__title">About the author</h1>
        <p className="about__text">I will add to this later. But just typing enough to make it look good. Blah, blah, balh. I can not wait until the weekend.</p>
        <p className="about__text">Here is another paragraph I will make up later. I have nothing to write and will update when I have something I want to add to this section.</p>
      </div>
    </section>
   </>
  );
}

export default About;

import React, { useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gkhfv4t', 
        'template_6pw7g72', 
        form.current, {
        publicKey: 'o-1jUdvD9M3tpNLJa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input"
              placeholder='Insert your name' name="user_name" />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input"
              placeholder='Insert your email' name="user_email"/>
            </div>
          </div>

            <div className="contact__form-div">
              <input type="text" className="contact__form-input"
              placeholder='Insert your subject' name="user_subject"/>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea 
              name="message" 
              id="" 
              cols="30" 
              rows="10"
              className='contact__form-input'
              placeholder='Write your message'
              ></textarea>
            </div>

            <input type='submit' className="btn" value="Send"/>
        </form>
      </div>
    </section>
  )
}

export default Contact
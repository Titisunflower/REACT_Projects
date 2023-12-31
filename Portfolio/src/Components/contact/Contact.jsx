import React from 'react'
import './contact.css'
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zz0hgl7', 'template_1rzvaz5', form.current, 'Y2zd1v8YMEkv19u-j')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <IoMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>henuwz@gmail.com</h5>
            <a href='mailto:henuwz@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiInstagramFill className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5></h5>
            <a href='https://www.instagram.com/_____titiiiiii?igshid=YzVkODRmOTdmMw%3D%3D&utm_source=qr' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+250737243303</h5>
            <a href="https://api.whatsapp.com/send?phone=250780368567" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

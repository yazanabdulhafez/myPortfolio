import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ttb3ws2', 'template_269rurl', form.current, '9vIJwa5tM1YEYYOFP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
<h5>Get In Touch</h5>
<h2>Contact Me</h2>

<div className="container contact_container">
  <div className="contact_options">

<article className="contact-option">
  <MdOutlineEmail className='contact_option-icon'/>
  <h4>Email</h4>
  <h5>al.a.yazan1994@gmail.com</h5>
<a href='mailto:al.a.yazan1994@gmail.com' target='_blank' rel='noreferrer'>Send A Message</a>
</article>

<article className="contact-option">
  <RiMessengerLine className='contact_option-icon'/>
  <h4>Messenger</h4>
  <h5>Yazan Alkharabsheh</h5>
<a href='https://m.me/yazan.alkharsbsheh/' target='_blank' rel='noreferrer'>Send A Message</a>
</article>

<article className="contact-option">
  <BsWhatsapp className='contact_option-icon'/>
  <h4>WhatsAPP</h4>
  <h5>+962785834251</h5>
<a href='https://api.whatsapp.com/send?phone+962785834251' target='_blank' rel='noreferrer'>Send A Message</a>
</article>

  </div>
  {/* END OF CONTACT OPTIONS */}

<form ref={form} onSubmit={sendEmail}>
  <input type="text" name="name" placeholder="Your Full Name"  required/>
  <input type="email" name="email" placeholder="Your Email"  required/>
<textarea name="message"   rows="7" placeholder="Your Message" required/>
<button type='submit' className='btn btn-primary'>Send Message</button>

</form>

</div>
    </section>
  )
}

export default Contact
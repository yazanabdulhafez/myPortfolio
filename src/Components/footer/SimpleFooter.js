import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './simpleFooter.css'

const SimpleFooter = () => {
  return (
    <footer>
      <a href="#f" className='footer_logo'>Portfolio</a>
    <ul className='permaLinks'>
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#testimonials">Testimonials</a></li>
<li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href='https://facebook.com'><FaFacebookF /></a>
      <a href='https://instgram.com'><FiInstagram /></a>
      <a href='https://twitter.com'><IoLogoTwitter /></a>
    </div>

    <div className="footer_copyright">
      <small>
        &copy;2022
        All Rights Reserved 
      </small>
    </div>
      </footer>
  )
}

export default SimpleFooter
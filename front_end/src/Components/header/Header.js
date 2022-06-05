import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../Assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Yazan Alkharabsheh</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
      
       <CTA />
       <HeaderSocials />

       <div className="me">
        <img src={Me} alt="yazan" className='img_me'/>
       </div>

       <a href='#contact' className='scroll_down'>Scroll Down</a>
       
      </div>
    </header>
  )
}

export default Header
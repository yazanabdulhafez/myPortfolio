import React,{useState} from 'react'
import './navBar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdOutlineContactPage} from 'react-icons/md'

const NavBar = () => {
  const[activeNav,setActiveNav]= useState('#');
  return (
    <nav>
      
     <a href="#home" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active': ''} title='Home'><AiOutlineHome /></a> 
     <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}  title='About'><AiOutlineUser /></a> 
     <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}  title='Experience'><BiBook /></a> 
     <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}  title='Services'><RiServiceLine /></a> 
     <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}  title='Portfolio'><MdOutlineContactPage /></a> 
     <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}  title='Contact'><BiMessageSquareDetail /></a> 

    </nav>
  )
}

export default NavBar
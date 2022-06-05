import React from 'react'
import './about.css'
import Me from '../../Assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'



const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About Pic" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Entry Level</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>none</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>+8 projects</small>
            </article>
          </div>
        

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eveniet, obcaecati rerum animi architecto ratione autem modi
          deleniti asperiores et expedita exercitationem alias commodi
          harum eius ducimus quam non laboriosam dolorem.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>

    </section>
  )
}

export default About
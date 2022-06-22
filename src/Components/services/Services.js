import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {


  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>UI design</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>UX design</p>
            </li>
            {/* <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li> */}

          </ul>

        </article>
        {/* End Of UI/UX Part */}

        <article className="service">
          <div className="service_head">
            <h3>DataBase</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>connect with mongo db</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>connect with postgres db</p>
            </li>

            {/* <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li> */}

          </ul>

        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>front end</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>back end</p>
            </li>

            {/* <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li> */}

          </ul>

        </article>
      </div>
    </section >
  )
}

export default Services


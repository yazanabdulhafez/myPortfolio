import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

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
  </li>

</ul>

  </article>
  {/* End Of UI/UX Part */}

  <article className="service">
<div className="service_head">
  <h3>Backend</h3>
</div>

<ul className="service_list">
  <li>
    <BiCheck className='service_list-icon' />
  <p>build API's</p>
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
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

</ul>

  </article>

  <article className="service">
<div className="service_head">
  <h3>Web Development</h3>
</div>

<ul className="service_list">
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
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

  <li>
    <BiCheck className='service_list-icon' />
  <p>Lorem ipsum dolor sit amet.</p>
  </li>

</ul>

  </article>
</div>
    </section >
  )
}

export default Services 


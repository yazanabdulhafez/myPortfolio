import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>


      <div className="container experience_container">
        <div className="experience_frontend">
          
          <h3>Frontend Development</h3>
          <div className="experience_content">

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
           </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
           </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
           </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>ReactJs</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
           </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Jquery</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
           </article>

          </div>

        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
          </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>SpringBoot</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
           </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
             </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Postgres</h4>
              <small className='text-light'>Experienced</small>
            
              </div>
          </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div><h4>DynamoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Experience
import React from 'react'
import './portfolio.css'
import Project1 from '../../Assets/project1.png'
import Project2 from '../../Assets/project2.png'
import Project3 from '../../Assets/project3.png'
import Project4 from '../../Assets/project4.png'
import Project5 from '../../Assets/project5.png'
import Project6 from '../../Assets/project6.png'
import Project7 from '../../Assets/project7.png'
import Project8 from '../../Assets/project8.png'
const Portfolio = () => {

  const data = [
  { id: "1", image:Project1, title: "Donation=Life", github: "https://github.com/Java-Geeks401/DonationLife2", demo: "https://donationequallife.herokuapp.com/#whatwedo2" },
  { id: "2", image:Project2, title: "Pet Service Center", github: "https://github.com/Pet-service-center/pets-care-center", demo: "https://pet-service-center.github.io/pets-care-center/" },
  { id: "3", image:Project3, title: "City Explorer", github: "https://github.com/yazanabdulhafez/city-explorer", demo: "https://suspicious-brahmagupta-dd99c3.netlify.app/" },
  { id: "4", image:Project4, title: "Cookie Stand", github: "https://github.com/yazanabdulhafez/cookie-stand", demo: "https://yazanabdulhafez.github.io/cookie-stand/" },
  { id: "5", image:Project5, title: "Horned Beasts", github: "https://github.com/yazanabdulhafez/HornedBeasts", demo: "https://blissful-allen-bd06f2.netlify.app/" },
  { id: "6", image:Project6, title: "NutriRes", github: "https://github.com/CRA-Geeks", demo: "https://nutrirec.netlify.app/" },
  { id: "7", image:Project7, title: "Bus Mall", github: "https://github.com/yazanabdulhafez/bus-mall", demo: "https://yazanabdulhafez.github.io/bus-mall/" },
  { id: "8", image:Project8, title: "Can Of Books", github: "https://github.com/yazanabdulhafez/can-of-books-frontend", demo: "https://trusting-colden-84ef43.netlify.app/" }
  ];

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>
                  {title}
                </h3>
                <div className="portfolio_item-cta">

                  <a href={github} className='btn' target="_blank" rel='noreferrer'>github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel='noreferrer'>live demo</a>

                </div>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Portfolio
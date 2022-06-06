import React, { Component } from 'react';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Education from './Components/Education';
import Header from './Components/header/Header';
import Projects from './Components/Projects';
import Contact from './Components/contact/Contact';
import About from './Components/about/About';
import NavBar from './Components/nav/NavBar';
import Experience from './Components/experience/Experience'
import Services from './Components/services/Services'
import Portfolio from './Components/portfolio/Portfolio'
import Testimonials from './Components/testimonials/Testimonials'
import SimpleFooter from './Components/footer/SimpleFooter';



export class App extends Component {
  render() {
    return (
      <>
<Header />
<NavBar />
<About />
<Experience />
<Services />
<Portfolio />
<Testimonials />
<Contact />
<SimpleFooter />


      
        {/* <Header />
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Education' element={<Education />} />
            <Route exact path='/Projects' element={<Projects />} />
            <Route exact path='/Contact' element={<Contact />} />
          </Routes>
        </Router> */}


      </>
    )
  }
}

export default App;
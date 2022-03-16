import React, { Component } from 'react';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Education from './Components/Education';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Education' element={<Education />} />
            <Route exact path='/Projects' element={<Projects />} />
            <Route exact path='/Contact' element={<Contact />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;

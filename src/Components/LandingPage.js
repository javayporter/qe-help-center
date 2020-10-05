import React, { Component } from 'react';
// import {Grid, Cell, Button} from 'react-mdl';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './LandingPage.css';
import Footer from './Footer';


class LandingPage extends Component {
    render () {
        return (

            
            <div style ={{width: '100%', margin: 'auto'}}>

<Jumbotron className="spacing">
  <h1>Welcome, User!</h1>
  <p>
    Welcome to the QE Help Center! Here you'll find application setup guides, testing resources and much more. Click the icon to review the tool tips.
  </p>

  <Carousel className="float">
        <Carousel.Item>
    <img
      className="d-block carousel-images"
      src="https://cdn.iconscout.com/icon/free/png-256/office-computer-screen-desktop-graph-chart-statics-12447.png"
      alt="qe reporting icon"
      height="400"
    />
    <Carousel.Caption>
      <h3>QE Reporting</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-images"
      src="https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png"
      alt="coding resources icon"
      height="400"
    />

    <Carousel.Caption>
      <h3>Coding Resources</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-images"
      src="https://www.iconfinder.com/data/icons/learning-and-education-1/200/02-512.png"
      alt="certification-trainings"
      height="400"
      width="50"
      
    />

    <Carousel.Caption>
      <h3 className="gray-text">Certification/Trainings</h3>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
</Jumbotron>    



 

               
            {/* <Grid className="landing-grid">
                <Cell col={12}>
             <h1>Landing Page</h1>
            
             <p>This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward. This is a test to see if the page will continue to load downward.</p>
                 </Cell>
             </Grid> */}
             <Footer/>
             </div>
        )
    }
}

export default LandingPage;

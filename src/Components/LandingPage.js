import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './LandingPage.css';

// Consts //
const welcomeUser = "Welcome User,";
const welcomeMessage = "Welcome to the QE Help Center! Here you'll find application setup guides, testing resources and much more. Click the icon to review the tool tips.";



class LandingPage extends Component {
    render () {
        return (

<div style ={{width: '100%', margin: 'auto'}}>

{/* Welcome Jumbotron */} 
<Jumbotron className="spacing">

{/* Grid contains 2 cells that store/display the welcome message and carousel */}
<Grid>
  <Cell col={4}>
    <h1>{welcomeUser}</h1>
    <p>{welcomeMessage}</p>
  </Cell>
  <Cell col={8}>
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
      <h3 className="gray-text">Trainings</h3>
    
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  </Cell>
</Grid> 
</Jumbotron>
  

</div>
        )
    }
}

export default LandingPage;

import React from "react";
import NavSignInForm from "../../components/NavSignInForm";
import { Row, Col, Grid } from 'react-bootstrap';
import SignUpForm from "../../components/SignUpForm"
import "./LandingPage.css"
import { DefaultPlayer as Video } from 'react-html5video';
import { Link } from "react-router-dom";



const LandingPage = () => (
      <div>
        <Video autoPlay loop muted
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          poster="http://sourceposter.jpg"
          onCanPlayThrough={() => {
            // Do stuff
            }}
            className="video-container filter fillWidth"
        >
          <source src="./coffeeshop.mp4" type="video/mp4" />
          {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
        </Video>
        <NavSignInForm />
        <Grid fluid>
          <Row>
            <Col md={6}>
              <div className = "searchHeadline">
                <h1>Engage Locally</h1>
              </div>
                <div className = "searchDetails">
                  <div>
                    <h3><i className="fas fa-building"></i>Find Local Businesses</h3>
                    <h3><i className="fas fa-hands-helping"></i>Connect With Your Community</h3>
                    <h3><i className="fas fa-cart-arrow-down"></i>Support Your Local Economy</h3>
                    <h3><i className="fas fa-tag"></i>Do Business With Your Neighbor</h3>
                    <h3><i className="fas fa-calendar-alt"></i>Locate Local Events, Sales, and Promotions</h3>
                    <h3><i className="fas fa-address-book"></i>Collaborate and Meet New People</h3>
                  </div>
                 
                  <div style={{marginTop: 40}}>
                    <h3> Search Today </h3>  
                    <Link to={"/search-results"}><i class="fas fa-arrow-circle-right fa-3x"></i></Link>  
                  </div>
                  </div> 
            </Col>
            <Col md={6}>
              <div className= "signUpHeadline">
                <h1>Reach Your Community </h1>
              </div>
              {/* SIGN UP FORM COMPONENT */}
                <SignUpForm />
            </Col>
          </Row>
        </Grid>
      </div>
      
    
          )
  
  export default LandingPage;
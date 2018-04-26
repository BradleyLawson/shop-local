import React from "react";
import { Row, Col, Grid } from 'react-bootstrap';
import "./AboutUs.css";
import ImageUpload from "../ImageUpload";
import AboutUsForm from "../AboutUsForm"


const AboutUs = () => (
  <div className="about-us-div">
    <Grid fluid>
      <Row>
        <Col md={12}>
          <h3>About You</h3>
          <AboutUsForm />
        </Col>
        <hr></hr>
      </Row>
    </Grid>
  </div>
);

export default AboutUs;
import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import GlobalNavbar from "../../components/GlobalNavbar";
import MapContainer from "../../components/MapContainer";
import RatingCard from "../../components/RatingCard";



const SearchResults = () => (
  <div>
    <GlobalNavbar />
    <Grid fluid>
    <Row>
      <Col md={4}>
        <RatingCard />
      </Col>
      <Col md={8}>
        <MapContainer />
      </Col>
    </Row>
    </Grid>
  </div>
);

export default SearchResults;
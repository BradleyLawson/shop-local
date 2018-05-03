import React from "react";
import { Row, Col, Grid, Jumbotron } from 'react-bootstrap';


const NoMatch = () => (
  <Grid fluid>
    <Row>
      <Col md={12}>
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
);

export default NoMatch;

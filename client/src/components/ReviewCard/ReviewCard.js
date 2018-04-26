import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';


const ReviewCard = () => (
    <div>
        <Grid>
            <Row>
                <Col md={1}>
                    <h5>Kathy K.</h5>
                </Col>
                <Col md={1}>
                    <h5>4 Stars</h5>
                </Col>
            </Row>
            <Row>
                <Col md ={3}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Donec hendrerit tempor tellus. Donec pretium posuere tellus. 
                    Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. 
                    Cum sociis natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Nulla posuere.
                    </p>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default ReviewCard;
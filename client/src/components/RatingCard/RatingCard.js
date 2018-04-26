import React, { Component }from "react";
import { Grid, Row, Col, Well } from 'react-bootstrap';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./RatingCard.css";


class RatingCard extends Component {
    state = {
        profilePicture: "",
        businessName: "",
        businessCategory: "",
        ratings: ""
      };

    componentDidMount() {
        this.loadBusiness();
      }

      loadBusiness = () => {
        API.getBusiness()
        .then(res =>
        this.setState({ 
            profilePicture: res.data.profilePicture, 
            businessName: res.data.businessName, 
            businessCategory: res.data.businessCategory,
            ratings: res.data.ratings
        })
      )
      .catch(err => console.log(err));
      };

    render(){
        return (
            <div>
                <Well>
                    <Grid fluid>
                        <Row>
                            <Col md={4}>
                                <img width={64} height={64} src={this.state.profilePicture} alt="thumbnail" />
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <Col md={6}>
                                        <p>Business Name</p>
                                    </Col>
                                    <Col md={6}>
                                        <p>5 Stars</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <p>Category</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </Well>
            </div>
        );    
    }
}

export default RatingCard;
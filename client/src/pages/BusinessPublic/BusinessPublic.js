import React, { Component } from "react";
import { Grid, Row, Col, Well, PageHeader, Media } from 'react-bootstrap';
import GlobalNavbar from "../../components/GlobalNavbar";
import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import ReviewCard from "../../components/ReviewCard";
import BlogPosts from "../../components/BlogPosts";
import MapContainer from "../../components/MapContainer";
import {FacebookBtn, TwitterBtn, LinkedInBtn, InstagramBtn} from "../../components/SocialMediaButtons";
import API from "../../utils/API";


class BusinessPublic extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            business: {},
        };
      }

    componentDidMount() {
        this.loadBusiness();
      }

      loadBusiness = () => {
        API.getBusiness(this.props.match.params.id)
          .then(res =>
            this.setState({ business: res.data }))
      };

      

    render(){
        // const pageHeaderStyle = {
        //     backgroundImage: 'url(' + {this.state.business.profileImage} + ')',
        // }
        return (
            <div>
                <GlobalNavbar />
                <Grid fluid>        
                    <PageHeader>
                        <Row>
                            <Col md={6}>
                            <h1>{this.state.business.businessName}</h1>
                            <h4>{this.state.business.businessAddress}</h4> 
                            <h4>{this.state.business.phoneNumber}</h4>
                            </Col>  
                            <Col md={6}>
                            </Col>
                        </Row>     
                    </PageHeader>
                </Grid>                                          
                {/* About You Section */}
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <h3>About You</h3>
                            <Media>
                                <Media.Left>
                                <img width={64} height={64} src={this.state.business.profileImage} alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading>About Us</Media.Heading>
                                <p>
                                    {this.state.business.aboutUs}
                                </p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <hr></hr>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row>
                        <Col md={9}>
                            <Row>
                                <Col md={12}>
                                    <h3>Make a Post</h3>
                                    </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <h3>Link to Social Media</h3> 
                            </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
} 
    

export default BusinessPublic;
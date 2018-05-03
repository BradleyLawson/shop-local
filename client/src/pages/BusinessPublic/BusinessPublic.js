import React, { Component } from "react";
import { Grid, Row, Col, PageHeader, Media, ListGroup, ListGroupItem } from 'react-bootstrap';
import GlobalNavbar from "../../components/GlobalNavbar";
import MapContainer from "../../components/MapContainer";
import API from "../../utils/API";
import "./BusinessPublic.css"
import { Link } from "react-router-dom";




class BusinessPublic extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            businesses: {
                blogPosts: []
            },
        };
      }

    componentDidMount() {
        this.loadBusiness();
      }

      loadBusiness = () => {
        API.getBusiness(this.props.match.params.id)
          .then(res =>
            this.setState({ businesses: res.data }))
      };

      

    render(){
        // const pageHeaderStyle = {
        //     backgroundImage: 'url(' + {this.state.business.profileImage} + ')',
        // }
        return (
            <div>
                <GlobalNavbar />
                <div style={{background: this.state.backgroundImage}}>
                <Grid fluid className="header-section">      
                    <PageHeader>
                        <Row>
                            <Col md={12} style={{textAlign: "center"}}>
                            <h1 style={{color: "white"}}>{this.state.businesses.businessName}</h1>
                            <h1 style={{color: "white"}}>{this.state.businesses.tagline}</h1>
                            <h4 style={{color: "white"}}>{this.state.businesses.businessAddress}</h4> 
                            <h4 style={{color: "white"}}>{this.state.businesses.phoneNumber}</h4>
                            <h4 style={{color: "white"}}>{this.state.businesses.email}</h4>
                            </Col>  
                            <Col md={6}>
                            </Col>
                        </Row>     
                    </PageHeader>
                </Grid>     
                </div>                                     
                {/* About You Section */}
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Media>
                                <Media.Left>
                                <img width={150} height={150} src={this.state.businesses.profileImage} alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading className="business-public-fonts"><strong>About Us</strong></Media.Heading>
                                <p className="business-public-minor-fonts">
                                    {this.state.businesses.aboutUs}
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
                                    <h3 className="business-public-fonts"><strong>Our Most Recent Posts</strong></h3>
                                </Col>
                                <Col md={12}>
                                {this.state.businesses.blogPosts.length ? (
                                    <ListGroup>
                                        {this.state.businesses.blogPosts.map(blog => (
                                        <ListGroupItem 
                                        header={blog.title}
                                        key={blog._id}
                                        style={{margin: 5, backgroundColor: "#bdd7e2", fontWeight: "Bold", color: "#184a73"}}
                                        className="blog-post-background"
                                        >
                                            {blog.body}
                                        </ListGroupItem>
                                    ))}
                                    </ListGroup>
                                     ) 
                                     : (
                                    <h3 className="business-public-fonts">No Results to Display</h3> 
                                    )}
                                </Col>
                                
                            </Row>
                        </Col>
                        <Col md={3}>
                            <div style={{textAlign: "center"}}>
                            <h3 className="business-public-fonts"><strong>Follow Us</strong></h3> 
                            </div>
                            <Row>
                                <Col md={6}>
                                    <h5 className="business-public-fonts">{this.state.businesses.facebookLink}</h5>                                    
                                </Col>
                                <Col md={6}>
                                    <h5 className="business-public-fonts">{this.state.businesses.twitterLink}</h5>                                    
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                <h5 className="business-public-fonts">{this.state.businesses.linkedInLink}</h5>                                    
                                </Col>
                                <Col md={6}>
                                    <h5 className="business-public-fonts">{this.state.businesses.instagramLink}</h5>                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
} 
    

export default BusinessPublic;
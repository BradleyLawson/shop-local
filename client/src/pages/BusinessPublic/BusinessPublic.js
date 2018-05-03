import React, { Component } from "react";
import { Grid, Row, Col, PageHeader, Media, ListGroup, ListGroupItem, Panel, PanelGroup, Form, FormControl, FormGroup, Button } from 'react-bootstrap';
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
                blogPosts: [],
                reviews: []
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

      clearInput() {
        this.setState({ value: "" });
      }

      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

      handleReviewFormSubmit = event => {
        let busId = this.state.business._id
    // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
            API.saveReview({
            busId: busId,
            reviewTitle: this.state.reviewTitle,
            reviewBody: this.state.reviewBody,
            rating: this.state.rating
            }).then(res => this.setState({
            businesses: res.data,
            reviewTitle: "",
            reviewBody: "",
            rating: "" 
            }));
            this.clearInput();
    };

      

    render(){
        // const pageHeaderStyle = {
        //     backgroundImage: 'url(' + {this.state.business.profileImage} + ')',
        // }
        return (
            <div>
                <GlobalNavbar />
                <div style={{background: "#c3423d", marginTop: -22, marginBottom: 40}}>
                <Grid fluid className="header-section">      
                    <PageHeader>
                        <Row>
                            <Col md={12} style={{textAlign: "center"}}>
                            <h1 style={{color: "white"}}>{this.state.businesses.businessName}</h1>
                            <h1 style={{color: "white"}}>{this.state.businesses.tagline}</h1>
                            <h4 style={{color: "white"}}>{this.state.businesses.businessAddress}</h4> 
                            <h4 style={{color: "white"}}>{this.state.businesses.businessCity}, {this.state.businesses.businessState}. {this.state.businesses.businessZip}</h4>                                         
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
                        <Panel bsStyle="info">
                            <Panel.Heading>
                            <Panel.Title componentClass="h3" style={{color: "#343f4d"}}><strong>About Us</strong></Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>{this.state.businesses.aboutUs}</Panel.Body>
                        </Panel>
                        </Col>
                        <hr></hr>
                    </Row>
                </Grid>
                <Grid fluid style={{marginTop: 30}}>
                    <Row>
                        <Col md={9}>
                            <Row>
                                <Col md={12} style={{textAlign: "center"}}>
                                    <h4 className="business-public-fonts"><strong>Our Most Recent Posts</strong></h4>
                                    <hr/>
                                </Col>
                                <Col md={12}>
                                        {this.state.businesses.blogPosts.reverse().map(blog => (
                                            <PanelGroup accordion id="accordion-example"
                                            >
                                            <Panel bsStyle="info" key={blog.id}>
                                                <Panel.Heading>
                                                <Panel.Title toggle componentClass="h3" style={{color: "#343f4d"}}><strong>{blog.title} Posted on:{blog.created}</strong></Panel.Title>
                                                </Panel.Heading>
                                                <Panel.Body collapsible>{blog.body}</Panel.Body>
                                            </Panel>
                                           </PanelGroup>
                                        ))}
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <div style={{textAlign: "center", margin: "auto"}}>
                            <h4 className="business-public-fonts"><strong>Follow Us</strong></h4> 
                            <hr/>
                            </div>
                            <div style={{textAlign: "center"}}>
                            <Row style={{margin: "auto", marginBottom: 40}}>
                                <Col sm={3} md={6} style={{marginLeft: "auto"}}>
                                    <i className="fab fa-facebook fa-5x" style={{color: "#3B5998"}}>{this.state.businesses.facebookLink}</i>
                                </Col>
                                <Col sm={3} md={6} style={{margin: "auto"}}>
                                    <i className="fab fa-twitter-square fa-5x" style={{color: "#1DA1F2"}}>{this.state.businesses.twitterLink}</i>
                                </Col>
                            </Row>
                            <Row style={{margin: "auto"}}>
                                <Col sm={3} md={6} style={{margin: "auto"}}>
                                <i className="fab fa-linkedin fa-5x" style={{color: "#0077B5"}}>{this.state.businesses.linkedInLink}</i>
                                </Col>
                                <Col sm={3} md={6} style={{margin: "auto"}}>
                                    <i className="fab fa-instagram fa-5x" style={{color: "#222222"}}>{this.state.businesses.instagramLink}</i>
                                </Col>
                            </Row>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col md={6}>
                        {this.state.businesses.reviews.reverse().map(review => (
                        <PanelGroup accordion id="accordion-example">
                        <Panel bsStyle="info" key={review.id}>
                            <Panel.Heading>
                            <Panel.Title toggle componentClass="h3" style={{color: "#343f4d"}}><strong>{review.reviewTitle} Posted on:{review.created}</strong></Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>{review.reviewBody}</Panel.Body>
                        </Panel>
                        </PanelGroup>
                        ))}
                        </Col>
                        <Col md={6}>
                        <h4>Leave a Review</h4>
                        <Form 
                        horizontal 
                        className = "reviewForm"
                        onSubmit={this.handleReviewFormSubmit.bind(this)}>
                            <FormGroup controlId="formHorizontalReviewTitle">
                                <Col md={12}>
                                    <FormControl 
                                    name="reviewTitle"
                                    type="text" 
                                    placeholder="Title for Review"
                                    value={this.state.value}
                                    onChange={this.handleInputChange}
                                    className="input-forms"                                                
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalReviewBody">
                                <Col md={12}>
                                    <FormControl 
                                    componentClass="textarea"
                                    name="reviewBody"
                                    type="text" 
                                    placeholder="Leave a Review...(But Be Nice)"
                                    value={this.state.value}
                                    onChange={this.handleInputChange}
                                    className="input-forms"                                                
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalRating" >
                            <FormControl 
                            name="rating"
                            componentClass="select" 
                            placeholder="Rate this Business"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            >
                                <option value="" selected disabled>Rate this Business</option>                    
                                <option value="1">1 Stars</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>                                
                            </FormControl>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={0} sm={12}>
                                    <Button 
                                    type="submit"
                                    style={{background: "#c3423d", color: "white"}}
                                    >Post</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                        </Col>
                    </Row>  */}
                </Grid>
            </div>
        );
    }
} 
    

export default BusinessPublic;
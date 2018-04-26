import React, { Component } from "react";
import { Grid, Row, Col, Well, PageHeader, Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import GlobalNavbar from "../../components/GlobalNavbar";
import { Link } from "react-router-dom";
// import Header from "../../components/Header";
// import AboutUs from "../../components/AboutUs";
// import ReviewCard from "../../components/ReviewCard";
// import BlogPosts from "../../components/BlogPosts";
// import AboutUsForm from "../../components/AboutUsForm";
// import MapContainer from "../../components/MapContainer";
// import {FacebookBtn, TwitterBtn, LinkedInBtn, InstagramBtn} from "../../components/SocialMediaButtons";
// import SocialMediaForm from "../../components/SocialMediaForm/SocialMediaForm";
import "./BusinessOwner.css"; 
import API from "../../utils/API";



class BusinessOwner extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            business: {},
            tagline: "",
            phoneNumber: ""
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



      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
    
      handleHeaderFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log("Working");
         API.updateBusiness(this.props.match.params.id,{
             tagline: this.state.tagline,
             phoneNumber: this.state.phoneNumber
         })
            .then(res =>
          this.setState({
            business: res.data,
            tagline: "",
            phoneNumber: ""
        }));
      };

      handleAboutFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log("Working");
         API.updateBusiness(this.props.match.params.id,{
             profileImage: this.state.profileImage,
             aboutUs: this.state.aboutUs
         })
            .then(res =>
          this.setState({
            business: res.data,
            profileImage: "",
            aboutUs: ""
        }));
      };

    handleBlogFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
            API.updateBusiness(this.props.match.params.id,{
                blogPosts: [
                    {
                        image: this.state.image,
                        title: this.state.title,
                        body: this.state.body
                    }
                ]
            }).then(res => this.setState({
            business: res.data,
            blogPosts: [
                {
                    image: "",
                    title: "",
                    body: ""
                }
            ]            
            }));
    };

    handleSocialMediaFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
            event.preventDefault();
                API.updateBusiness(this.props.match.params.id,{
                    facebookLink: this.state.facebookLink,
                    twitterLink: this.state.twitterLink,
                    linkedInLink: this.state.linkedInLink,
                    instagramLink: this.state.instagramLink
                }).then(res => this.setState({
                business: res.data,
                    facebookLink: "",
                    twitterLink: "",
                    linkedInLink: "",
                    instagramLink: ""           
                }));
        };

      

    render(){
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
                            <h5>Welcome {this.state.business.firstName} {this.state.business.lastName}</h5>
                            </Col>  
                            <Col md={6}>
                                <Form 
                                inline
                                onSubmit={this.handleHeaderFormSubmit.bind(this)}
                                >
                                    <FormGroup controlId="formInlineTagline">
                                        <FormControl 
                                        name="tagline"
                                        type="text" 
                                        placeholder="Add a Tagline" 
                                        value={this.state.value}
                                        onChange={this.handleInputChange}
                                        />
                                    </FormGroup>{' '}
                                    <FormGroup controlId="formInlinePhoneNumber">
                                        <FormControl 
                                        name="phoneNumber"
                                        type="category" 
                                        placeholder="555-555-5555"
                                        value={this.state.value}
                                        onChange={this.handleInputChange}
                                        />
                                    </FormGroup>{' '}
                                    <Button 
                                    type="submit"
                                    bsStyle="primary"
                                    >Upload</Button>
                                </Form>
                                <Link to={'/business-public/' + this.state.business._id}>
                                    <strong>
                                        Check Out Your Page
                                    </strong>
                                </Link>
                            </Col>
                        </Row>     
                    </PageHeader>
                </Grid>
                {/* About You Section */}
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <h3>About You</h3>
                            <Form 
                                horizontal 
                                className = "aboutUsForm"
                                onSubmit={this.handleAboutFormSubmit.bind(this)}>
                                    <FormGroup controlId="formHorizontalprofileImage">
                                        <Col md={3}>
                                        <ControlLabel>Upload Your Profile Picture</ControlLabel>
                                            <FormControl 
                                            label="File"
                                            name="profileImage"
                                            type="file" 
                                            placeholder="Upload your Image"
                                            value={this.state.value}
                                            onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalaboutUs">
                                        <Col md={12}>
                                            <FormControl 
                                            componentClass="textarea"
                                            name="aboutUs"
                                            type="text" 
                                            placeholder="Tell the World who you are"
                                            value={this.state.value}
                                            onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col smOffset={0} sm={12}>
                                            <Button 
                                            type="submit"
                                            bsStyle="primary"
                                            >Upload</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
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
                                    <Form 
                                    horizontal 
                                    className = "blogPostForm"
                                    onSubmit={this.handleBlogFormSubmit.bind(this)}>
                                        <FormGroup controlId="formHorizontalblogPostImage">
                                            <Col md={3}>
                                                <ControlLabel>Upload an Image for your Post</ControlLabel>                                            
                                                <FormControl 
                                                name="image"
                                                type="file" 
                                                placeholder="Add an Image for your Post"
                                                value={this.state.value}
                                                onChange={this.handleInputChange}
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalblogPostTitle">
                                            <Col md={12}>
                                                <FormControl 
                                                name="title"
                                                type="text" 
                                                placeholder="Title for Post"
                                                value={this.state.value}
                                                onChange={this.handleInputChange}
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalblogPostBody">
                                            <Col md={12}>
                                                <FormControl 
                                                componentClass="textarea"
                                                name="body"
                                                type="text" 
                                                placeholder="Share your thoughts..."
                                                value={this.state.value}
                                                onChange={this.handleInputChange}
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Col smOffset={0} sm={12}>
                                                <Button 
                                                type="submit"
                                                bsStyle="primary"
                                                >Post</Button>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                {/* Blog Posts Component and Blog Posts Form Component*/}
                                    {/* <BlogPosts /> */}
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <h3>Link to Social Media</h3>  
                            {/*Social Media Form Component  */}
                            {/* <SocialMediaForm /> */}
                            <Form 
                                horizontal 
                                className = "formHorizontalFacebookLink"
                                onSubmit={this.handleSocialMediaFormSubmit}>
                                    <FormGroup controlId="facebookLink">
                                        <Col md={12}>
                                            <FormControl 
                                            name="facebookLink"
                                            type="text" 
                                            placeholder="Connect Your Facebook"
                                            value={this.state.value}
                                            onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalTwitterLink">
                                        <Col md={12}>
                                            <FormControl 
                                            name="twitterLink"
                                            type="text" 
                                            placeholder="Connect Your Twitter"
                                            value={this.state.value}
                                            onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalLinkedInLink">
                                        <Col md={12}>
                                            <FormControl 
                                            name="linkedInLink"
                                            type="text" 
                                            placeholder="Connect Your LinkedIn"
                                            value={this.state.value}
                                            onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalInstagramLink">
                                        <Col md={12}>
                                            <FormControl 
                                            name="instagramLink"
                                            type="text" 
                                            placeholder="Connect Your Instagram"
                                            value={this.state.value}
                                            onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col smOffset={0} sm={12}>
                                            <Button 
                                            type="submit"
                                            bsStyle="primary"
                                            >Upload</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )    
    }    
}

export default BusinessOwner;
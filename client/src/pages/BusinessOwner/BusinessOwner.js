import React, { Component } from "react";
import { Grid, Row, Col, PageHeader, Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import GlobalNavbar from "../../components/GlobalNavbar";
import { Link } from "react-router-dom";
import "./BusinessOwner.css"; 
import API from "../../utils/API";



class BusinessOwner extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            business: {},
            blogPost: {},
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
    
      handleHeaderFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log("Working");
         API.updateBusiness(this.props.match.params.id,{
             tagline: this.state.tagline,
             phoneNumber: this.state.phoneNumber,
             backgroundImage: this.state.backgroundImage
         })
            .then(res =>
          this.setState({
            business: res.data,
            tagline: "",
            phoneNumber: "",
            backgroundImage: ""
        }));
        this.clearInput();        
      };

      handleAboutFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log("Working");
         API.updateBusiness(this.props.match.params.id,{
             aboutUs: this.state.aboutUs,
             profileImage: this.state.profileImage
         })
            .then(res =>
          this.setState({
            business: res.data,
            aboutUs: "",
            profileImage: ""
        }));
        this.clearInput();        
      };

    handleBlogFormSubmit = event => {
        let busId = this.state.business._id
    // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
            API.saveBlogPost({
            busId: busId,
            title: this.state.title,
            body: this.state.body
            }).then(res => this.setState({
            blogPost: res.data,
            title: "",
            body: "" 
            }));
            this.clearInput();
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
            this.clearInput();                
        };

      

    render(){
        return (
            <div>
                <GlobalNavbar />
                <div style={{background: "#bdd7e2", marginTop: -20}}>                        
                <Grid fluid>  
                    <PageHeader>
                        <Row>
                            <Col md={6}>
                            <h1 className="font-style">{this.state.business.businessName}</h1>
                            <h4 className="font-style">{this.state.business.businessAddress}</h4> 
                                <Row>
                                    <Col md={12}>
                                        <h4 className="font-style">{this.state.business.businessCity}, {this.state.business.businessState}. {this.state.business.businessZip}</h4>                                         
                                    </Col>                                    
                                </Row>
                            <h4 className="font-style">{this.state.business.phoneNumber}</h4>
                            <h5 className="font-style">Welcome {this.state.business.firstName} {this.state.business.lastName}</h5>
                            </Col>  
                            <Col md={6}>
                                <Form 
                                ref="headerForm"
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
                                        className="input-forms"                                        
                                        />
                                    </FormGroup>{' '}
                                    <FormGroup controlId="formInlinePhoneNumber">
                                        <FormControl 
                                        name="phoneNumber"
                                        type="category" 
                                        placeholder="555-555-5555"
                                        value={this.state.value}
                                        onChange={this.handleInputChange}
                                        className="input-forms"
                                        />
                                    </FormGroup>{' '}
                                    <FormGroup controlId="formHorizontalprofileImage">
                                        
                                            <FormControl 
                                            name="profileImage"
                                            type="text" 
                                            placeholder="Upload your Image"
                                            value={this.state.value}
                                            onChange={this.handleInputChange}
                                            className="input-forms"                                            
                                            />
                                    </FormGroup>
                                    <Button 
                                    type="submit"
                                    style={{background: "#c3423d", color: "white"}}
                                    >Upload</Button>
                                </Form>
                                    <Row>
                                        <Col md={12} style={{marginTop: 15}}>
                                            <Link to={'/business-public/' + this.state.business._id}>
                                                <h4 className="font-style">
                                                    Check Out Your Page
                                                </h4>
                                            </Link>
                                        </Col>
                                    </Row>
                            </Col>
                        </Row>     
                    </PageHeader>
                </Grid>
                </div>                
                {/* About You Section */}
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <h3 className="font-style"><strong>About You</strong></h3>
                            <Form 
                                horizontal 
                                className = "aboutUsForm"
                                action="/upload"
                                method="POST"
                                encType="multipart/form-data"
                                onSubmit={this.handleAboutFormSubmit.bind(this)}>
                                    <FormGroup controlId="formHorizontalprofileImage">
                                        <Col md={3}>
                                        <ControlLabel>Upload Your Profile Picture</ControlLabel>
                                            <FormControl 
                                            name="profileImage"
                                            type="text" 
                                            placeholder="Upload your Image"
                                            value={this.state.value}
                                            onChange={this.handleInputChange}
                                            className="input-forms"                                            
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
                                            className="input-forms"                                            
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col smOffset={0} sm={12}>
                                            <Button
                                            type="submit"
                                            style={{background: "#c3423d", color: "white"}}
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
                                    <h3 className="font-style"><strong>Make a Post</strong></h3>
                                    <Form 
                                    horizontal 
                                    className = "blogPostForm"
                                    onSubmit={this.handleBlogFormSubmit.bind(this)}>
                                        {/* <FormGroup controlId="formHorizontalblogPostImage">
                                            <Col md={3}>
                                                <ControlLabel>Upload an Image for your Post</ControlLabel>                                            
                                                <FormControl 
                                                name="image"
                                                type="file" 
                                                placeholder="Add an Image for your Post"
                                                value={this.state.value}
                                                onChange={this.handleInputChange}
                                                className="input-forms"                                                
                                                />
                                            </Col>
                                        </FormGroup> */}
                                        <FormGroup controlId="formHorizontalblogPostTitle">
                                            <Col md={12}>
                                                <FormControl 
                                                name="title"
                                                type="text" 
                                                placeholder="Title for Post"
                                                value={this.state.value}
                                                onChange={this.handleInputChange}
                                            className="input-forms"                                                
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
                                                className="input-forms"                                                
                                                />
                                            </Col>
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
                                {/* Blog Posts Component and Blog Posts Form Component*/}
                                    {/* <BlogPosts /> */}
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <h3 className="font-style"><strong>Link Your Social Media</strong></h3>  
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
                                            className="input-forms"                                            
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
                                            className="input-forms"                                            
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
                                            className="input-forms"                                            
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
                                            className="input-forms"                                             
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col smOffset={0} sm={12}>
                                            <Button 
                                            type="submit"
                                            style={{background: "#c3423d", color: "white"}}
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
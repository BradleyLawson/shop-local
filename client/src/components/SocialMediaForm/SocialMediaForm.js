import React, { Component } from "react";
import { FormGroup, FormControl, Button, Col, Form } from "react-bootstrap";
import API from "../../utils/API";

class SocialMediaForm extends Component {
    
        state = {
        facebookLink: "",
        twitterLink: "",
        linkedInLink: "",
        instagramLink: ""
        };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
        [name]: value});
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    API.updateBusiness({
        facebookLink: this.state.facebookLink,
        twitterLink: this.state.twitterLink,
        linkedInLink: this.state.linkedInLink,
        instagramLink: this.state.instagramLink
      }).catch(err => console.log(err));
        this.setState({
        facebookLink: "",
        twitterLink: "",
        linkedInLink: "",
        instagramLink: ""
        });
    };
  render() {
    return (
      <div>
        <Form 
        horizontal 
        className = "formHorizontalFacebookLink"
        onSubmit={this.handleFormSubmit}>
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
      </div>
    );
  }
}


export default SocialMediaForm;


                  

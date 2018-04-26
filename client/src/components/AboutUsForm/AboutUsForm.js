import React, { Component } from "react";
import { FormGroup, FormControl, Button, Col, Form } from "react-bootstrap";
import API from "../../utils/API";

class AboutUsForm extends Component {
    // constructor(props) {
    //     super(props);

        state = {
        profileImage: "",
        aboutUs: ""
        };

        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // }
  // Setting the component's initial state
  

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
        profileImage: this.state.profileImage,
        aboutUs: this.state.aboutUs
      }).catch(err => console.log(err));
        this.setState({
            profileImage: "",
            aboutUs: ""
        });
    };
  render() {
    return (
      <div>
        <Form 
        horizontal 
        className = "aboutUsForm"
        onSubmit={this.handleFormSubmit}>
            <FormGroup controlId="formHorizontalprofileImage">
                <Col md={3}>
                    <FormControl 
                    name="profileImage"
                    type="text" 
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
      </div>
    );
  }
}


export default AboutUsForm;


                  

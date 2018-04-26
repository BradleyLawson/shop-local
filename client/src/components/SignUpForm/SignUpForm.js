import React, { Component } from "react";
import "./SignUpForm.css";
import { FormGroup, FormControl, Button, Col, Form } from "react-bootstrap";
import API from "../../utils/API";
import { Redirect } from 'react-router';

class SignUpForm extends Component {
    // constructor(props) {
    //     super(props);

        state = {
        business:{},
        redirect: false,
        firstName: "",
        lastName: "",
        businessName: "",
        businessCategory: "",
        businessAddress: "",
        businessZip: "",
        email: "",
        password: ""
        };

        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // }
  // Setting the component's initial state
  

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
        [name]: value});
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } 

    API.saveBusiness({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        businessName: this.state.businessName,
        businessCategory: this.state.businessCategory,
        businessAddress: this.state.businessAddress,
        businessZip: this.state.businessZip,
        email: this.state.email,
        password: this.state.password
      }).then(res  => 
        this.setState({
            business: res.data,
            redirect: true,
            firstName: "",
            lastName: "",
            businessName: "",
            businessCategory: "",
            businessAddress: "",
            businessZip: "",
            email: "",
            password: ""
        })
    );
    };
  render() {
      const { redirect } = this.state;

      if (redirect) {
          return <Redirect to={'/business-owner/' + this.state.business._id}/>;
      }
    return (
      <div>
        <Form 
        horizontal 
        className = "signUpForm"
        onSubmit={this.handleFormSubmit}>
            <FormGroup controlId="formHorizontalFirstName">
                <Col md={10}>
                    <FormControl 
                    name="firstName"
                    type="text" 
                    placeholder="First Name"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalLastName">
                <Col md={10}>
                    <FormControl 
                    name="lastName"
                    type="text" 
                    placeholder="Last Name"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalBusinessName" >
                <Col md={10}>
                    <FormControl 
                    name="businessName"
                    type="text" 
                    placeholder="Business Name"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalBusinessCategory" >
                <Col md={10}>
                    <FormControl 
                    name="businessCategory"
                    componentClass="select" 
                    placeholder="Business Category"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    >
                        <option value="" selected disabled>Business Category</option>                    
                        <option value="Furniture">Furniture</option>
                        <option value="Art">Art</option>
                        <option value="Photography">Photography</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Local Farm">Local Farm</option>
                        <option value="Service">Service</option>
                    </FormControl>

                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalBusinessAddress" >
                <Col md={10}>
                    <FormControl 
                    name="businessAddress"
                    type="text" 
                    placeholder="Business Address"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalBusinessZip" >
                <Col md={10}>
                    <FormControl 
                    name="businessZip"
                    type="text" 
                    placeholder="Zip Code"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalEmail">
                <Col md={10}>
                    <FormControl 
                    name="email"
                    type="text" 
                    placeholder="Email"
                    value={this.state.value}
                    onChange={this.handleInputChange} 
                    />
                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
                <Col md={10}>
                    <FormControl 
                    name="password"
                    type="text" 
                    placeholder="Password"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col smOffset={0} sm={12}>
                    <Button 
                    type="submit"
                    >Sign Up</Button>
                </Col>
            </FormGroup>
        </Form>;
      </div>
    );
  }
}


export default SignUpForm;


                  

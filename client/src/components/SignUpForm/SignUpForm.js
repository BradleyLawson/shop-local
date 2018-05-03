import React, { Component } from "react";
import "./SignUpForm.css";
import { FormGroup, FormControl, Button, Col, Form, Row } from "react-bootstrap";
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
        businessCity: "",
        businessState: "",
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
        businessCity: this.state.businessCity,
        businessState: this.state.businessState,
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
            businessCity: "",
            businessState: "",
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
            <Row>
                <Col md={5}>
                    <FormGroup controlId="formHorizontalFirstName" style={{marginRight: 1}}>
                        
                            <FormControl 
                            name="firstName"
                            type="text" 
                            placeholder="First Name"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            />

                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup controlId="formHorizontalLastName" style={{marginLeft: 1}}>
                            <FormControl 
                            name="lastName"
                            type="text" 
                            placeholder="Last Name"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <FormGroup controlId="formHorizontalBusinessName" >
                            <FormControl 
                            name="businessName"
                            type="text" 
                            placeholder="Business Name"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <FormGroup controlId="formHorizontalBusinessCategory" >
                            <FormControl 
                            name="businessCategory"
                            componentClass="select" 
                            placeholder="Business Category"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            >
                                <option value="" selected disabled>Business Category</option>                    
                                <option value="Furniture">Furniture</option>
                                <option value="Non-Profit">Non-Profit</option>
                                <option value="Events">Events</option>
                                <option value="Retail">Retail</option>
                                <option value="Technology">Technology</option>
                                <option value="Education">Education</option>
                                <option value="Dealership">Dealership</option>
                                <option value="Independent Contractor">Independent Contractor</option>
                                <option value="Art">Art</option>
                                <option value="Photography">Photography</option>
                                <option value="Food & Drink">Food & Drink</option>
                                <option value="Local Farm">Local Farm</option>
                                <option value="Custom Fabrication">Custom Fabrication</option>
                                <option value="Service">Service</option>
                            </FormControl>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={10}>    
                    <FormGroup controlId="formHorizontalBusinessAddress" >
                            <FormControl 
                            name="businessAddress"
                            type="text" 
                            placeholder="Business Address"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <FormGroup controlId="formHorizontalBusinessCity" >
                        <FormControl 
                        name="businessCity"
                        type="text" 
                        placeholder="City"
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <FormGroup controlId="formHorizontalBusinessState" style={{marginRight: 1}}>
                        <FormControl 
                        name="businessState"
                        componentClass="select" 
                        placeholder="State"
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        >
                            <option value="" selected disabled>State</option>                    
                            <option value="Alabam">AL</option>
                            <option value="Alaska">AK</option>
                            <option value="Arizona">AZ</option>
                            <option value="Arkansas">AR</option>
                            <option value="California">CA</option>
                            <option value="Colorado">CO</option>
                            <option value="Connecticut">CT</option>
                            <option value="Delaware">DE</option>
                            <option value="Florida">FL</option>
                            <option value="Georgia">GA</option>
                            <option value="Hawaii">HI</option>
                            <option value="Idaho">ID</option>
                            <option value="Illinois">IL</option>
                            <option value="Indiana">IN</option>
                            <option value="Iowa">IA</option>
                            <option value="Kansas">KA</option>
                            <option value="Kentucky">KY</option>
                            <option value="Louisiana">LA</option>
                            <option value="Maine">ME</option>
                            <option value="Maryland">MD</option>
                            <option value="Massachusetts">MA</option>
                            <option value="Michigan">MN</option>
                            <option value="Mississippi">MS</option>
                            <option value="Missouri">MO</option>
                            <option value="Montana">MT</option>
                            <option value="Nebraska">NE</option>
                            <option value="Nevada">NV</option>
                            <option value="New Hampshire">NH</option>
                            <option value="New Jersey">NJ</option>
                            <option value="New Mexico">NM</option>
                            <option value="New York">NY</option>
                            <option value="North Carolina">NC</option>
                            <option value="North Dakota">ND</option>
                            <option value="Ohio">OH</option>
                            <option value="Oklahoma">OK</option>
                            <option value="Oregon">OR</option>
                            <option value="Pennsylvania">PA</option>
                            <option value="Rhode Island">RI</option>
                            <option value="South Carolina">SC</option>
                            <option value="South Dakota">SD</option>
                            <option value="Tennessee">TN</option>
                            <option value="Texas">TX</option>
                            <option value="Utah">UT</option>
                            <option value="Vermont">VT</option>
                            <option value="Virginia">VA</option>
                            <option value="Washington">WA</option>
                            <option value="West Virginia">WV</option>
                            <option value="Wisconsis">WI</option>
                            <option value="Wyoming">WY</option>
                        </FormControl>
                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup controlId="formHorizontalBusinessZip" style={{marginLeft: 1}}>
                            <FormControl 
                            name="businessZip"
                            type="text" 
                            placeholder="Zip Code"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <FormGroup controlId="formHorizontalEmail">
                            <FormControl 
                            name="email"
                            type="text" 
                            placeholder="Email"
                            value={this.state.value}
                            onChange={this.handleInputChange} 
                            />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <FormGroup controlId="formHorizontalPassword">
                            <FormControl 
                            name="password"
                            type="text" 
                            placeholder="Password"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <FormGroup>
                            <Button 
                            type="submit"
                            >Sign Up</Button>
                    </FormGroup>
                </Col>
             </Row>   
        </Form>;
      </div>
    );
  }
}


export default SignUpForm;


                  

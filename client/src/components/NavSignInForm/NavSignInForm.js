import React, { Component } from "react";
import { FormGroup, FormControl, Button, Form, Navbar } from "react-bootstrap";
import API from "../../utils/API";
import { Redirect } from 'react-router';



class NavSignInForm extends Component {
  // Setting the component's initial state
  state = {
    business: {},
    redirect: false,
    _id: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    console.log("here");
    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("Email:" + this.state.email)

    API.postBusinessLogin({
      email: this.state.email,
      password: this.state.password
    })
      .then(res =>
        // console.log(res.data));
        this.setState({ business: res.data, redirect: true }))
    // loadBusiness();
  };

  // loadBusiness = () => {
  //   API.getBusiness()
  //     .then(res =>
  //       this.setState({ business: res.data, redirect: true, email: "", password: "" }))
  // };

  render() {
    const { redirect } = this.state;

      if (redirect) {
          return <Redirect to={'/business-owner/' + this.state.business._id}/>;
      }

      return (
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Lokl</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullRight>
                    <Form 
                    inline
                    onChange={this.handleInputChange}                     
                    onSubmit={this.handleFormSubmit}>
                        <FormGroup controlId="formInlineEmail">
                            <FormControl 
                            name ="email"
                            type="email" 
                            placeholder="Email" />
                        </FormGroup>{' '}
                        <FormGroup controlId="formInlinePassword">
                            <FormControl 
                            name ="password"
                            type="password" 
                            placeholder="Password" />
                        </FormGroup>{' '}
                        <Button type="submit">Login</Button>
                    </Form>
                </Navbar.Form>
            </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default NavSignInForm;


                  

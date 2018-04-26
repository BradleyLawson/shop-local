import React, { Component } from "react";
import { FormGroup, FormControl, Button, Form, Navbar } from "react-bootstrap";

class NavSignInForm extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

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
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
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
                    <Form inline>
                        <FormGroup controlId="formInlineEmail">
                            <FormControl 
                            name = "email"
                            type="text" 
                            placeholder="Email" />
                        </FormGroup>{' '}
                        <FormGroup controlId="formInlinePassword">
                            <FormControl 
                            name = "password"
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


                  

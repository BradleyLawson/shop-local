import React, { Component } from "react";
import "./SearchForm.css";
import { FormGroup, FormControl, Button, Form } from "react-bootstrap";

class SearchForm extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    businessName: "",
    businessCategory: "",
    businnessAddress: "",
    businessZip: "",
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
        <div>
            <Form inline>
                <FormGroup controlId="formInlineZip">
                    <FormControl type="text" placeholder="ex. 32909" />
                        </FormGroup>{' '}
                        <FormGroup controlId="formInlineBusinessCategory">
                    <FormControl type="category" placeholder="ex. Furniture" />
                </FormGroup>{' '}
                <Button type="submit">Shop Lokl</Button>
            </Form>
      </div>
    );
  }
}


export default SearchForm;
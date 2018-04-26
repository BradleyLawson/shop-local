import React, { Component } from "react";
import { FormGroup, FormControl, Button, Form, ControlLabel } from "react-bootstrap";
import API from "../../utils/API";

class HeaderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagline: "",
      phoneNumber: ""
    };
  }
  // Setting the component's initial state
 

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    API.updateBusiness({
      _id: this.props.businessId,
      tagline: this.state.tagline,
      phoneNumber: this.state.phoneNumber
    }).then(res =>
      this.setState({
        business: res.data,
        tagline: "",
        phoneNumber: ""
    }));
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <div>
            <Form 
            inline
            onSubmit={this.handleFormSubmit}
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
      </div>
    );
  }
}


export default HeaderForm;
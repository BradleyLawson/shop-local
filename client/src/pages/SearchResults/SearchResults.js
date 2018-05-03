import React, { Component } from "react";
import { Grid, Row, Col, Form, FormGroup, FormControl, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import GlobalNavbar from "../../components/GlobalNavbar";
import MapContainer from "../../components/MapContainer";
import API from "../../utils/API";
import { Link } from "react-router-dom";






class SearchResults extends Component{

  constructor() {
    super();


    this.state = {
      businesses: [],
      businessZip: "",
      businessCategory: ""
    };
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

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(this.state)
    API.postBusinessesSearch({
      businessZip: this.state.businessZip,
      businessCategory: this.state.businessCategory
  })
     .then(res =>
   this.setState({
     businesses: res.data,
     businessZip: "",
     businessCategory: ""
 }));


  };

  render(){
    return (
      <div>
        <GlobalNavbar />
        <Grid fluid>
          <Row>
            <Col md={6}>
              <h2> Search For a Local Business</h2>
            </Col>
            <Col md={6}>
            <Form onSubmit={this.handleFormSubmit}
            inline
            >
                <FormGroup controlId="formInlineZip">
                    <FormControl 
                    name="businessZip"
                    type="text" 
                    value={this.state.value}
                    onChange={this.handleInputChange}                    
                    placeholder="ex. 32909" />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineBusinessCategory">
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
                </FormGroup>{' '}
                <Button type="submit">Shop Lokl</Button>
            </Form>
            </Col>
          </Row>
        <Row>
          <Col md={4}>
            {this.state.businesses.length ? (
              <ListGroup>
                {this.state.businesses.map(business => (
                  <Link to={"/business-public/" + business._id}>                  
                  <ListGroupItem 
                  header={business.businessName + "  " + business.phoneNumber}
                  key={business._id}
                  style={{margin: 5}}
                  >
                      <strong>
                        {business.tagline}
                      </strong>
                  </ListGroupItem>
                  </Link>
                  
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col md={8}>
            <MapContainer />
          </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}




export default SearchResults;
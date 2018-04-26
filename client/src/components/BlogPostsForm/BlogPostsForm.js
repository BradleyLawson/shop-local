import React, { Component } from "react";
import { FormGroup, FormControl, Button, Col, Form } from "react-bootstrap";
import API from "../../utils/API";

class BlogPostsForm extends Component {
    // constructor(props) {
    //     super(props);

        state = {
        blogPostImage: "",
        blogPost: ""
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
        blogPostImage: this.state.blogPostImage,
        blogPost: this.state.blogPost
      }).catch(err => console.log(err));
        this.setState({
            blogPostImage: "",
            blogPost: ""
        });
    };
  render() {
    return (
      <div>
        <Form 
        horizontal 
        className = "blogPostForm"
        onSubmit={this.handleFormSubmit}>
            <FormGroup controlId="formHorizontalblogPostImage">
                <Col md={3}>
                    <FormControl 
                    name="blogPostImage"
                    type="text" 
                    placeholder="Add an Image for your Post"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalblogPost">
                <Col md={12}>
                    <FormControl 
                    componentClass="textarea"
                    name="blogPost"
                    type="text" 
                    placeholder="Share your thoughts..."
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
                    >Post</Button>
                </Col>
            </FormGroup>
        </Form>
      </div>
    );
  }
}


export default BlogPostsForm;


                  

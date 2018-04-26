import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import BlogPostsForm from "../BlogPostsForm/BlogPostsForm";


const BlogPosts = () => (
    <div style={{borderLeft:"1px solid black", borderRight:"1px solid black"}}>
        <Grid fluid>
            <Row>
                <Col md={12}>
                    <h3>Make a Post</h3>
                    <BlogPostsForm />
                </Col>
            </Row>
        </Grid>
    </div>
);

export default BlogPosts;
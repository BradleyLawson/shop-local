import React from "react";
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import HeaderForm from "../../components/HeaderForm";
import "./Header.css";


const Header = props => (
    <div className="header-div">
        <Grid fluid>
            <PageHeader>
                <Row>
                    <Col md={6}>
                       <h1> Welcome: Business Name </h1>
                    </Col>
                    <Col md={6}>
                        <HeaderForm businessId={props.businessId} />
                    </Col>
                </Row>
            </PageHeader>
        </Grid>
    </div>
);

export default Header;
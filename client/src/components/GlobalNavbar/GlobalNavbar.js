import React from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";

const GlobalNavbar = () => (
    <Navbar inverse collapseOnSelect style={{background: "#343f4d"}}>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#brand" style={{color: "white"}}>Lokl</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    <span style={{color: "white"}}>Home</span>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <span style={{color: "white"}}>About</span>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
 </Navbar>
);

export default GlobalNavbar;
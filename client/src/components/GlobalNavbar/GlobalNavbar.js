import React from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";

const GlobalNavbar = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#brand">Lokl</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Home
                </NavItem>
                <NavItem eventKey={2} href="#">
                    About
                </NavItem>
            </Nav>
        </Navbar.Collapse>
 </Navbar>
);

export default GlobalNavbar;
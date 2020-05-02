import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import NavLink from 'react-bootstrap/NavLink';

import {  NavLink } from 'react-router-dom'

import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <Container>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand to="/">Igor's ToDo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav 
                            className="mr-auto"
                        >
                            <NavLink exact activeClassName="active" to='/'>Home</NavLink>
                            <NavLink activeClassName="active" to='/todos'>ToDos</NavLink>
                            <NavLink activeClassName="active" to='/archive'>Archive</NavLink>
                            {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="todos">ToDos</Nav.Link>
                            <Nav.Link as={Link} to="/archive">Archive</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;
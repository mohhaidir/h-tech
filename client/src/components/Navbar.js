import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link  } from 'react-router-dom';

export default function Header(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to="/todos">My Todos</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className="login-btn" as={Link} to="/addTodo">
                        Add Todo
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
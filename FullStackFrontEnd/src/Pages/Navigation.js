import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'

class Navigation extends Component{
    render(){
        return(
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">OnTech InStock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="./MyBooks">MyBooks</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default Navigation;
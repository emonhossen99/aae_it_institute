import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import './Header.css';


const Header = () => {
    return (
        <Navbar className='mainNav' sticky='top' expand="lg">
        <Container>
          <Navbar.Brand >
            <img  className='imagesLogo' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='commonNav'  as={Link} to='/'>HOME</Nav.Link>
              <Nav.Link className='commonNav'as={Link} to='/aboutus' >ABOUT US</Nav.Link>
              <NavDropdown className='commonNav' title="SERVICES" id="basic-nav-dropdown">
                <NavDropdown.Item className='commonNav' href="#action/3.1"><h5>DEVELOPMENT</h5></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='commonNav' href="#action/3.2">
                 Web Development
                </NavDropdown.Item>
                <NavDropdown.Item className='commonNav' href="#action/3.3">Web Design And Development</NavDropdown.Item>
                <NavDropdown.Item className='commonNav' href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='commonNav' href="#home">EVENTS</Nav.Link>
              <Nav.Link className='commonNav' href="#home">GALLERY</Nav.Link>
              <Nav.Link className='commonNav' href="#home">NEWS</Nav.Link>
              <Nav.Link className='commonNav' as={Link} to='/navcontact'>CONTACT US</Nav.Link>
              <Nav.Link className='commonNav' as={Link} to='/login'>LOG IN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
    );
};

export default Header;
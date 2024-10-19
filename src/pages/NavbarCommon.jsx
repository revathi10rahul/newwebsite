import React from 'react'
import './nav.css'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function NavbarCommon() {

    const navigate=useNavigate()
    const handleHome=()=>{
        navigate('/')
    }
    const handleAboutus=()=>{
        navigate('/aboutus')
    }
  return (
    <>
    <div style={{position:"sticky",top:"0",zindex:"999", boxShadow: "3px 3px 10px lightslategray"
}}>
    <Container fluid >
<Navbar className="bg-body-tertiary justify-content-between">
     <img src='./Assets/ns black transparent.png' alt=""  style={{height:"auto",width:"8%"}}/>
      <Form inline>
        <Row>
          <Col xs="auto">
          <button class="custom-btn btn-5"><span>Contact Us</span></button>
          <button class="custom-btn btn-5 ms-2"><span>Request Demo</span></button>
          </Col>
        </Row>
      </Form>

      
    </Navbar>
    <Navbar bg="light" expand="lg" data-bs-theme="light">
      <Container>
      
        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Collapsible content that appears/disappears on toggle */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={handleHome}>Home</Nav.Link>
            <Nav.Link onClick={handleAboutus   }>About Us</Nav.Link>
            <NavDropdown title="Products" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Order Management System</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown>
         
            <NavDropdown title="Solutions" id="nav-dropdown">
            <NavDropdown title="Warehouse Management" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Order Management System</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown><br />
            <NavDropdown title="Sales" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Order Management System</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="AI Powered Multi - Channel Fulfillment" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Order Management System</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown>
             
              
            </NavDropdown>
            <Nav.Link href="/" onClick={handleAboutus   }>Case Studies</Nav.Link>
            <Nav.Link href="/" onClick={handleAboutus   }>Blogs</Nav.Link>
            <Nav.Link href="/" onClick={handleAboutus   }>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</Container>
    </div>

</>
  )
}

export default NavbarCommon
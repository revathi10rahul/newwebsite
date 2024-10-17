import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './commoncss.css'
import Nav from 'react-bootstrap/Nav';
import integration from '../Assets/integration.webp'
import {Row,Col} from 'react-bootstrap'
import Content from './Content';
import { useState } from 'react';
import nsblack from '../Assets/ns black transparent.png'
import Modal from 'react-bootstrap/Modal';
function Homepage() {

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSalesSubMenu, setShowSalesSubMenu] = useState(false);
  const [showAIPoweredSubMenu, setShowAIPoweredSubMenu] = useState(false);

  const handleWarehouseClick = () => {
    setShowSubMenu(!showSubMenu); // Toggle the visibility of the sub-menu
  };
   const handleSalesClick = () => {
    setShowSalesSubMenu(!showSalesSubMenu);
    setShowSubMenu(false); // Close other sub-menus
    setShowAIPoweredSubMenu(false); // Close other sub-menus
  };

  const handleAIPoweredClick = () => {
    setShowAIPoweredSubMenu(!showAIPoweredSubMenu);
    setShowSubMenu(false); // Close other sub-menus
    setShowSalesSubMenu(false); // Close other sub-menus
  };
  return (
    <div style={{height:"10vh"}}>
    <Container fluid style={{position:"fixed",background:"#e1e1e1",color:"white"}}>
    <Row>
        <Col lg={8}>
     <Row>
      
        <Col lg={3}>
        <Navbar>
        <Container>
          
          <Navbar.Brand href="#home">
            <img
              src='./Assets/ns black transparent.png'
              width="100"
              height="50"
             
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          
        
          
        </Container>
      
      </Navbar>
      
   
        </Col>
     </Row>
        </Col>
      </Row>
     
      <Container>
  <Navbar expand="md" collapseOnSelect className='toggle-btn'>
    <Navbar.Brand href="/" ></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='toggle-btn-background-setting'>
      <Nav className="ml-auto">
     
 
  

      <Nav.Link className="dropbtn common-nav" >
              Home
            </Nav.Link>
            
        <Nav.Link className="common-nav">About Us</Nav.Link>
        <div class="dropdown" >
        <Nav.Link className="common-nav">Products <span style={{color:"green"}}>▼</span></Nav.Link>
        <div class="dropdown-content">
    <a href="#" >Fulfillment Automation</a>
    <a href="#">Order Management System</a>
    <a href="#">Warehouse Management System</a>
  </div>
  </div>
  <div className="dropdown2">
      <Nav.Link className="common-nav">
        Solutions <span style={{ color: "green" }}>▼</span>
      </Nav.Link>
      <div className="dropdown-content2">
        <a href="#" onClick={handleWarehouseClick}>
          Warehouse Management
        </a>
        {showSubMenu && (
          <div className="sub-dropdown-content">
            <a href="#">Inbount Receipt</a>
            <a href="#">Cross Docking</a>
            <a href="#">Deconsolidation</a>
            <a href="#">Quality Assurance</a>
            <a href="#">Repacking & Putaway</a>
            <a href="#">Pick Management</a>
            <a href="#">Dispatch</a>
            <a href="#">Inventory Management</a>
            <a href="#">API Integration</a>
            <a href="#">IOT Integration</a>
          </div>
        )}

        <a href="#" onClick={handleSalesClick}>
          Sales
        </a>
        {showSalesSubMenu && (
          <div className="sub-dropdown-content">
            <a href="#">Order Management</a>
            <a href="#">Quotation Management</a>
            <a href="#">Returns Management</a>
            <a href="#">Process Management</a>

          </div>
        )}

        <a href="#" onClick={handleAIPoweredClick}>
          AI-Powered Multi-Channel Fulfillment
        </a>
        {showAIPoweredSubMenu && (
          <div className="sub-dropdown-content">
            <a href="#">Multi Channel Integration</a>
            <a href="#">Order Processing</a>
            <a href="#">Pick List Generation</a>
            <a href="#">Pick Sequencing</a>
            <a href="#">Work Force Management</a>
            <a href="#">Packing and Shipping</a>
            <a href="#">Fulfillment Validation</a>
            <a href="#">E-commerce Integration</a>

          </div>
        )}
      </div>
    </div>
        <Nav.Link className="common-nav">Case Studies</Nav.Link>
        <Nav.Link className="common-nav">Blogs</Nav.Link>
        <Nav.Link className="common-nav">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</Container>



    </Container>

   
    </div>
  );
}

export default Homepage;

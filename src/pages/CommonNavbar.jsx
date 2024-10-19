import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './commoncss.css'
import './Responsive.css'
import Nav from 'react-bootstrap/Nav';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



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

  // ------------------------------------------------
  const navigate=useNavigate()
  const handleAboutUs=()=>{
    navigate('/aboutus')
  }

  const handleHome=()=>{
    navigate('/')
  }
  return (
    <div >
      <div className='common-nav-fix' style={{ boxShadow: '3px 3px 10px lightslategray', position: "fixed", top: 0, left: 0, background:"white",right: 0, height: "16vh", zIndex: 1000 }}>
     <Container fluid className='bg-mob-view'>
     <Navbar className="justify-content-between">
     <img
              src='./Assets/ns black transparent.png'
             style={{height:"auto",width:"8%"}}
             className='ns-logo'
              alt="React Bootstrap logo"
            />
             <div style={{display:"flex"}}>
            <button class="custom-btn btn-5"><span>Contact Us</span></button>
            <button class="custom-btn btn-5 ms-2"><span>Request Demo</span></button>
            </div>
      
  
    </Navbar>
    <Container fluid>
  <Navbar expand="md" collapseOnSelect className='toggle-btn'>
    <Navbar.Brand href="/" ></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='toggle-btn-background-setting'>
      <Nav className="d-flex justify-content-center mx-5  fs-6">
     
 
  

      <Nav.Link className="dropbtn common-nav " onClick={handleHome}>
              Home
            </Nav.Link>
            
        <Nav.Link className="common-nav" onClick={handleAboutUs}>About Us</Nav.Link>
        <div class="dropdown" >
        <Nav.Link className="common-nav">Products <span style={{color:"green"}}>▼</span></Nav.Link>
        <div class="dropdown-content">
    <a href="/fulfillmentautomation" >Fulfillment Automation</a>
    <a href="/ordermanagementsystem">Order Management System</a>
    <a href="/warehousemanagementsystem">Warehouse Management System</a>
  </div>
  </div>
  <div className="dropdown2">
      <Nav.Link className="common-nav">
        Solutions <span style={{ color: "green" }}>▼</span>
      </Nav.Link>
      <div className="dropdown-content2">
        <a href="/warehousemanagement" onClick={handleWarehouseClick}>
          Warehouse Management
        </a>
        {showSubMenu && (
          <div className="sub-dropdown-content">
            <a href="/inbountreceipt">Inbount Receipt</a>
            <a href="/crossdocking">Cross Docking</a>
            <a href="/deconsolidation">Deconsolidation</a>
            <a href="/qualityassurance">Quality Assurance</a>
            <a href="/replacingputaway">Repacking & Putaway</a>
            <a href="/pickmanagement">Pick Management</a>
            <a href="/dispatch">Dispatch</a>
            <a href="/inventorymanagement">Inventory Management</a>
            <a href="/apiintegration">API Integration</a>
            <a href="/iotintegration">IOT Integration</a>
          </div>
        )}

        <a href="/sales" onClick={handleSalesClick}>
          Sales
        </a>
        {showSalesSubMenu && (
          <div className="sub-dropdown-content">
            <a href="/ordermanagement">Order Management</a>
            <a href="/quotationmanagement">Quotation Management</a>
            <a href="/returnsmanagement">Returns Management</a>
            <a href="/processmanagement">Process Management</a>

          </div>
        )}

        <a href="/aipoweredmultichannelfulfillment" onClick={handleAIPoweredClick}>
          AI-Powered Multi-Channel Fulfillment
        </a>
        {showAIPoweredSubMenu && (
          <div className="sub-dropdown-content">
            <a href="/multichannelintegration">Multi Channel Integration</a>
            <a href="/orderprocessing">Order Processing</a>
            <a href="/picklistgeneration">Pick List Generation</a>
            <a href="/picksequencing">Pick Sequencing</a>
            <a href="/workforcemanagement">Work Force Management</a>
            <a href="/packingandshipping">Packing and Shipping</a>
            <a href="/fulfillmentvalidation">Fulfillment Validation</a>
            <a href="/ecommerceintegration">E-commerce Integration</a>

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
    {/* <Container fluid style={{position:"fixed",background:"#e1e1e1",color:"white"}}>
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



    </Container> */}

   
    </div>
  );
}

export default Homepage;

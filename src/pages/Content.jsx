import React,{useState,useEffect} from 'react'
import {Row,Col ,Container} from 'react-bootstrap'

import './newdesigndemo.css'
import Deconsolidation from './Deconsolidation'
import AporaHomepage from './AporaHomepage'
import IndustriesServe from './IndustriesServe'
function Content() {






  // Define the content arrays
  const contentData = [
    {
      highlightText: "One of Its Kind",
      mainTitle: "Apora",
      subheading: "AI POWERED FULFILLMENT AUTOMATION",
      ctas: [
        "Save 60% Fulfillment Cost",
        "Achieve 50 % - 60 % Increase In Efficiency",
        "Accomplish 100% Same Day Delivery"
      ]
    },
    {
      highlightText: "Purvey",
      mainTitle: "WMS",
      subheading: "Warehouse Management System",
      ctas: [
        "Ensure 100% traceability of Goods",
        "Empower Your Business With Real-Time Inventory Insights",
        "Accomplish 100% Same Day Delivery"
      ]
    },
    {
      highlightText: "On",
      mainTitle: "CLOUD",
      subheading: "Embrace Elastic Scalability Without Capital Spend",
      ctas: [
        "Save UpTo 50% on IT Cost",
        "90% of Saas Users find it Easy To Use",
        "Saas as an Secure as on Premises Software"
      ]
    }
  ];


  const [contentIndex, setContentIndex] = useState(0);
  
  // Handle content flipping with interval
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 2000); // Time between content change

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [contentData.length]);
  return (
    <div>
      
        <Container className='first-content'>
      <Row className='primary-heading'>
        <Col lg={1}></Col>
        <Col lg={7} className="text-lg-start text-center px-5 ">
        <div className="text-container">
            {/* Dynamic content based on contentIndex */}
            <>
              <span className="highlight-text" style={{ fontFamily: "Good Times" }}>{contentData[contentIndex].highlightText}</span>
              <span className="main-title" style={{ fontFamily: "pirulen" }}>{contentData[contentIndex].mainTitle}</span>
              <span className="subheading" style={{ fontFamily: "Good Times" }}>{contentData[contentIndex].subheading}</span>
             <div className='cta-full-div'>
             {contentData[contentIndex].ctas.map((cta, index) => (
                <span className='cta' style={{ fontFamily: "arial" }} key={index}>{cta}</span>
              ))}
             </div>
            </>
          </div>
        </Col>
     
        <Col lg={3}>
        <img src='../Assets/Banner picture1.png' alt="integrationimage" className='integrationimage'/>
        </Col>
        {/* <Col lg={1} style={{marginTop:"150px"}}>
        <span className='next-btn' onClick={handleToggleContent}>
        <FontAwesomeIcon className='next-btn' icon={faGreaterThan} style={{color:"green",fontSize:"50px"}}/>
          </span>
        </Col> */}
      </Row>
    </Container>
    <Deconsolidation/>
    <AporaHomepage/>
    <IndustriesServe/>

    </div>
  )
}

export default Content
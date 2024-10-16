import React,{useState} from 'react'
import integration from '../Assets/integration.webp'
import {Row,Col ,Container} from 'react-bootstrap'
import cuttingedge from '../Assets/cuttingedge.webp'
import Homepage from './Homepage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import Newdesigndemo from '../pages/Newdesigndemo'
import Deconsolidation from './Deconsolidation'
import AporaHomepage from './AporaHomepage'
function Content() {
  const [isContentToggled, setIsContentToggled] = useState(false);



  const [contentIndex, setContentIndex] = useState(0); // State to track the content index

  const handleToggleContent = () => {
    setContentIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through the three contents
  };

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
  return (
    <div>
        <Homepage/>
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
        <img src={integration} alt="integration image" className='integrationimage'/>
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
    </div>
  )
}

export default Content
import { Row,Col, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import eco from '../Assets/eco.jpg'
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import work4 from '../Assets/work4.jpg'
import work2 from '../Assets/work2.webp'
import { useNavigate } from 'react-router-dom';
import work3 from '../Assets/work3.jpg'

import './newdesigndemo.css'

function Newdesigndemo() {
  const navigate=useNavigate()
  const handleAboutus=()=>{
      navigate('/about')
  }
  const handleHome=()=>{
      navigate('/')
  }
const handleFulfillmentautomation=()=>{
navigate('/fulfillmentautomation')
}

const handleOrdermanagement=()=>{
navigate('/ordermanagement')
}
const handleWarehousemanagement=()=>{
navigate('/warehousemanagement')
}
const handleInbountreceipt=()=>{
navigate('/inboundreceipt')
}
const handleCrossdocking=()=>{
navigate('/crossdocking')
}
const handleDeconsolidation=()=>{
navigate('/deconsolidation')
}
const handleDispatch =()=>{
  navigate('/dispatch')
}

const handleInventorymanagement=()=>{
navigate('/inventorymanagement')
}

const handleApiintegration=()=>{
navigate('/apiintegration')
}
const handleQualityassurance=()=>{
navigate('/qualitycheck')
}
const handleRepackingPutaway=()=>{
navigate('/repackingputaway')
}
const handlePickmanagement=()=>{
navigate('/pickmanagement')
}
const handleIOTIntegration=()=>{
navigate('/iotintegration')
}

const handleMultichannel=()=>{
  navigate('/multichannelintegration')
}
const handleOrderprocessing=()=>{
  navigate('/orderprocessing')
}
const handlePicklistgen=()=>{
  navigate('/picklistgeneration')
}

const handlePicksequencing=()=>{
  navigate('/picksequencing')
}
const handleWorkforcemanagement=()=>{
  navigate('/workforceoptimization')
}
const handlePackingandshipping=()=>{
  navigate('/packageandshipping')
}
const handleFulfillmentvalidation=()=>{
  navigate('/fulfillmentvalidation')
}
const handleEcommerceintegration=()=>{
  navigate('/ecommerceintegration')
}

const [activeItem, setActiveItem] = useState('Material Inward');
  const [activeSubItem, setActiveSubItem] = useState(''); // Default selected item
const handleClick = (item) => {
  setActiveItem(item);
  setActiveSubItem(''); // Reset the sub-item when switching main items

};



const getImageForSubItem = () => {
  if (activeItem === 'Material Inward') {
    switch (activeSubItem) {
      case 'Pallet, Bags, Carton Level Tracking':
        return work4; // Path for Pallet, Bags, Carton Level Tracking image
      case 'Purchase Order, Advanced Shipping Notice Linking':
        return work3; // Path for Purchase Order image
      // Add cases for other sub-items as needed
      default:
        return work2; // Default image for Material Inward
    }
  } 
  return null; // No image found
};


const handleSubItemClick = (subItem) => {
  setActiveSubItem(subItem);
};
  return (
    <>
  
   

<Container fluid className='mt-5'>
<h1 className='newsedignpage-heading '>PURVEY-WMS</h1>

<Row>
        <Col>
        <ul className="responsive-list">
          <li 
            onClick={() => handleClick('Material Inward')}
            className={activeItem === 'Material Inward' }
          >
            Material Inward
          </li>
          <li 
            onClick={() => handleClick('Deconsolidation & Crossdocking')}
            className={activeItem === 'Deconsolidation & Crossdocking' ? 'selected' : ''}
          >
            Deconsolidation & Crossdocking
          </li>
          <li 
            onClick={() => handleClick('Quality Assurance')}
            className={activeItem === 'Quality Assurance' ? 'selected' : ''}
          >
            Quality Assurance
          </li>
          <li 
            onClick={() => handleClick('Unpacking & Repacking')}
            className={activeItem === 'Unpacking & Repacking' ? 'selected' : ''}
          >
            Unpacking & Repacking
          </li>
          <li 
            onClick={() => handleClick('Put Away')}
            className={activeItem === 'Put Away' ? 'selected' : ''}
          >
            Put Away
          </li>
          <li 
            onClick={() => handleClick('Picking')}
            className={activeItem === 'Picking' ? 'selected' : ''}
          >
            Picking
          </li>
          <li 
            onClick={() => handleClick('Van Delivery & Sales')}
            className={activeItem === 'Van Delivery & Sales' ? 'selected' : ''}
          >
            Van Delivery & Sales
          </li>
        </ul>
        </Col>
      </Row>

      <Row>
        <Col lg={1}></Col>
        <Col lg={5}>
        
        {activeItem === 'Material Inward' && (
  <ul className="block-list mt-5">
    <li
      onClick={() => handleSubItemClick('Unique Scan Code Generation')}
      style={{
        background: activeSubItem === 'Unique Scan Code Generation' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Unique Scan Code Generation
    </li>
    <li
      onClick={() => handleSubItemClick('Pallet, Bags, Carton Level Tracking')}
      style={{
        background: activeSubItem === 'Pallet, Bags, Carton Level Tracking' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Pallet, Bags, Carton Level Tracking
    </li>
    <li
      onClick={() => handleSubItemClick('Purchase Order, Advanced Shipping Notice Linking')}
      style={{
        background: activeSubItem === 'Purchase Order, Advanced Shipping Notice Linking' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Purchase Order, Advanced Shipping Notice Linking
    </li>
    <li
      onClick={() => handleSubItemClick('Invoice Aligned Product, Lot Trace')}
      style={{
        background: activeSubItem === 'Invoice Aligned Product, Lot Trace' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Invoice Aligned Product, Lot Trace
    </li>
    <li
      onClick={() => handleSubItemClick('Electronic Record Transfer Deconsolidation And Crossdocking')}
      style={{
        background: activeSubItem === 'Electronic Record Transfer Deconsolidation And Crossdocking' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Electronic Record Transfer Deconsolidation And Crossdocking
    </li>
    <li
      onClick={() => handleSubItemClick('Supplier Metrics Data Input For Procurement Planning')}
      style={{
        background: activeSubItem === 'Supplier Metrics Data Input For Procurement Planning' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Supplier Metrics Data Input For Procurement Planning
    </li>
    <li
      onClick={() => handleSubItemClick('API Integrations To Purchase, Finance & ERP Applications')}
      style={{
        background: activeSubItem === 'API Integrations To Purchase, Finance & ERP Applications' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      API Integrations To Purchase, Finance & ERP Applications
    </li>
  </ul>
)}

        {activeItem === 'Deconsolidation & Crossdocking' && (
           <ul className="block-list mt-5">
             <li
      onClick={() => handleSubItemClick(' Packages level Unique Scan Code Generation')}
      style={{
        background: activeSubItem === ' Packages level Unique Scan Code Generation' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
       Packages level Unique Scan Code Generation
    </li>
    <li
      onClick={() => handleSubItemClick(' Goods Receipt Note to Package linking')}
      style={{
        background: activeSubItem === ' Goods Receipt Note to Package linking' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
       Goods Receipt Note to Package linking
    </li>
          
             
             <li >Bulk order Package Separation
             </li>
             <li >Invoice Aligned Product, Lot Trace</li>
             <li >
             Invoice Aligned Product, Lot, Quality Trace

             </li>
             <li >
             Automated notification generation to Quality Assurance

             </li>
             <li >
             Automated notification generation to dispatch for Buk Delivery

             </li>
             <li>API Integrations To Purchase, Finance & ERP Applications
             </li>
           </ul>
        )}
        </Col>

          <Col lg={5} className='mt-3'>
            <img src={getImageForSubItem()} alt="Additional Information" />
          </Col>

        <Col lg={1}></Col>
      </Row>
</Container>

{/* <div className='footer-div'>
  <Footer/>
</div> */}
    </>
  );
}

export default Newdesigndemo;
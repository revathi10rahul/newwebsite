import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for managing meta tags

import {Row,Col, Container} from 'react-bootstrap'
// Sample data for headers and corresponding items with images
const data = {
    'Put Away': {
      items: [
        { name: 'Put Away List Generation', image: './Assets/work3.jpg' },
        { name: 'Dynamic Storage Optimization', image: './Assets/eco.jpg' },
        { name: 'Resource Optimization', image: './Assets/work4.jpg' },
        { name: 'For Process Control and Monitoring', image: './Assets/eco.webp' },
        ],
    },
    'Pick & Dispatch': {
      items: [
        { name: 'Sales Order Similarity & Proximity based grouping', image: './Assets/work4.jpg' },
        { name: 'Zone aligned Pick List generation', image: './Assets/work2.jpg' },
        { name: 'Resource Optimization ', image: './Assets/work3.jpg' },
        { name: 'For Process control and Monitoring', image: './Assets/work4.jpg' },
        ],
    },
    'Resource Optimization': {
      items: [
        { name: 'Put Away Activity Summary', image: './Assets/work3.jpg' },
        { name: 'Worker Performance Analysis', image: './Assets/work2.jpg' },
        { name: 'Cost Analysis', image: './Assets/work3.jpg' },
       ],
    },
    'Trace': {
      items: [
        { name: 'SKU Attribute Management', image: './Assets/work4.jpg' },
        { name: 'Unique ID Number', image: './Assets/work3.jpg' },
        { name: 'Vendor Of Origin', image: './Assets/work4.jpg' },
        { name: 'Receipt Package Identity', image: './Assets/work3.jpg' },
       ],
    },
    'Monitor': {
        items: [
          { name: 'Lot Management ', image: './Assets/work4.jpg' },
          { name: 'Serialization ', image: './Assets/work3.jpg' },
          { name: 'Batch Tracking ', image: './Assets/work4.jpg' },
          { name: 'Storage Locations', image: './Assets/work3.jpg' },
          { name: 'Product Age Tracking ', image: './Assets/work4.jpg' },
        ],
      },
        
  };
  
  const AporaHomepage = () => {
    const [selectedHeader, setSelectedHeader] = useState('Put Away');
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
  
    useEffect(() => {
      setItems(data[selectedHeader].items); // Update items based on the selected header
      setSelectedItem(data[selectedHeader].items[0]); // Set default selected item for each header
    }, [selectedHeader]);
  

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item); // Set the selected item when clicked
  };
  

  return (
    <div className='AporaHomepage'>

      <Container>
      <div style={{display:"flex",justifyContent:"center",textAlign:"justify"}}>
     
      </div>
      </Container>
       <h1 className='headingStyle-Apora'>APORA </h1>
     
            <div >
                {/* Main Headers */}
                <ul className="responsive-list">
        {Object.keys(data).map((header) => (
          <li
            key={header}
            onClick={() => handleHeaderClick(header)}
            className={selectedHeader === header ? 'selected-header' : ''}
          >
            {header.toUpperCase()}
          </li>
        ))}
      </ul>
            </div>

            {/* List of Items based on Selected Header */}
            <div className='backgroundimg-apora'>
            <Container  >
                <Row>
                    
                    <Col lg={6}>
                        {selectedHeader && (
                            <div>
                                <ul className="block-list mt-2">
                                    {items.map((item) => (
                                        <li
                                            key={item.name}
                                            onClick={() => handleItemClick(item)}
                                            className={selectedItem?.name === item.name ? 'selected-item' : ''}
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </Col>
                    <Col lg={6} >
            {selectedItem && (
                <div>
                    <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                       className='aporahomepage-image'
                    />
                    <p style={{ marginTop: '20px', fontSize: '1.2em' }}>
                        {selectedItem.description}
                    </p>
                </div>
            )}
        </Col>
                 
                </Row>  
            </Container>
            </div>
   
    </div>
  );
};

export default AporaHomepage;

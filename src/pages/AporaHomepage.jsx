import React, { useState, useEffect } from 'react';

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
  const [isOpen, setIsOpen] = useState(false); // State to manage visibility of headers

  const toggleHeaders = () => {
    setIsOpen(!isOpen); // Toggle the open/close state
  };
  return (
    <div>
       <h1 className='headingStyle mt-5' >Apora</h1>
       <Container>
            <div>
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
            <Container fluid>
                <Row>
                    
                    <Col lg={6}>
                        {selectedHeader && (
                            <div>
                                <ul className="block-list mt-5">
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
                    <Col lg={6} className="mt-3">
                        {selectedItem && (
                            <div>
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.name}
                                    style={{ 
                                        width:"100%",
                                        height: '60vh',borderRadius:"40px 100px " ,marginTop: "38px",padding:"20px",borderTop:'1px double green',borderBottom:"1px double blue"}}
                                />
                            </div>
                        )}
                    </Col>
                    
                </Row>
            </Container>

            </Container>
   
    </div>
  );
};

export default AporaHomepage;

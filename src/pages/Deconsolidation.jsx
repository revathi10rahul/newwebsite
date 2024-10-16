import React, { useState, useEffect } from 'react';

import {Row,Col, Container} from 'react-bootstrap'
// Sample data for headers and corresponding items with images
const data = {
    'Material': {
      items: [
        { name: 'Unique Scan Code Generation', image: './Assets/work3.jpg',description: 'An efficient dispatch method designed for bulk orders, ensuring quick and accurate delivery of large quantities to retailers.' },
        { name: 'Pallet, Bags, Carton Level Tracking', image: './Assets/eco.jpg' },
        { name: 'Purchase Order, Advanced Shipping Notice Linking', image: './Assets/work4.jpg' },
        { name: 'Invoice Aligned Product, Lot Trace', image: './Assets/eco.webp' },
        { name: 'Electronic Record Transfer Deconsolidation And Crossdocking ', image: './Assets/work2.webp' },
        { name: 'Supplier Metrics Data Input For Procurement Planning', image: './Assets/work3.jpg' },
        { name: 'API Integrations To Purchase, Finance & ERP Applications', image: './Assets/work4.jpg' },
      ],
    },
    'Deconsolidation': {
      items: [
        { name: 'Packages level Unique Scan Code Generation', image: './Assets/work4.jpg' },
        { name: 'Goods Receipt Note to Package linking', image: './Assets/work2.jpg' },
        { name: 'Bulk order Package Separation', image: './Assets/work3.jpg' },
        { name: 'Invoice Aligned Product, Lot, Quality Trace', image: './Assets/work4.jpg' },
        { name: 'Automated notification generation to Quality Assurance', image: './Assets/work4.jpg' },
        { name: 'Automated notification generation to dispatch for Buk Delivery', image: './Assets/work4.jpg' },
        { name: 'API Integrations To Purchase, Finance & ERP Applications', image: './Assets/work4.jpg' },
      ],
    },
    'Quality': {
      items: [
        { name: 'Item Level Unique Scan Code Generation', image: './Assets/work3.jpg' },
        { name: 'Goods Receipt Note to Package linking', image: './Assets/work2.jpg' },
        { name: 'Package To Item Level Linking', image: './Assets/work3.jpg' },
        { name: 'Acceptance And Rejection Separation', image: './Assets/work4.jpg' },
        { name: 'Approved And Rejected Item Staging Location Assignment', image: './Assets/work4.jpg' },
        { name: 'Item Scan Code Level Quality Status Mapping', image: './Assets/work4.jpg' },
        { name: 'Automated Notification Generation To Unpacking And Repacking', image: './Assets/work4.jpg' },
        { name: 'Automated Notification Generation To Put Away', image: './Assets/work3.jpg' },
        { name: 'API Integrations To Purchase, Finance & ERP Applications', image: './Assets/work2.jpg' },
      ],
    },
    'Unpacking': {
      items: [
        { name: 'Repack Level Unique Scan Code Generation', image: './Assets/work4.jpg' },
        { name: 'Item Loss Tracking', image: './Assets/work3.jpg' },
        { name: 'Item Staging Location Assignment', image: './Assets/work4.jpg' },
        { name: 'Item Scan Code Level  Batch Creation & Quality Status Mapping', image: './Assets/work3.jpg' },
        { name: 'Automated Notification Generation To Put Away', image: './Assets/work4.jpg' },
        { name: 'API Integrations To Purchase, Finance & ERP Applications', image: './Assets/work3.jpg' },
      ],
    },
    'PutAway': {
        items: [
          { name: 'Dynamic Put Away Method', image: './Assets/work4.jpg' },
          { name: 'Automated Put Away List Generation', image: './Assets/work3.jpg' },
          { name: 'Item Staging Location  Indication For Easy Pick', image: './Assets/work4.jpg' },
          { name: 'Zone Aligned & Existing Stock Location Proximity Based  Put Away Location Indication', image: './Assets/work3.jpg' },
          { name: 'Warehouse Rack Location Mapped Put Away Confirmation', image: './Assets/work4.jpg' },
          { name: 'Item Scan Code Level  Batch Location Level  Record Creation', image: './Assets/work2.jpg' },
          { name: 'Real Time Inventory Information', image: './Assets/work3.jpg' },

          { name: 'API Integrations To Purchase, Finance & ERP Applications', image: './Assets/work3.jpg' },

        ],
      },
      'Picking': {
    items: [
        {
            name: 'Whole Sale Dispatch Method',
            image: './Assets/work4.jpg',
            description: 'Optimizes dispatch processes specifically for wholesale orders, ensuring efficient handling and delivery.'
        },
        {
            name: 'Retail Dispatch Method',
            image: './Assets/work3.jpg',
            description: 'Tailored dispatch strategies for retail orders, enhancing customer satisfaction and order accuracy.'
        },
        {
            name: 'Automated FIFO Pick Method',
            image: './Assets/work4.jpg',
            description: 'Implements a First-In-First-Out (FIFO) picking strategy to minimize waste and optimize inventory turnover.'
        },
        {
            name: 'Multiple Order Simultaneous Pick',
            image: './Assets/work3.jpg',
            description: 'Allows simultaneous picking of multiple orders to streamline the fulfillment process and increase efficiency.'
        },
        {
            name: 'Unidirectional Pick Sequencing',
            image: './Assets/work4.jpg',
            description: 'Utilizes a unidirectional approach to picking sequences, reducing travel time and enhancing workflow efficiency.'
        },
        {
            name: 'Automated Reorder Level Notification',
            image: './Assets/work2.jpg',
            description: 'Automatically notifies when stock reaches a predefined reorder level, ensuring timely replenishment of inventory.'
        },
        {
            name: 'Real Time Order Fulfilment Status Information',
            image: './Assets/work3.jpg',
            description: 'Provides real-time updates on order fulfillment status, enhancing communication and customer satisfaction.'
        },
        {
            name: 'API Integrations To Purchase, Finance & ERP Applications',
            image: './Assets/work3.jpg',
            description: 'Facilitates seamless integration with purchasing, finance, and ERP systems for streamlined order processing and data management.'
        },
    ],
},

      'Delivery': {
        items: [
          { name: 'Whole Sale Dispatch Method', image: './Assets/work4.jpg', description: 'An efficient dispatch method designed for bulk orders, ensuring quick and accurate delivery of large quantities to retailers.' },
          { name: 'Retail Dispatch Method', image: './Assets/work3.jpg', description: 'A tailored dispatch approach for retail orders, focusing on meeting customer demand while minimizing lead time.' },
          { name: 'Automated FIFO Pick Method', image: './Assets/work4.jpg', description: 'Utilizes the First-In-First-Out (FIFO) principle to enhance inventory management and reduce waste.' },
          { name: 'Multiple Order Simultaneous Pick', image: './Assets/work3.jpg', description: 'Enables the picking of multiple orders at once, improving efficiency and reducing processing time in warehouses.' },
          { name: 'Unidirectional Pick Sequencing', image: './Assets/work4.jpg', description: 'A systematic approach to order picking that minimizes travel time by following a unidirectional path through the storage area.' },
          { name: 'Automated Reorder Level Notification', image: './Assets/work2.jpg', description: 'Automated alerts that notify managers when inventory levels fall below a predetermined threshold, preventing stockouts.' },
          { name: 'Real Time Order Fulfilment Status Information', image: './Assets/work3.jpg', description: 'Provides live updates on order processing status, allowing businesses to track fulfilment and improve customer communication.' },
          { name: 'API Integrations To Purchase, Finance & ERP Applications', image: './Assets/work3.jpg', description: 'Seamless integration with existing software systems to streamline purchasing, financial management, and enterprise resource planning.' },
      ],
      },    
  };
  
  const HeaderComponent = () => {
    const [selectedHeader, setSelectedHeader] = useState('Material');
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

      <Container>
      <div style={{display:"flex",justifyContent:"center",textAlign:"justify"}}>
     <p  style={{fontSize:"20px"}}>
     Revolutionize your warehouse operations with our AI-driven software designed for optimal warehouse management solutions. Our innovative  enhances efficiency by enabling the seamless management of your inventory and logistics, ensuring that every product is tracked in real-time. Experience lightning-speed fulfillment that significantly boosts customer satisfaction. With intelligent automation features and smart analytics, our WMS solution  streamlines your operations, reduces costs, and maximizes productivity. Transform the way you manage your warehouse and take your logistics to the next level with our cutting-edge technology.
     </p>
      </div>
      </Container>
       <h1 className='headingStyle'>Purvey WMS</h1>
     
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
            <div className='backgroundimg-deconsolidation'>
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
                    <Col lg={6} className="mt-3">
            {selectedItem && (
                <div>
                    <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        style={{
                            width: "100%",
                            height: '50vh',
                            borderRadius: "40px 100px",
                            marginTop: "38px",
                            padding: "20px",
                           
                        }}
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

export default HeaderComponent;

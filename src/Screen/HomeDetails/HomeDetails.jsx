import React from 'react';
import './HomeDetails.css';

function HomeDetails() {
  // Sample items to display horizontally, mimicking the design
  const items = [
    { id: 1, title: 'Honor X9b 5G', img: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Smartphone Pink', img: 'https://via.placeholder.com/150' },
    { id: 3, title: 'OnePlus Nord', img: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Fast Charger', img: 'https://via.placeholder.com/150' },
    { id: 5, title: 'OnePlus Blue', img: 'https://via.placeholder.com/150' },
    { id: 6, title: 'iQOO Z7 Pro', img: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Smartphone Black', img: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Wireless Earbuds', img: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Smartwatch Series', img: 'https://via.placeholder.com/150' },
    { id: 10, title: 'Bluetooth Speaker', img: 'https://via.placeholder.com/150' },
    { id: 11, title: 'Power Bank 20000mAh', img: 'https://via.placeholder.com/150' },
    { id: 12, title: 'DSLR Camera', img: 'https://via.placeholder.com/150' },
    { id: 13, title: 'Gaming Headset', img: 'https://via.placeholder.com/150' },
    { id: 14, title: 'Mechanical Keyboard', img: 'https://via.placeholder.com/150' },
    { id: 15, title: 'Wireless Mouse', img: 'https://via.placeholder.com/150' },
    { id: 16, title: 'LED Monitor 27"', img: 'https://via.placeholder.com/150' },
    { id: 17, title: 'Laptop Stand', img: 'https://via.placeholder.com/150' },
    { id: 18, title: 'USB-C Hub', img: 'https://via.placeholder.com/150' },
    { id: 19, title: 'Tablet Pro', img: 'https://via.placeholder.com/150' },
    { id: 20, title: 'Fitness Tracker', img: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className='homeDetails'>
      <div className='homeDetailsLongCard'>
        <div className='cardHeader'>
          <div className='homeDetailLongCardTitle'>Today's Deals</div>
          <span className='seeMoreLink'>See more</span>
        </div>
        
        <div className='homeDetailsLongCardItems'>
          {items.map((item) => (
            <div className='homeDetailsLongCardItem' key={item.id}>
              <div className='itemImagePlaceholder'>
                {/* Replace with your actual <img src={item.img} alt={item.title} /> */}
                <span>Item {item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeDetails;
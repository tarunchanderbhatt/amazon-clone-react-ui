import React from 'react';
import "./NavbarBanner.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';
function NavbarBanner() {
  const option = [
    { "name": "Fresh" },
    { "name": "Amazon Pay" },
    { "name": "Mobiles" },
    { "name": "Today's Deals" },
    { "name": "Coupons" },
    { "name": "Flights" },
    { "name": "Electronics" },
    { "name": "Computers" },
    { "name": "New Releases" },
    { "name": "Bestsellers" },
    { "name": "Video Games" },
    { "name": "Fashion" },
    { "name": "Home & Kitchen" },
     { "name": "Baby" },
    { "name": "Book" }
  ];

  return (
    <div className="navbarBanner">
      <div className="navbarBannerLeft">
        
        {/* All Menu Option */}
        <div className='alloptionsNavbarBanner'>
          <MenuOutlinedIcon sx={{ fontSize: "24px" }} />
          <div className='allOptionsNavbarBanner'>All</div>
        </div>

        {/* Mapped Options */}
        {option.map((item, index) => (
          <Link to={`/Products`} className='optionsNavbarBanner' key={index}>
            <div className='allOptionsNavbarBanner'>{item.name}</div>
          </Link>
        ))}

      </div>
      
      <div className="navbarBannerRight">
        <img 
          src='https://m.media-amazon.com/images/G/31/Events/img25/Nimesh/J26_GW_SWM_ED_V2_NEW._CB768029556_.jpg' 
          alt='Amazon Banner Promotion' 
        />
      </div>
    </div>
  );
}

export default NavbarBanner;
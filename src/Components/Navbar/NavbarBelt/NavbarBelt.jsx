import React from "react";
import "./NavbarBelt.css";
import amazonLogo from "../../../assets/logo-sprite.png";
import indiaflag from "../../../assets/flag.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function NavbarBelt() {
  return (
    <div className="navbarBelt">
      {/* Left Section: Logo & Location (Wrapped with Link) */}
      <Link to="/" className="navbarBelt-left-link" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
       <div className="navbarBelt-left">
  <div className="amazon-logo-wrapper">
    <div 
      className="amazon-sprite-logo"
      title="Amazon Logo"
      style={{ backgroundImage: `url(${amazonLogo})` }}
    ></div>
    <span className="amazonInLogo">.in</span>
  </div>
  
  <div className="navbarBelt-location">
    <LocationOnOutlinedIcon sx={{ fontSize: "22px", mt: "10px" }} />
    <div className="navbarBelt-address">
      <div className="navbarBeltaddress-top">Delivering to New Delhi 110059</div>
      <div className="navbarBeltaddress-bottom">Update location</div>
    </div>
  </div>
</div>
      </Link>

      {/* Center Section: Search Bar */}
      <div className="navbarBelt-center">
        <div className="navbarBeltsSearchDiv">
          <div className="navbarBeltsSearchboxAll">
            <div className="navbarBeltsSearchBoxAllText">All</div>
            <ArrowDropDownOutlinedIcon sx={{ fontSize: "22px" }} />
          </div>

          <input
            type="text"
            className="navbarBeltInputSearchBox"
            placeholder="Search Amazon.in"
          />

          <div className="searchIconNavbarBelt">
            <SearchOutlinedIcon className="searchIconNavbarBeltIcon" />
          </div>
        </div>
      </div>

      {/* Right Section: Language, Account, Orders, Cart */}
      <div className="navbarBelt-right-container">
        {/* Language Selector */}
        <div className="navbarBelt-item d-flex-lang">
          <div
            className="indiaFlag"
            title="India Flag"
            style={{ backgroundImage: `url(${indiaflag})` }}
          ></div>
          <div className="IndiacodeNavbarBelt">
            EN
            <ArrowDropDownOutlinedIcon className="indiaCodeNavbarBeltDrp" sx={{ fontSize: "18px" }} />
          </div>
        </div>

        {/* Accounts & Lists */}
        <div className="navbarBelt-item">
          <span className="navbarBeltaddress-top">Hello, sign in</span>
          <div className="navbarBelt-flex-row">
            <span className="navbarBeltaddress-bottom">Account & Lists</span>
            <ArrowDropDownOutlinedIcon sx={{ fontSize: "16px", color: "#a7a7a7" }} />
          </div>
        </div>

        {/* Returns & Orders */}
        <div className="navbarBelt-item">
          <span className="navbarBeltaddress-top">Returns</span>
          <span className="navbarBeltaddress-bottom">& Orders</span>
        </div>

        {/* Cart */}
        <div className="navbarBelt-item navbarBelt-cart">
          <div className="cart-icon-container">
            <span className="cartItemNumberNavbarBelt">4</span>
            <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />
          </div>
          <span className="cart-text">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default NavbarBelt;
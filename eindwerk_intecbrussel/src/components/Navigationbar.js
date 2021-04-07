import React,{useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import "./style/Navigationbar.css";

function Navigation() {
  
  const [picture, setPicture] = useState("images/sla_icon_account.png")

 


  return (
    <div>
      <nav className="navigation">
        <Link to="/" className="text-link">
          <i i className="fab fa-times "/>
          <img src="images/sla slogan .png" className="nav__logo" />
          

        </Link>
        <ul className="nav__links" >
          <Link to="/messageboard" className="text-link" >
            <li>MESSAGEBOARD</li>
          </Link>
          <Link to="/shop" className="text-link" >
            <li>SHOP</li>
          </Link>
          <Link to="/artistboard" className="text-link" >
            <li>ARTISTS</li>
          </Link>
          <Link to="/about" className="text-link" >
            <li>ABOUT</li>
          </Link>
          <Link to="/shopcart" >
          <img
              src="images/sla_icon_shop.png"
            />
          </Link>
          <Link to="/account" >
            <img
              src={picture}
            />
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

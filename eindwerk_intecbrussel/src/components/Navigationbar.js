import React from "react";
import { Link } from "react-router-dom";
import "./style/Navigationbar.css";

function Navigation() {
  return (
    <div>
      <nav className="navigation">
        <Link to="/" className="text-link">
          <h1 className="nav__logo">SUPPORT YOUR <span>LOCAL ARTISTS</span></h1>
        </Link>
        <ul className="nav__links" >
          <Link to="/messageboard" className="text-link">
            <li>MESSAGEBOARD</li>
          </Link>
          <Link to="/shop" className="text-link">
            <li>SHOP</li>
          </Link>
          <Link to="/artistboard" className="text-link">
            <li>ARTISTS</li>
          </Link>
          <Link to="/shopcart">
          <img
              src="images/sla_icon_shop.png"
            />
          </Link>
          <Link to="/account">
            <img
              src="images/sla_icon_account.png"
            />
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

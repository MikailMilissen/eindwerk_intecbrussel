import React,{useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import "./style/Navigationbar.css";


function Navigation(props) {
  
  const [picture, setPicture] = useState("images/sla_icon_account.png")

  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  
  const closeMobileMenu = () => setClick(false);

  const [open, setOpen] = useState(false)

  return (
    <div>
      <nav className="navigation">
        <Link to="/" className="text-link">
        <i className = "fa fa-bars" style={{float:"right", margin:"1rem", padding:"0.5rem",}} onClick={handleClick}/>
          <img src="images/sla slogan .png" className="nav__logo" />
          
    

        </Link>
        <ul className= {click ? "nav__links_mobile" : "nav__links"} >
          <Link to="/messageboard" className="text-link mobile-text" onClick={closeMobileMenu}  >
            <li>MESSAGEBOARD</li>
          </Link>
          <Link to="/shop" className="text-link mobile-text" onClick={closeMobileMenu} >
            <li>SHOP</li>
          </Link>
          <Link to="/artistboard" className="text-link mobile-text" onClick={closeMobileMenu}  >
            <li>ARTISTS</li>
          </Link>
          <Link to="/about" className="text-link mobile-text" onClick={closeMobileMenu} >
            <li>ABOUT</li>
          </Link>
          <Link to="/shopcart"onClick={closeMobileMenu} >
          <img
              src="images/sla_icon_shop.png"
            />
          </Link>
          <Link to="/Profile"onClick={() => setOpen(!open)} >
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

import React from "react";
import logo from "../../assests/logo.svg";
import "./Navbar.scss";
import { Link,useNavigate } from'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <img src={logo} alt="" className="logo" />
      <Link to="\ca.thomso.in" target="_blank"><h2 >CA Portal</h2></Link>
      <Link to='\zonals.thomso.in' target="_blank"><h2>Zonals</h2></Link>
      
      <button onClick={() => navigate('/login')} className="home-login">LOGIN</button>
    </div>
  );
}

export default Navbar;

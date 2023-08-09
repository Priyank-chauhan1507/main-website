import React from "react";
import logo from "../../assests/logo.png";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="" className="logo" />
      <h2>CA Portal</h2>
      <h2>Zonals</h2>
      <button>LOGIN</button>
    </div>
  );
}

export default Navbar;

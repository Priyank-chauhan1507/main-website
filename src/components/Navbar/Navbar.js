import React from "react";
import logo from "../../assests/logo.svg";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="" className="logo" />
      <button>LOGIN</button>
    </div>
  );
}

export default Navbar;

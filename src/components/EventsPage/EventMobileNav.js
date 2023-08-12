import React from "react";
import "./eventmobnav.css";
import logo from "./images/logo.svg";
import ham from "./images/ham.svg";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar/Navbar"
const EventMobileNav = () => {
  const [open, setOpen] = useState(null);
  return (
    <>
      <div className="event-mob-nav-container">
        <Link to="/">
          <img src={logo} alt="Thomso" />
        </Link>
        {!open ? (
          <GiHamburgerMenu
          style={{ zIndex: "1000", color: "white" ,marginRight: "45px"}}
            size={"30px"}
            onClick={() => setOpen(!open)}
          />
        ) : (
          <ImCross
          
            size={"30px"}
            style={{ zIndex: "1000", color: "white" ,marginRight: "45px"}}
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      {open && <Dropdown />}
    </>
  );
};

export default EventMobileNav;

import React , { useState } from 'react'
import "./MedianavStyle.css"
import logo from "../../assests/logo.svg";
import Cross from "../../assests/cross.webp";
import { Link, useNavigate } from "react-router-dom";
import imgnav from "../../assests/imgnav.webp";
import logo1 from "../../assests/Logo23.svg";
import { RxCross2 } from "react-icons/rx";

export default function Medianav0() {
  const [open, setOpen] = useState(true);
  const [isActive, setisActive] = useState(false);
  const handleClick1 = () => {
    setisActive(!isActive);
  };
  const generalDetails = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Why visit Thomso? ",
      to: "/",
    },
    {
      name: "Zonals",
      to: "https://zonals.thomso.in",
    },
    {
      name: "MUN",
      to: "/newprofile",
    },
    {
      name: "Spons",
      // to: "/newprofile",
      to: "/",
      target:"_blank"
      
    },
    {
      name: "Contact Us",
      to: "/",
    },
  ];
  return (
    <div>
          <div className="hamburg">
        <div className="hamburg-logo"><Link to='/'><img src={logo} alt="" /></Link> </div>
        <div className="hamburg-style">
            <div className="spanlist" onClick={handleClick1}> 
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
      </div>
      <div className={`allData ${isActive ? "leftPos" : "notLeftPos"}`}>
        <div className="navMainImg" onClick={handleClick1}>
          <p id="cross">
            <RxCross2 size={28} />
          </p>
        </div>
      
        {generalDetails.map((post, idx) => {
          return (
            <div key={idx} className="generalDetails">
              <Link to={post.to} target={post.target}>{post.name} </Link>
            </div>
          );
        })}
          </div>
    </div>
  )
}

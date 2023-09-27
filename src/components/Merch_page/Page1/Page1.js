import React, { useState } from "react";
import "./Page1.css";
import ellipse from "../../../assests/Ellipse 129.png";
import product from "../../../assests/Group 37501.png";
import Navbar from "../../Merch_page/Navbar_merch/Navbar_merch";
import Footer from "../../Navbar/WebNavbarNew";
// import tshirt1front from "../../../assests/t1front.webp"
// import tshirt1back from "../../../assests/t1back.webp"
// import tshirt2front from "../../../assests/t2front.webp"
// import tshirt2back from "../../../assests/t2back.webp"
import tshirt3front from "../../../assests/tshirt3front.webp";
import tshirt3back from "../../../assests/tshirt3back.webp";
import tshirt3front2 from "../../../assests/tshirt3front2.webp";
import tshirt3back2 from "../../../assests/tshirt3back2.webp";
import { Link } from "react-router-dom";
import Page2 from "../Page2/Page2";
import tshirt4front1 from "../../../assests/vibe.webp";

import tshirt5front1 from "../../../assests/5.webp";

import tshirt6front1 from "../../../assests/orng.webp";

import tshirt7front from "../../../assests/Lee tee fin frnt.webp";
import merchBg from "../../../assests/mrechbg.webp";
import merchSmily from "../../../assests/merchsmily.webp";
import orng from "../../../assests/orng.webp";
import orng1 from "../../../assests/orng (1).png";
import orng2 from "../../../assests/orng (2).png";
import orng3 from "../../../assests/orng(3).png";

function Page1() {
  const data = [
    {
      id: 1,
      price: 350,
      
      name: "Feel The Thomso vibe ",
      img: orng2,
    },
    {
      id: 2,
      price: 350,
      name: "The Ellyx Tee  ",
      img: orng1,
      
    },
    {
      id: 3,
      price: 350,
      name: "The Thomso Tee",
      img:orng,
      
    },
    
    {
    
      id: 4,
      price: 350,
      name: "The Thomso king",
      img:orng3,
    },
  ];

  return (
    <>
      <div className="merchPage1">
        <Navbar />
        <div className="merch_Page1">
          <div className="home_merchpage">
            {/* <div className="merch_bg_img"> */}
              {/* <img src={merchBg} className="merch_Bg" alt="merch_Bg" /> */}
            {/* </div> */}
            <div className="merchSmilediv">
              <img src={merchSmily} className="merch_Smile" alt="merch_Smile" />
            </div>
            <div className="home_text">
              <div className="home_heading">
                <h1>Own a piece of Thomso’23</h1>
                <h1>Grab your tees now!</h1>
                {/* <img src={merchBg} className="merch_Bg" alt="merch_Bg"/> */}
              </div>
              {/* <div className="home_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </div> */}
            </div>
            {/* <div className="ellipse">
                <img className="ell-img" src={ellipse} alt="..." />
              </div> */}
          </div>
          {/* <div className="products_hr">
              <hr />
              <div className="text1">
                <p>8 Products</p>
              </div>
              <hr />
            </div> */}
          <div className="product">
            {data.map(({ id, img, price, name }) => {
              return (
                <>
                  <Link to={`/merch_page2/${id}`}>
                    <div className="product1" key={id}>
                      <div className="prod_img">
                        <img className="product-merch" src={img} alt="..." />
                      </div>
                      <div className="text">
                        <div className="prod_name">
                          <p className="product_name">{name}</p>
                        </div>
                        <br></br>
                        <div className="price">
                          <p className="price1">Rs. {price}/- <span className="price3">Rs. 700/-</span> <span className="offer">(50% off)</span> </p>
                          {/* <p className="price2">Rs.100</p> */}
                        </div>
                      </div>
                    </div>
                    <hr />
                  </Link>
                </>
              );
            })}

            <hr />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Page1;

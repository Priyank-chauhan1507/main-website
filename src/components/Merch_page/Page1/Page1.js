import React, { useState } from "react";
import "./Page1.css";
import ellipse from "../../../assests/Ellipse 129.png";
import product from "../../../assests/Group 37501.png";
import Navbar from "../../EventsNavbar/Eventsnavbar";
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

function Page1() {
  const data = [
    {
      id: 1,
      price: 350,
      Name: "Feel The Thomso vibe ",
      img: tshirt4front1,
    },
    {
      id: 2,
      price: 350,
      Name: "The Ellyx Tee  ",
      img: tshirt5front1,
    },
    {
      id: 3,
      price: 350,
      Name: "The Thomso Tee",
      img: tshirt6front1,
    },
    // {
    //   id: 2,
    //   price: 350,
    //   Name: "THOMSO UNISEX TSHIRT",
    //   img: [
    //     {
    //       id: 1,
    //       imgfront: tshirt3front,
    //       imgback: tshirt3back,
    //     },
    //     {
    //       id: 2,
    //       imgfront: tshirt3front2,
    //       imgback: tshirt3back2,
    //     },
    //   ],
    // },
    {
      id: 4,
      price: 350,
      Name: "The Thomso king",
      img: tshirt7front,
    },
  ];

  return (
    <>
      <div className="merchPage1">
        <Navbar />
        <div className="merch_Page1">
          <div className="home_merchpage">
            <div className="merch_bg_img">
              <img src={merchBg} className="merch_Bg" alt="merch_Bg" />
            </div>
            <div className="merchSmilediv">
              <img src={merchSmily} className="merch_Smile" alt="merch_Smile" />
            </div>
            <div className="home_text">
              <div className="home_heading">
                <h1>Thomso Merch</h1>
                <h1>IIT Roorkee</h1>
              </div>
              <div className="home_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </div>
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
                      <div>
                        <img className="product-merch" src={img} alt="..." />
                      </div>
                      <div className="text">
                        <div className="prod_name">
                          <p className="product_name">{name}</p>
                        </div>
                        <div className="price">
                          <p className="price1">{price} </p>
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

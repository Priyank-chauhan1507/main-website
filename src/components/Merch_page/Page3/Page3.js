import React, { useEffect, useState } from "react";
import productImg from "../../../assests/productimg.svg";
import "./Page3.css";
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Footer from "../../Navbar/WebNavbarNew";

function Page3(props) {
  const { Cart } = props;

  const RemoveItem = (id) => {
    return localStorage.removeItem(id);
  }

  return (
    <>
      <div className="merchPage3">
        <Navbar />
        <div className="main_body">
          <div className="heading_cart">
            <h1>YOUR CART</h1>
          </div>
          <div className="cart_cont">
            <div className="title_cart">
              <div className="product_title">
                <h3>product</h3>
              </div>
              <div className="other_title">
                <h3>price</h3>
                <h3>quantity</h3>
                <h3>total</h3>
              </div>
            </div>
            {Cart &&
              Cart.map(({ id, Name, color, price, size, quantity }) => {
                return (
                  <div className="cart_status" key={id}>
                    <div className="product_status">
                      <img
                        src={productImg}
                        className="prod_img"
                        alt="prod_img"
                      />
                      <div className="prod_discription">
                        <div className="prod_name">
                          <h3>{Name}</h3>
                        </div>
                        <div className="prod_size">
                          <h3>{size}</h3>
                        </div>
                        <div className="prod_button">
                          <button className="prod_button1" onClick={() => {RemoveItem(id)}}>REMOVE</button>
                        </div>
                      </div>
                    </div>
                    <div className="product_discription">
                      <div className="price_value">
                        <h3>{price}</h3>
                      </div>
                      <div className="quantity_value">
                        <h3>{quantity}</h3>
                      </div>
                      <div className="total_price">
                        <h3>{quantity*price}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}

            <div className="cart_footer">
              <div className="final_fare">
                <div className="subtotal">
                  <h3 className="subTotal">subtotal</h3>
                  <h3 className="value">RS.350</h3>
                </div>
                <div className="tax_disclaimer">
                  <h4>Shipping & taxes calculated at checkout</h4>
                </div>
              </div>
              <div className="footer_button">
                <button className="prod_button2">CONTINUE SHOPPING</button>
                <button className="prod_button2">UPDATE</button>
                <button className="prod_button3">CHECK OUT</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Page3;

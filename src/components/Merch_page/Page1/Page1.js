import React from 'react'
import './Page1.css'
import ellipse from '../../../assests/Ellipse 129.png'
import product from '../../../assests/Group 37501.png'
import Navbar from "../../EventsNavbar/Eventsnavbar"
import Footer from "../../Navbar/WebNavbarNew"

function Page1() {
  return (
    <>
    <div className='merchPage1'>
    <Navbar />
    <div className='merch_Page1'>
      <div className="home_merchpage">
        <div className="home_text">
            <div className="home_heading">
            <h1>Thomso Merch</h1>
            <h1>IIT Roorkee</h1>
            </div>
            <div className="home_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
        </div>
        <div className="ellipse">
            <img className='ell-img' src={ellipse} alt="..." />
        </div>
    </div>
    <div className="products_hr">
        <hr />
        <div className="text1">
            <p>8 Products</p>
        </div>
        <hr />
    </div>
    <div className="product">
        <div className="product1">
            <div>
                <img className='product-merch' src={product} alt="..." />
            </div>
                <div className="text">
                <p className="product_name">THOMSO UNISEX TSHIRT</p>
                <div className="price">
                <p className="price1">Rs.350 </p>
                <p className="price2">Rs.100</p>
                </div>
            </div>
            </div>
            <hr />
        <div className="product2">
                <div>
                    <img className='product-merch' src={product} alt="..." />
                </div>
                    <div className="text">
                    <p className="product_name">THOMSO UNISEX TSHIRT</p>
                    <div className="price">
                    <p className="price1">Rs.350 </p>
                    <p className="price2">Rs.100</p>
                    </div>
                </div>
                </div>
                <hr />
        <div className="product3">
            <div>
                <img className='product-merch' src={product} alt="..." />
            </div>
            <div className="text">
                <p className="product_name">THOMSO UNISEX TSHIRT</p>
                <div className="price">
                    <p className="price1">Rs.350 </p>
                    <p className="price2">Rs.100</p>
                </div>
                </div>
                </div>
                <hr />
        <div className="product4">
            <div>
                <img className='product-merch' src={product} alt="..." />
            </div>
            <div className="text">
                <p className="product_name">THOMSO UNISEX TSHIRT</p>
            <div className="price">
                <p className="price1">Rs.350 </p>
                <p className="price2">Rs.100</p>
            </div>
            </div>
            </div>
            <hr />
        <div className="product5">
            <div>
                <img className='product-merch' src={product} alt="..." />
            </div>
            <div className="text">
                <p className="product_name">THOMSO UNISEX TSHIRT</p>
            <div className="price">
                <p className="price1">Rs.350 </p>
                <p className="price2">Rs.100</p>
            </div>
            </div>
            </div>
            <hr />
        <div className="product6">
            <div>
                <img className='product-merch' src={product} alt="..." />
            </div>
            <div className="text">
                <p className="product_name">THOMSO UNISEX TSHIRT</p>
            <div className="price">
                <p className="price1">Rs.350 </p>
                <p className="price2">Rs.100</p>
            </div>
            </div>
            </div>
            <hr />
        <div className="product7">
            <div>
                <img className='product-merch' src={product} alt="..." />
            </div>
            <div className="text">
                <p className="product_name">THOMSO UNISEX TSHIRT</p>
            <div className="price">
                <p className="price1">Rs.350 </p>
                <p className="price2">Rs.100</p>
            </div>
            </div>
            </div>
            <hr />
        <div className="product8">
            <div>
                <img className='product-merch' src={product} alt="..." />
            </div>
            <div className="text">
                <p className="product_name">THOMSO UNISEX TSHIRT</p>
            <div className="price">
                <p className="price1">Rs.350 </p>
                <p className="price2">Rs.100</p>
            </div>
            </div>
            </div>
            <hr />
    </div>
    
    </div>
    <Footer />
    </div>
    </>
  )
}

export default Page1

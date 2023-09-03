import React, { useState } from "react";
import "./FAQ.css";
import img1 from "../../../assests/Cross.webp";
import {AiOutlineMinus, AiFillPlusCircle } from 'react-icons/ai';

function FAQ() {
var acc = document.getElementsByClassName("accordion_1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
  return (
    <div className="MUN_FAQ_main_div">
      <div className="mun_faq_heading">FAQS</div>
      <div className="accordion">
        <div className="left_num_faq">
            01 
        </div>
        <div className="right_mun_faq_head">
        What are the NFTs ?
        <AiFillPlusCircle class="accordion_1 plus_btn_mun" />
      <div class="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
      <div className="left_num_faq">
            02
        </div>
        <div className="right_mun_faq_head">
        How do i get NFTs?
        <AiFillPlusCircle class="accordion_1"/>
      <div class="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
      <div className="left_num_faq">
            03
        </div>
        <div className="right_mun_faq_head">
      How can we buy your NFTs?
      <AiFillPlusCircle class="accordion_1"/>
      <div class="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
      <div className="left_num_faq">
            04
        </div>
        <div className="right_mun_faq_head">
      Who are the Team behind the Project? 
      <AiFillPlusCircle class="accordion_1"/>
      <div class="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default FAQ;

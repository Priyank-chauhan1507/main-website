  import React, { useState } from "react";
import "./FAQ.css";
import img1 from "../../../assests/Cross.webp";
import FAQ1 from "../../../assests/FAQS.png";
import {
  AiOutlineMinus,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

function FAQ() {
  const [plus, setPlus] = useState({
    "1st": true,
    "2nd": true,
    "3rd": true,
    "4th": true,
  });
  return (
    <div className="MUN_FAQ_main_div">
      <div className="FAQdiv">
        <img src={FAQ1} className="FAQimg" alt="" />
      </div>
      <div className="accordion">
        <div className="left_num_faq">01</div>
        <div className="right_mun_faq_head">
          What are the NFTs ?
          {plus["1st"] ? (
            <AiFillPlusCircle
              class="accordion_1 plus_btn_mun"
              onClick={() => {
                setPlus({ ...plus, ["1st"]: false });
              }}
            />
          ) : (
            <>
              <AiFillMinusCircle
                class="accordion_1 plus_btn_mun"
                onClick={() => {
                  setPlus({ ...plus, ["1st"]: true });
                }}
              />
              <div class="panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
        <div className="left_num_faq">02</div>
        <div className="right_mun_faq_head">
          How do i get NFTs?
          {plus["2nd"] ? (
            <AiFillPlusCircle
              class="accordion_1 plus_btn_mun"
              onClick={() => {
                setPlus({ ...plus, ["2nd"]: false });
              }}
            />
          ) : (
            <>
              <AiFillMinusCircle
                class="accordion_1 plus_btn_mun"
                onClick={() => {
                  setPlus({ ...plus, ["2nd"]: true });
                }}
              />
              <div class="panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
        <div className="left_num_faq">03</div>
        <div className="right_mun_faq_head">
          How can we buy your NFTs?
          {plus["3rd"] ? (
            <AiFillPlusCircle
              class="accordion_1 plus_btn_mun"
              onClick={() => {
                setPlus({ ...plus, ["3rd"]: false });
              }}
            />
          ) : (
            <>
              <AiFillMinusCircle
                class="accordion_1 plus_btn_mun"
                onClick={() => {
                  setPlus({ ...plus, ["3rd"]: true });
                }}
              />
              <div class="panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
        <div className="left_num_faq">04</div>
        <div className="right_mun_faq_head">
          Who are the Team behind the Project?
          {plus["4th"] ? (
            <AiFillPlusCircle
              class="accordion_1 plus_btn_mun"
              onClick={() => {
                setPlus({ ...plus, ["4th"]: false });
              }}
            />
          ) : (
            <>
              <AiFillMinusCircle
                class="accordion_1 plus_btn_mun"
                onClick={() => {
                  setPlus({ ...plus, ["4th"]: true });
                }}
              />
              <div class="panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ;

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
        Where can I register for Thomso?
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
              <div className="panel">
                <p>
                Registration can be done at https://thomso.in/register 
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
        What are the agendas of the IITR MUN 2022?
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
              <div className="panel">
                <p>
                There are three committees this year:  <br />
                AIPPM: Evaluating the ongoing ethnic clashes in Manipur 
                UNGA: Deliberation over unlawful occupation of territory and forced governance with special emphasis on Israel Palestine conflict
                INDIAN WAR CABINET: Bangladesh Liberation War of 1971 <br />
                https://thomso.in/events 
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
        What will be included in the registration fees?
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
                Registration fee is Rs.2799+taxes. <br />
                It will include accommodation(compulsory for girls) for three days, breakfast and lunch, goodies, participation in all events and pronites. <br /> 
                What about dinner? <br />
                At the time of dinner, pronites will be going on but participants could avail the facilities of stalls and canteens.
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
        How do I get the details/rulebook for any particular event?
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
                Details can be found at - https://thomso.in/events 
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
        <div className="left_num_faq">05</div>
        <div className="right_mun_faq_head">
        What are the dates of IITR MUN?
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
                IITR MUN is a two days conference and will be held from 14 October to 15 October
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
        <div className="left_num_faq">06</div>
        <div className="right_mun_faq_head">
        What is the prize worth of the event?
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
                The prize worth is 100k
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

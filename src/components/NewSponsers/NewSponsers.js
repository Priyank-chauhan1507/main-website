import React from "react";
import "./NewSponsers.css";
import Navbar from "../EventsNavbar/Eventsnavbar";

import SponsCont from "../../assests/sponscont.png";
import spons1 from "../../assests/spons1.png";
import spons2 from "../../assests/spons2.png";
import spons3 from "../../assests/spons3.png";
import line from "../../assests/Line 2.png";
import cloud from "../../assests/sponsbgcloud.png";
import SponsBox2 from "../../assests/sponsbox2.png";
import SponsBox3 from "../../assests/sponsbox3.png";
import SponsBox4 from "../../assests/sponsbox4.png";
import backg from "../../assests/sponsback.png";
import sponsbox from "../../assests/spons_box.png";
import Sponsbox from "./Sponsbox";

import sbi from "../../assests/sbi.png";
import nextias from "../../assests/Next ias.png";
import rec from "../../assests/REC.png";
import anantraj from "../../assests/Anant Raj.png";
import bailey from "../../assests/bailey.jpg";

import tatachem from "../../assests/tatachemicals.png";
import iitraa from "../../assests/iitraa.jpg";
import sparx from "../../assests/sparx.png";
import treks from "../../assests/trek.png";
import pnb from "../../assests/pnb.png";
import ongc from "../../assests/ONGC.png";

import fastrack from "../../assests/Fastrack Perfumes White Logo.jpg";
import unibic from "../../assests/download.png";
import best from "../../assests/BEST_Undertaking_logo.png";
import rohde from "../../assests/rohde.png";
import shapoorji from "../../assests/Shapoorji Pallonji Logo.jpg";
import redchief from "../../assests/red chief.jpeg";

import madame from "../../assests/madame.jpg";
import bonkers from "../../assests/bonkers.png";
import munjal from "../../assests/munjal.jpg";
import funflips from "../../assests/funflips.png";
import stockdaddy from "../../assests/stockdaddy.avif";

import eil from "../../assests/eil.png";
import dsfm from "../../assests/DSM.jpg";
import lapcare from "../../assests/Lapcare.png";
import wackers from "../../assests/wackers.png";
import vlsi from "../../assests/VLSI Logo .jpg";

import fragile from "../../assests/fragile.png";
import dkms from "../../assests/DKMS BMST.jpeg";
import peta from "../../assests/peta.png";
import luxor from "../../assests/luxor.png";
import parsan from "../../assests/parsan.webp";

import pizleo from "../../assests/pizleo.png";
import continental from "../../assests/continental.webp";
import deals from "../../assests/deals.png";
import layer from "../../assests/layer.png";
import tooyum from "../../assests/Too-Yoom-2.png";

import plum from "../../assests/plum.png";
import abhibus from "../../assests/Abhi Bus.png";
import young from "../../assests/yif.png";
import cloudx from "../../assests/cloudx.jpg";
import course from "../../assests/course.png";

import lakshita from "../../assests/lakshita.webp";
import thrill from "../../assests/thrill.png";
import IES from "../../assests/IES.jpg";
import zebronics from "../../assests/zebronics.png";
import tessco from "../../assests/tessco.jpg";

import dd from "../../assests/dd.jpg";
import orion from "../../assests/orion.png";
import crystal from "../../assests/crystal.jpg";
import skippi from "../../assests/skippi.png";
import yardley from "../../assests/yardley.png";

import study from "../../assests/study.png";
import westland from "../../assests/rVz1fK6C6BEgO9nbEkZ9CjntXY.webp";
import edwim from "../../assests/edvin.png";
import skillhub from "../../assests/skill.webp";
import safex from "../../assests/safex.png";

import ace from "../../assests/ace.png";
import denver from "../../assests/denver_logo_600x.webp";
import kabbadi from "../../assests/kabaddiadda logo png.png";
import indinoir from "../../assests/Indinoir logo 1.jpg";
import intern from "../../assests/internshala_og_image.webp";
import NewSPONSORsmobile from "./NewSponsersmobile";

import philips from "../../assests/philips.webp";
import bingo from "../../assests/bingo.png";
import instax from "../../assests/instax.png";
import top from "../../assests/top.png";
import wowl from "../../assests/wowl.png";
import berrylush from "../../assests/berrylush.jpeg";
import techno from "../../assests/techno.png";
import fitcamp from "../../assests/fitcamp.png";
import handilane from "../../assests/Handilane.webp";
import heroLogo from "../../assests/herologo.webp";
import pepsiLogo from "../../assests/indieblog_pepsi_logo_history_2014.webp";
import breezeLogo from "../../assests/breeze.webp";
import titlesponsboxbg from "../../assests/title_spons_box_img.png";
import cotitlesponsboxbg from "../../assests/co_title_spons_box_img.png";
import cotitlesponsboxbg2 from "../../assests/co_title_spons_box_img_2.png";
import gensponsbg from "../../assests/gen_spons_bg.png";

function NewSPONSORs() {
  return (
    <>
      <div className="spons_home">
        {/* <div className='spons_pcview'> */}
        <div className="navbar">
          <Navbar color="black" />
        </div>

        <img src={backg} alt="" />

        <div className="spons_content">
          {/* <img src={cloud} alt=''/> */}

          <div className="heading1">
            <p>OUR SPONSORS</p>
          </div>

          <div className="spons_box">
            <div className="spons_box1">
              <img src={SponsCont} alt="" />
              <div className="spons_cont" style={{ marginTop: "-31vh" }}>
                <p className="title_size">TITLE SPONSOR</p>
                <div className="spons_img">
                  <img className="titlesponsimg" src={breezeLogo} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box1">
              <img src={SponsBox2} alt="" />
              <div className="spons_cont2">
                <p className="title_size">CO-TITLE SPONSOR</p>
                <div className="spons_img">
                  <img className="co-titleimg" src={heroLogo} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box2">
              <img src={SponsBox3} alt="" />
              <div className="spons_cont2bev" style={{ marginTop: "-44vh" }}>
                <p className="title_size"> BEVARAGE PARTNER</p>
                <div className="spons_img">
                  <img className="beverageimg" src={pepsiLogo} alt="" />
                </div>
              </div>
            </div>

            {/* <Sponsbox
                    id="1"
                    img1={spons1}
                    img2={spons2}
                    img3={spons3}
                    img4={spons1}
                    img5={spons2}
                    t1="Banking Partner"
                    t2="Banking Partner"
                    t3="Banking Partner"
                    t4="Banking Partner"
                    t5="Banking Partner"
                /> */}

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>BANKING PARTNER</p>
                  <p>EDUCATION PARTNER</p>
                  <p>ELECTRICITY PARTNER</p>
                  <p>PAYMENT PARTNER</p>
                  <p className="last">INFRASTRUCTURE PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={sbi} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={nextias} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={rec} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={pnb} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={anantraj} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>HYDRATION PARTNER</p>
                  <p>GOLD PARTNER</p>
                  <p>ALUMNI PARTNER</p>
                  <p>DIAMOND SPONSOR</p>
                  <p>PLATINUM PARTNER</p>
                  {/* <p className='last'>PAYMENT PARTNER</p> */}
                </div>
                <div className="spons_img2">
                  <img className="brand" src={bailey} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand" src={tatachem} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={iitraa} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={treks} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={ongc} alt="" />
                  {/* <img className='last' src={line} alt=''/>
                        <img className='brand last'  src={pnb} alt=''/> */}
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>MAJOR SPONSOR</p>
                  <p>MERCHANDISE PARTNER</p>
                  <p>MAJOR SPONSOR</p>
                  <p>FRAGRANCE PARTNER</p>
                  <p className="last">FOOTWEAR PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={shapoorji} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={bonkers} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={rohde} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={fastrack} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={redchief} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>MAJOR SPONSOR</p>
                  <p>SNACKING PARTNER</p>
                  <p>MAJOR SPONSOR</p>
                  <p>VLSI PARTNER</p>
                  <p className="last">SPONSOR</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={philips} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={bingo} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={munjal} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={vlsi} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={eil} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>DESSERT PARTNER</p>
                  <p>SPONSOR</p>
                  <p>STATIONARY PARTNER</p>
                  <p>MAJOR SPONSOR</p>
                  <p className="last">GOLD SPONSOR</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={wackers} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={lapcare} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={luxor} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={parsan} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={continental} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>CO SPONSOR</p>
                  <p>HEALTHY SNACKING PARTNER</p>
                  <p>BATH AND BODY PARTNER</p>
                  <p>MOMENTS PARTNER</p>
                  <p className="last">ZONALS TRAVEL PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={layer} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={tooyum} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={plum} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={instax} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={abhibus} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>CO SPONSOR</p>
                  <p>Entertainment and Adventure Partner</p>
                  <p>MAJOR SPONSOR</p>
                  <p>OVERSEAS EDUCATION PARTNER</p>
                  <p className="last">LEARNING PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={IES} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={crystal} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={orion} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={top} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={wowl} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>WORKSHOP PARTNER</p>
                  <p>SUPPLY CHAIN PARTNER</p>
                  <p>MAJOR SPONSOR</p>
                  <p>PERFUME PARTNER</p>
                  <p className="last">SPORTS SPONSOR</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={skillhub} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={safex} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={berrylush} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={denver} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={kabbadi} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>MAJOR SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                  <p className="last">MAJOR SPONSOR</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={indinoir} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={techno} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={intern} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={fitcamp} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={dkms} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>MAJOR SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                  <p className="last">EVENTS PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={peta} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={fragile} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={young} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={handilane} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={madame} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={sponsbox} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading1">
                  <p>EVENTS PARTNER</p>
                  <p>EVENTS PARTNER</p>
                  <p>EVENTS PARTNER</p>
                  {/* <p>WORKSHOP PARTNER</p>
                    <p className='last'>SUPPLY CHAIN PARTNER</p> */}
                </div>
                <div className="spons_img3">
                  <img className="brand" src={dsfm} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={pizleo} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={course} alt="" />
                  {/* <img src={line} alt=''/>
                        <img className='brand' src={skillhub} alt=''/>
                        <img className='last' src={line} alt=''/>
                        <img className='brand last' src={safex} alt=''/> */}
                </div>
              </div>
            </div>

            {/* <div className='spons_box3'>
                <img src={sponsbox} alt=''/>
                <div className='spons_cont3'>
                <div className='spons_heading'>
                    <p>MAJOR SPONSOR</p>
                    <p>FRAGRANCE PARTNER</p>
                    <p>SPORTS PARTNER</p>
                    <p>CO SPONSOR</p>
                    <p className='last'>Skill Development Partner</p>
                    </div>
                    <div className='spons_img2'>
                        <img className='brand' src={ace} alt=''/>
                        <img src={line} alt=''/>
                        <img className='brand' src={denver} alt=''/>
                        <img src={line} alt=''/>
                        <img className='brand' src={kabbadi} alt=''/>
                        <img src={line} alt=''/>
                        <img className='brand' src={indinoir} alt=''/>
                        <img className='last' src={line} alt=''/>
                        <img className='brand last' src={intern} alt=''/>
                    </div>
                </div>
            </div> */}

            {/* <div className='spons_box lastbox'>
                <img src={sponsbox} alt=''/>
                <div className='spons_cont3'>
                <div className='spons_heading'>
                    <p>TITLE SPONSOR</p>
                    <p>TITLE SPONSOR</p>
                    <p>TITLE SPONSOR</p>
                    <p>TITLE SPONSOR</p>
                    <p className='last'>TITLE SPONSOR</p>
                    </div>
                    <div className='spons_img2'>
                        <img className='brand' src={spons1} alt=''/>
                        <img src={line} alt=''/>
                        <img className='brand' src={spons2} alt=''/>
                        <img src={line} alt=''/>
                        <img className='brand' src={spons3} alt=''/>
                        <img src={line} alt=''/>
                        <img className='brand' src={spons3} alt=''/>
                        <img className='last' src={line} alt=''/>
                        <img className='brand last' src={spons3} alt=''/>
                    </div>
                </div>
            </div> */}

            {/* <div className='spons_box3'>
                <img src={SponsBox4} alt=''/>
                <div className='spons_cont3'>
                    <p>BANKING PARTNER</p>
                    <div className='sponstitle'>EDUCATION PARTNER</div>
                    <div className='spons_img'>
                        {/* <img className='brand' src={spons1} alt=''/>
                        <img src={line} alt=''/>
                        <img className='brand' src={spons2} alt=''/>
                        <img src={line} alt=''/>
                        <img className='brand' src={spons3} alt=''/> */}
            {/* </div>
                </div>
                </div> */}
          </div>
        </div>

        {/* </div> */}

        <div className="sponsmobilepg">
          <div className="heading1_mob">
            <p>OUR SPONSORS</p>
          </div>

          <div className="spons_box">
            <div className="spons_box1">
              <img src={titlesponsboxbg} alt="" />
              <div className="spons_cont">
                <p className="title_size">TITLE SPONSOR</p>
                <div className="spons_img">
                  <img className="titlesponsimg" src={breezeLogo} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box1">
              <img src={cotitlesponsboxbg} className="cotitleimg1" alt="" />
              <div className="spons_cont2">
                <p style={{fontSize:"4vw"}}>CO-TITLE SPONSOR</p>
                <div className="spons_img">
                  <img className="co-titleimg" src={heroLogo} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box2">
              <img src={cotitlesponsboxbg2} alt="" />
              <div className="spons_cont2bev">
                <p className="title_size" style={{fontSize:"3vw"}}> BEVARAGE PARTNER</p>
                <div className="spons_img">
                  <img className="beverageimg" src={pepsiLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>BANKING PARTNER</p>
                  <p>EDUCATION PARTNER</p>
                  <p>ELECTRICITY PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={sbi} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={nextias} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={rec} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>PAYMENT PARTNER</p>
                  <p>INFRASTRUCTURE PARTNER</p>
                  <p>HYDRATION PARTNER</p>
                  {/* <p className='last'>PAYMENT PARTNER</p> */}
                </div>
                <div className="spons_img2">
                  <img className="brand" src={pnb} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={anantraj} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={bailey} alt="" />
                  {/* <img className='last' src={line} alt=''/>
                        <img className='brand last'  src={pnb} alt=''/> */}
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>GOLD PARTNER</p>
                  <p>ALUMNI PARTNER</p>
                  <p>DIAMOND SPONSOR</p>
                  {/* <p className='last'>PAYMENT PARTNER</p> */}
                </div>
                <div className="spons_img2">
                  <img className="brand" src={tatachem} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={iitraa} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={treks} alt="" />
                  {/* <img className='last' src={line} alt=''/>
                        <img className='brand last'  src={pnb} alt=''/> */}
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>PLATINUM PARTNER</p>
                  <p>MAJOR SPONSOR</p>
                  <p>MERCHANDISE PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={ongc} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={shapoorji} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={bonkers} alt="" />
                  <img src={line} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>MAJOR SPONSOR</p>
                  <p>FRAGRANCE PARTNER</p>
                  <p>FOOTWEAR PARTNER</p>
                  {/* <p className='last'>PAYMENT PARTNER</p> */}
                </div>
                <div className="spons_img2">
                  <img className="brand" src={rohde} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={fastrack} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand" src={redchief} alt="" />

                  <img src={line} alt="" />
                  {/* <img className='last' src={line} alt=''/>
                        <img className='brand last'  src={pnb} alt=''/> */}
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>MAJOR SPONSOR</p>
                  <p>SNACKING PARTNER</p>
                  <p>MAJOR SPONSOR</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={philips} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={bingo} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={munjal} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>VLSI PARTNER</p>
                  <p className="last">SPONSOR</p>
                  <p>DESSERT PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={vlsi} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={eil} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={wackers} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>SPONSOR</p>
                  <p>STATIONARY PARTNER</p>
                  <p>MAJOR SPONSOR</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={lapcare} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={luxor} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={parsan} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p className="last">GOLD SPONSOR</p>
                  <p>CO SPONSOR</p>
                  <p>HEALTHY SNACKING PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand last" src={continental} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand" src={layer} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={tooyum} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>BATH AND BODY PARTNER</p>
                  <p>MOMENTS PARTNER</p>
                  <p className="last">ZONALS TRAVEL PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img src={line} alt="" />
                  <img className="brand" src={plum} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={instax} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={abhibus} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>CO SPONSOR</p>
                  <p>Entertainment and Adventure Partner</p>
                  <p>MAJOR SPONSOR</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={IES} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={crystal} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={orion} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>OVERSEAS EDUCATION PARTNER</p>
                  <p className="last">LEARNING PARTNER</p>
                  <p>WORKSHOP PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={top} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={wowl} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={skillhub} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>SUPPLY CHAIN PARTNER</p>
                  <p>MAJOR SPONSOR</p>
                  <p>PERFUME PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={safex} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={berrylush} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={denver} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p className="last">SPORTS SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                </div>
                <div className="spons_img2">
                  <img className="brand last" src={kabbadi} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={indinoir} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={techno} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>MAJOR SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                  <p className="last">MAJOR SPONSOR</p>
                </div>
                <div className="spons_img2">
                  <img src={line} alt="" />
                  <img className="brand" src={intern} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={fitcamp} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={dkms} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>MAJOR SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                  <p>MAJOR SPONSOR</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={peta} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={fragile} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={young} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>MAJOR SPONSOR</p>
                  <p className="last">EVENTS PARTNER</p>
                  <p>EVENTS PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img className="brand" src={handilane} alt="" />
                  <img className="last" src={line} alt="" />
                  <img className="brand last" src={madame} alt="" />
                  <img src={line} alt="" />
                  <img className="brand" src={dsfm} alt="" />
                </div>
              </div>
            </div>

            <div className="spons_box3 lastsponsbox">
              <img src={gensponsbg} alt="" />
              <div className="spons_cont3">
                <div className="spons_heading">
                  <p>EVENTS PARTNER</p>
                  <p>EVENTS PARTNER</p>
                </div>
                <div className="spons_img2">
                  <img
                    className="brand lasteventimgspons"
                    src={pizleo}
                    alt=""
                  />
                  <img src={line} alt="" />
                  <img className="brand lstevntimgspons" src={course} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sponsmobview">
        <NewSPONSORsmobile />
      </div>
    </>
  );
}

export default NewSPONSORs;

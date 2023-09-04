import React, { useState } from "react";
import "./Commitee.css";
import Committee from "../../../assests/COMMITTEE.png";
import mun1 from "../../../assests/MUNImg1.png";
import mun2 from "../../../assests/MUNImg2.png";
import mun3 from "../../../assests/MUNImg3.png";
import { ImCross } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function COMMITTEE() {
  const [open, setOpen] = useState("");
  //   const classes = useStyles();
  return (

    <div className="midSectionMUN">
        <div className="Committee">
          <img src={Committee} className="Committee1" alt="" />
        </div>

        <div className="comitte-boxs">
          <div
            className={
              open == "un"
                ? "full_box"
                : open == ""
                ? "comitee-box1"
                : "no_display"
            }
          >
            <div>
              <img src={mun1} alt="UN" className="comitee-box-image3" />
            </div>
            {open == "un" && (
              <span className={"cross_icon"} onClick={() => setOpen("")}>
                <ImCross />
              </span>
            )}
            <div className={open == "un" ? "mid_info2" : "mid_info1"}>
              <div className="comitee-box-text1">
                UNITED NATIONS <br />
                GENERAL ASSEMBLY <br />
                 (UNGA) {" "}
              </div>
              {open == "un" && (
                <div className="comitee_boxInfo">
                  Looking at preceding elections, reform attempts have been made
                  in a way that doesn't hurt the basic tenets of democracy and
                  federalism. 'One Election' is a euphemism for simultaneous or
                  synchronized elections in which voters can exercise their
                  separate choices for both Assembly and Lok Sabha polls in one
                  outing. With one or the other election held at regular
                  intervals, all parties remain "election machines" at all
                  times. Many argue that "One nation, one election" is the need
                  of the hour, whereas many stand against it, arguing that it
                  isn't advantageous to any.{" "}
                </div>
              )}
              {open == "" && (
                <div
                  className="comitee-box-button1"
                  onClick={() => setOpen("un")}
                >
                  <span>More Info</span>
                  <AiOutlineArrowRight />
                </div>
              )}
            </div>
          </div>

          <div
            className={
              open == "parliament"
                ? "full_box"
                : open == ""
                ? "comitee-box2"
                : "no_display"
            }
          >
            <img src={mun2} alt="UN" className="comitee-box-image1" />
            {open == "parliament" && (
              <span className={"cross_icon"} onClick={() => setOpen("")}>
                <ImCross />
              </span>
            )}
            <div className={open == "parliament" ? "mid_info2" : "mid_info1"}>
              <div className="comitee-box-text2">
                ALL INDIA POLITICAL <br />
                PARTY MEET <br />
                &#40; AIPPM &#41;{" "}
              </div>
              {open == "parliament" && (
                <div className="comitee_boxInfo">
                  The dispute and ambiguity over the meaning of "China" and
                  which "China" stemmed from the division of the Republic of
                  China into two Chinas at the "end" of the Chinese Civil War in
                  1955. The PRC rules only Mainland China and has no control but
                  claims Taiwan as part of its territory under its "One China
                  Principle."The situation has been escalating since late 2019,
                  with military actions and, as of recent, the heavy military
                  demonstration by China after Speaker of the House of the
                  United States, Nancy Pelosi, visited Taiwan. We invite
                  delegations to participate in the UNSC, discuss the actions
                  taken, and try and achieve a compromise.{" "}
                  <p style={{ color: "red" }}>
                    Note : Unsc will be double delegastion
                  </p>
                </div>
              )}
              {open == "" && (
                <div
                  className="comitee-box-button2"
                  onClick={() => setOpen("parliament")}
                >
                  <span>More Info</span>
                  <AiOutlineArrowRight />
                </div>
              )}
            </div>
          </div>

          <div
            className={
              open == "harry"
                ? "full_box"
                : open == ""
                ? "comitee-box3"
                : "no_display"
            }
          >
            <img src={mun3} alt="UN" className="comitee-box-image2" />
            {open == "harry" && (
              <span className={"cross_icon"} onClick={() => setOpen("")}>
                <ImCross />
              </span>
            )}
            <div className={open == "harry" ? "mid_info2" : "mid_info1"}>
              <div className="comitee-box-text3">
                INDIAN WAR CABINET
                <br />
                &#40; HISTORIC COMMITTEE &#41;
              </div>
              {open == "harry" && (
                <div className="comitee_boxInfo">
                  Will be revealed during the event{" "}
                </div>
              )}

              {open == "" && (
                <div
                  className="comitee-box-button3"
                  onClick={() => setOpen("harry")}
                  style={{ marginTop: "-35px" }}
                >
                  <span>More Info</span>
                  <AiOutlineArrowRight />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default COMMITTEE;

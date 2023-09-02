import React, { useState } from "react";
import "./Home.css";
import MUNTop from "../../../assests/MUN-Top.webp";
import BG from "../../../assests/MUNBG.webp";
import Committee from "../../../assests/COMMITTEE.png";
import Prizes from "../../../assests/PrizesWorth.png";
import mun1 from "../../../assests/MUN.webp";
import mun2 from "../../../assests/MUN1.webp";
import mun3 from "../../../assests/MUN2.webp";
import Navbar from "../../../components/EventsNavbar/Eventsnavbar";
import Footer from "../../../components/MUN/Footer/Footer";
import Judges from "../../../components/MUN/Judges/Judges";
import { ImCross } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import React, { useState } from "react";
// import "./mun.css";
import { Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import { AiOutlineArrowRight } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
// import mun1 from "../../assets/images/mun1.svg";
// import mun2 from "../../assets/images/mun2.svg";
// import mun3 from "../../assets/images/mun3.svg";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import mun from "./munLogo.png";
// import Hfooter1 from "../NewHome/Hfooter1";
// import { ImCross } from "react-icons/im";
import { makeStyles } from "@material-ui/core/styles";
// import BG2 from "./munBg2.svg"
// import BG1 from "./munBg1.svg"
// import j1 from "./j1.png";
// import j2 from "./j2.png";
// import j3 from "../../assets/images/j3.png";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  textField: {
    fontFamily: "Nofex",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "19px",
    lineHeight: "120%",
  },

  answer: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "32px",
    marginLeft: "3vw",
    color: "#A09FAF",
  },
}));
function Home() {
  const [open, setOpen] = useState("");
  const classes = useStyles();

  return (
    <div className="MUN-bg">
      <img src={BG} className="MUN-Bg" alt="" />
      <Navbar />
      <div className="top-MUN-img">
        <img src={MUNTop} alt="" />
      </div>
      <div className="registerNowBtn">
        <button className="registerNowBtnClick">Registser Now</button>
      </div>
      <div className="prizesWorth">
        <div className="prizesWorthDiv">
          <img src={Prizes} alt="" className="prizesWorth1" />
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed quisque
        auctor suspendisse tortor, risus. Natoque aliquet phasellus orci et a ut
        justo quis. Consequat arcu aliquam consectetur adipiscing cras ultricies
        ornare nec. Vulputate venenatis, blandit blandit
      </div>

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
                ? "comitee-box"
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
                &#40; UNGA &#41;{" "}
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
                ? "comitee-box"
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
                ? "comitee-box"
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
      <div className="judges">
        <Judges />
      </div>

      <div className="FAQheader">FAQs</div>
      <div className="FAQcontainer" style={{ backgroundColor: "transparent" }}>
        <div>
          <Accordion style={{ backgroundColor: "transparent", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.textField}>
                <span className="numberr">01 </span> Where can I register for
                Thomso?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.answer}>
                Registration can be done at -{" "}
                <a
                  style={{ color: "none" }}
                  href="https://thomso.in/register"
                  target="_blank"
                >
                  https://thomso.in/register
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ backgroundColor: "transparent", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.textField}>
                <span className="numberr">02 </span> What are the agendas of the
                IITR MUN 2022?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.answer}>
                There are three committees this year
                <br /> o -UNSC Analysing the China Taiwan military standoff
                <br />o -Harry Porter committee (order of the phoenix)
                Classified
                <br />o -AIPPM- Deliberating on the electoral reforms in India
                with special emphasis on "One Nation One Election."
                <a
                  style={{ color: "none" }}
                  href="https://thomso.in/events"
                  target="_blank"
                >
                  https://thomso.in/events
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ backgroundColor: "transparent", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.textField}>
                <span className="numberr">03 </span> What will be included in
                the registration fees?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.answer}>
                <p>Registration fee is Rs.2799+taxes.</p>
                It will include accommodation(compulsory for girls) for three
                days, breakfast and lunch, goodies, participation in all events
                and pronites.
                <p style={{ margin: "6px" }}></p>
                <p>What about dinner?</p>
                At the time of dinner, pronites will be going on but
                participants could avail the facilities of stalls and canteens.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ backgroundColor: "transparent", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.textField}>
                <span className="numberr">04 </span> How do I get the
                details/rulebook for any particular event?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.answer}>
                Details can be found at -{" "}
                <a
                  style={{ color: "none" }}
                  href="https://thomso.in/events"
                  target="_blank"
                >
                  https://thomso.in/events
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{ backgroundColor: "transparent", color: "#F6F6F6" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.textField}>
                <span className="numberr" style={{ fontFamily: "Nofex" }}>
                  05{" "}
                </span>{" "}
                What are the dates of IITR MUN?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.answer}>
                IITR MUN is a two days conference and will be held from 14
                October to 15 October
                <a
                  style={{ color: "none" }}
                  href="https://thomso.in/events"
                  target="_blank"
                ></a>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{ backgroundColor: "transparent", color: "#F6F6F6" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.textField}>
                <span className="numberr" style={{ fontFamily: "Nofex" }}>
                  06{" "}
                </span>{" "}
                What is the prize worth of the event?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.answer}>
                The prize worth is 80k
                <a
                  style={{ color: "none" }}
                  href="https://thomso.in/events"
                  target="_blank"
                ></a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;

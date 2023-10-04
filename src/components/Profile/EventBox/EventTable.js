import React from "react";
import { useNavigate } from "react-router-dom";

function EventTable() {
  const navigate = useNavigate();

  const onHandleClick = (e) => {
    navigate(`/events/${e}`);
  };
  return (
    <div style={{ top: "10vh", right: "2vw", width: "72vw" }} className="drop">
         <div className="drop-row">
                    <div className="col col-yellow">Choreo</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(76);
                      }}
                    >
                      Footloose (Solo)
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(77);
                      }}
                    >
                      Footloose (Duet)
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(75);
                      }}
                    >
                      Footloose (Team)
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(42);
                      }}
                    >
                      Step up (Solo)
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(43);
                      }}
                    >
                      Step up (Team)
                    </div>
                    <div className="col col-yellow">Da Vinci's Gala</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(56);
                      }}
                    >
                      Art Talkies
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(57);
                      }}
                    >
                      Naqaab
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(58);
                      }}
                    >
                      Paint Fiesta
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(59);
                      }}
                    >
                      Costume Design
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(60);
                      }}
                    >
                      Relay Rangoli
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(61);
                      }}
                    >
                      Live Sketching
                    </div>
                    {/* <div className="nav-events"/> */}
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Fashion</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(29);
                      }}
                    >
                      Campus Diva
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(31);
                      }}
                    >
                      Mr & Ms Thomso
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(78);
                      }}
                    >
                      Vogue
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(63);
                      }}
                    >
                      Coscon
                    </div>
                    <div className="col col-yellow">LITFest</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(16);
                      }}
                    >
                      Literati
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(19);
                      }}
                    >
                      Pictionary
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(21);
                      }}
                    >
                      Spin a Yarn
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(24);
                      }}
                    >
                      Big Ideas
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(27);
                      }}
                    >
                      Desi Twist
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(30);
                      }}
                    >
                      Slam Poetry
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(28);
                      }}
                    >
                      Nerdy Bate
                    </div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Music</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(4);
                      }}
                    >
                      Sargam (Solo)
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(5);
                      }}
                    >
                      Sargam (Duet)
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(3);
                      }}
                    >
                      Sargam (Team)
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(6);
                      }}
                    >
                      Battle Of Bands
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(7);
                      }}
                    >
                      Gully War
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(8);
                      }}
                    >
                      War of DJ'S
                    </div>
                    <div className="col col-yellow">Carnival</div>
                    {/* <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(39);
                      }}
                    >
                      Hunger Games
                    </div> */}
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(40);
                      }}
                    >
                      Sumo Wrestling
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(41);
                      }}
                    >
                      Air Rifle Shooting
                    </div>
                    {/* <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(44);
                      }}
                    >
                      Caricature
                    </div> */}
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(45);
                      }}
                    >
                      Body Zorbing
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(47);
                      }}
                    >
                      Human Foosball
                    </div>
                    {/* <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(49);
                      }}
                    >
                      The Boulevard Games
                    </div> */}
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(50);
                      }}
                    >
                      Tattoo Artist
                    </div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Entertainment</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(17);
                      }}
                    >
                      Thomso's Got Talent(Solo)
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(18);
                      }}
                    >
                      Thomso's Got Talent(Team)
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(20);
                      }}
                    >
                      Open MIC
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(62);
                      }}
                    >
                      The Dank Knight
                    </div>

                    <div className="col col-yellow">Adventure</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(52);
                      }}
                    >
                      Seiger
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(53);
                      }}
                    >
                      Treasure Hunt
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(54);
                      }}
                    >
                      Street Soccer
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(55);
                      }}
                    >
                      Scavenger Hunt
                    </div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Dramatics</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(9);
                      }}
                    >
                      Abhivyakti
                    </div>

                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(79);
                      }}
                    >
                      Nukkad Natak
                    </div>
                    {/* <div className="col colhover">Mimicry</div>
                    <div className="col colhover">Monologue</div> */}

                    {/* <div className="col col-yellow">Marketing and Finance</div> */}

                    <div className="col col-yellow">Marketing and Finance</div>

                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(22);
                      }}
                    >
                      Auction Frenzy
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(23);
                      }}
                    >
                      Corporata
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(25);
                      }}
                    >
                      Mark Sense
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(26);
                      }}
                    >
                      A(d)esign
                    </div>
                    <div className="col col-yellow">Quizzing</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(12);
                      }}
                    >
                      Quriosity
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(13);
                      }}
                    >
                      Telly sporcle
                    </div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Gaming</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(46);
                      }}
                    >
                      Apocalypse
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(48);
                      }}
                    >
                      Queen's Gambit
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(51);
                      }}
                    >
                      Snooker's Elite
                    </div>
                    <div className="col col-yellow">Culinary</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(35);
                      }}
                    >
                      Food Fiesta
                    </div>
                    <div className="col col-yellow">MUN</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(32);
                      }}
                    >
                      IITR-MUN
                    </div>
                    <div className="col col-yellow">Cinematic</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(14);
                      }}
                    >
                      16 Frames
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(15);
                      }}
                    >
                      Box Office
                    </div>

                    {/* <div className="col col-yellow">Cultural Workshops</div> */}
                    {/* <div className="col col-yellow1">Technical Workshops</div> */}
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Online</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(80);
                      }}
                    >
                      Bgmi
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(81);
                      }}
                    >
                      Quizardry
                    </div>
                    <div className="col col-yellow">Night Life</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(1);
                      }}
                    >
                      Silent DJ
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(82);
                      }}
                    >
                      Nightlife Cafe
                    </div>
                    <div
                      className="col colhover "
                      onClick={(e) => {
                        onHandleClick(83);
                      }}
                    >
                      Thomso Karaoke
                    </div>
                    <div className="col col-yellow">New Events</div>
                    {/* <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(84);
                      }}
                    >
                      Sneaker Design(Duet)*
                    </div> */}
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(88);
                      }}
                    >
                      Funk Feets(Solo)*
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(85);
                      }}
                    >
                      Mimicry*
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(86);
                      }}
                    >
                      Monologue*
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(73);
                      }}
                    >
                      Thomsography*
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(87);
                      }}
                    >
                      Vlogging*
                    </div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Fitness</div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(92);
                      }}
                    >
                      Power Lifting
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(89);
                      }}
                    >
                      Body Building
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(91);
                      }}
                    >
                      Burn To Earn
                    </div>
                    <div className="col col-yellow">Cultural Workshop</div>
                    {/* <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(84);
                      }}
                    >
                      Sneaker Design(Duet)*
                    </div> */}
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(93);
                      }}
                    >
                      Irish Dance Workshop
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(94);
                      }}
                    >
                      Live Sketching Workshop
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(95);
                      }}
                    >
                      Salsa Dance Workshop
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(96);
                      }}
                    >
                      Public Speaking
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(97);
                      }}
                    >
                      Dramatics Workshop
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(90);
                      }}
                    >
                      Leadership Skills
                    </div>
                    <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(98);
                      }}
                    >
                      Video Editing Workshop
                    </div>
                  </div>
    </div>
  );
}

export default EventTable;

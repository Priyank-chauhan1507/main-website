import React, { useState, useEffect } from "react";
import logo from "../../assests/logo.svg";
import logo1 from "../../assests/logo2.png";
import axios from "axios";
import bgmobile from "../../assests/bgmobile.webp";
import { useNavigate } from "react-router-dom";
import cross from "../../assests/Cross.webp";
function MobEventnavbar() {
  const navigate = useNavigate();
  // const [event, setevent] = useState(false);
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  };

  const [show, setshow] = useState(true);
  const [user,setUser] = useState({});
  const [display, setdisplay] = useState("none");
  const [show1, setshow1] = useState({ check: false, first: "" });
  localStorage.setItem("show", show);
  const onHandleClick = (e) => {
    navigate(`/events/${e}`);
  };
  useEffect(() => {
    if(localStorage.getItem("token")){
      loadUserData();
      console.log(user);
    };
    }, []);
  const loadUserData = async () => {
    try {
      axios.get(`/apiV1/current_user_participant`).then((res) => {
        setUser(res.data);
        // console.log("data", res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [position, setposition] = useState("relative")
  return (
    <div className="nav-comp1" style={{position:position}}>
      <div className="inner_mob_nav">
        <img
          className="event-nav-left logo-width"
          src={logo}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
        {show ? (
          <>
            <img
              src={logo1}
              alt=""
              onClick={() => {
                show === false ? setshow(true) : setshow(false);
                setdisplay("flex");
                setposition("fixed")
              }}
              className="logo3"
            />
          </>
        ) : (
          <>
            <img
              src={cross}
              alt=""
              onClick={() => {
                show === false ? setshow(true) : setshow(false);
                setdisplay("flex");
                setposition("relative");
              }}
              className="logo2"
            />
          </>
        )}
      </div>

      {show ? (
        <div className="slidebar1 slidebar2" style={{ display: display }}>
          <h4
            onClick={() => {
              navigate("/");
              window.location.reload(false);
            }}
          >
            Home
          </h4>
          <h1
            onClick={() => {
              navigate("/events");
              window.location.reload(false);
            }}
          >
            Events
          </h1>
          <h1
            onClick={() => {
              navigate("/MUN");
              window.location.reload(false);
            }}
          >
            MUN
          </h1>
          {/* {event &&
            events.map((el) => {
              const { par, child } = el;
              return (
                <>
                  <span
                    onClick={() => {
                      show1.check === false
                        ? setshow1({ check: true, first: child[0]?.event })
                        : setshow1({ check: false, first: "" });
                    }}
                  >
                    {par}
                  </span>
                  {show1?.check &&
                    show1?.first === child[0]?.event &&
                    child.map((post) => {
                      return (
                        <h3
                          onClick={() => {
                            post?.href !== null && onHandleClick(post?.href);
                            setshow(false);
                          }}
                        >
                          {post?.event}
                        </h3>
                      );
                    })}
                </>
              );
            })} */}
          <a href="https://ca.thomso.in/" target="_blank">
            <h5>CA Portal</h5>
          </a>
          <a href="https://zonals.thomso.in/" target="_blank">
            <h5>Zonals</h5>
          </a>
          {/* <h1
            onClick={() => {
                {
                  user.payment ?
                  navigate("/iiiiiiii")
                :
                  alert('payment incomplete');
                }
              
              window.location.reload(false);
            }}
          >
            ID-Card
          </h1> */}
          {localStorage.getItem("token") && (
            <h5
              onClick={() => {
                navigate("/profile");
                window.location.reload(false);
              }}
            >
              Profile
            </h5>
          )}
          {localStorage.getItem("token") ? (
            <>
              {/* <img src={profile} alt=""  onClick={() => navigate("/newprofile")} className="ca-profile1" /> */}
              <button
                onClick={handleLogout}
                className="event-regi-btn mob-reg"
                id="registernow"
              >
                LOG OUT
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="event-regi-btn mob-reg"
                id="registernow"
              >
                LOG IN
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="slidebar1" style={{ display: display }}>
          <h4
            onClick={() => {
              navigate("/");
              window.location.reload(false);
            }}
          >
            Home
          </h4>
          {/* <h1
            onClick={() => {
              navigate("/merch_home");
              window.location.reload(false);
            }}
          >
            Merch
          </h1> */}
          <h1
            onClick={() => {
              navigate("/events");
              window.location.reload(false);
            }}
          >
            Events
          </h1>
          <h1
            onClick={() => {
              navigate("/MUN");
              window.location.reload(false);
            }}
          >
            MUN
          </h1>
          {/* {event &&
            events.map((el) => {
              const { par, child } = el;
              return (
                <>
                  <span
                    onClick={() => {
                      show1.check === false
                        ? setshow1({ check: true, first: child[0]?.event })
                        : setshow1({ check: false, first: "" });
                    }}
                  >
                    {par}
                  </span>
                  {show1?.check &&
                    show1?.first === child[0]?.event &&
                    child.map((post) => {
                      return (
                        <h3
                          onClick={() => {
                            post?.href !== null && onHandleClick(post?.href);
                            setshow(false);
                          }}
                        >
                          {post?.event}
                        </h3>
                      );
                    })}
                </>
              );
            })} */}
          <a href="https://ca.thomso.in/" target="_blank">
            <h5>CA Portal</h5>
          </a>
          <a href="https://zonals.thomso.in/" target="_blank">
            <h5>Zonals</h5>
          </a>
          {/* {localStorage.getItem("token") 
          && (
          <h1
            onClick={() => {
              navigate("/iiiiiiii");
              window.location.reload(false);
            }}
            
          >
            ID-Card
          </h1>
          )
          } */}
          {localStorage.getItem("token") && (
            <h5
              onClick={() => {
                navigate("/profile");
                window.location.reload(false);
              }}
            >
              Profile
            </h5>
          )}
          {localStorage.getItem("token") ? (
            <>
              {/* <img src={profile} alt=""  onClick={() => navigate("/newprofile")} className="ca-profile1" /> */}
              <button
                onClick={handleLogout}
                className="event-regi-btn mob-reg"
                id="registernow"
              >
                LOG OUT
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="event-regi-btn mob-reg"
                id="registernow"
              >
                LOG IN
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default MobEventnavbar;

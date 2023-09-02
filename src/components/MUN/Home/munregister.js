// import { Select } from '@material-ui/core';
import React, { useState } from "react";
import "./munreg.css";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigation } from "react-router-dom";
import Select from "react-select";
import CircularProgress from "@mui/material/CircularProgress";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AniButton from "../AnimatedButton/AniButton";
import { fetchMun } from "../User/UserActions";
import { Input, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    width: "100%",
    border: "2px solid #4E4E4E",
    // borderRadius: "6px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  icon: {
    fill: "white",
  },
  root: {
    color: "white",
  },
  input: {
    color: "white",
  },
  textField: {
    width: "100%",
    border: "2px solid #4E4E4E",
    // borderRadius: "6px",
  },
  textFieldBig: {
    width: 600,
    border: "2px solid #4E4E4E",
    // borderRadius: "6px",
  },
  inputLabel: {
    color: "white",
    "&.focused": {
      color: "white",
    },
  },
  formYear: {
    minWidth: 120,
    width: 284,
    border: "2px solid #4E4E4E",
    // borderRadius: "6px",
  },
}));

const choices = [
  { value: "unsc", label: "UNSC" },
  { value: "aippm", label: "AIPPM" },
  {
    value: "harry potter(order of the phoenix)",
    label: "Harry Potter(Order of the Phoenix)",
  },
];
const choices1 = [
  "United States",
  "United Kingdom",
  "China",
  "France",
  "Russian Federation",
  "Japan",
  "Lithuania",
  "Myanmar",
  "special Rep of taiwan",
  "India",
  "south korea",
  "Australia",
  "germany",
  "Vietnam",
  "United Arab Emirates",
].map((state) => ({
  value: state,
  label: state,
}));
const choices2 = [
  "Narendra modi",
  "Amit Shah",
  "Yogi Aditya Nath",
  "Nirmala Sitaraman",
  "Rajnath Singh",
  "J. P. Nadda",
  "Sonia gandhi",
  "Rahul gandhi",
  "Priyanka Gandhi",
  "Sashi tharur",
  "Manmohan singh",
  "Ashok gehlot",
  "Arvind Kejriwal",
  "Manish Sisodia",
  "Raghav Chadda",
  "Uddhav Thackarey",
  "Sanjay Rawat",
  "Eknath Sindhe",
  "Akhilesh Yadav",
  "Dimple Yadav",
  "Azam Khan",
  "Mamta banerjee",
  "mahua moitra",
  "Abhishek Banerjee",
  "Asaduddin Owaisi",
  "Nitesh Kumar",
  "Tejaswi Yadav",
  "Sharad Pawar",
  "Sitaram Yechury",
  "Pinarayi Vijayan",
  "Brinda Karat",
].map((state) => ({
  value: state,
  label: state,
}));
const choices3 = [
  "Aberforth Dumbeldore",
  "Arabella Fig",
  "Rubeus Hagrid",
  "Minerva McGonagall",
  "Filius Flitwik",
  "Severus Snape",
  "Sirius Black",
  "Remus Lupin",
  "Arthur Weasley",
  "Molly Weasley",
  "Bill Weasley",
  "Fleur Delacour",
  "Charlie Weasley",
  "Percy Weasley",
  "Alastor Moody",
  "Kingsley Shacklebolt",
  "Elphias Doge",
  "Hestia Jones",
  "Nymphadora Tonks",
  "Emmeline Vance",
  "Augusta Longbottom",
  "Ron Weasley",
  "Hermoine Granger",
  "Sturgis Podmore",
  "Mundungus Fletcher",
  "Fred Weasley",
  "George Weasley",
  "Deadulus Diggle",
  "Viktor Krum",
  "Igor Karkaroff",
].map((state) => ({
  value: state,
  label: state,
}));

export const Munregister = ({ userDetails, fetchMuns }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const [user, setUser] = useState({
    first_preference: "",
    second_preference: "",
    third_preference: "",
    first_preference_choice_one: "",
    first_preference_choice_two: "",
    first_preference_choice_three: "",
    first_preference_choice_four: "",
    second_preference_choice_one: "",
    second_preference_choice_two: "",
    second_preference_choice_three: "",
    second_preference_choice_four: "",
    third_preference_choice_one: "",
    third_preference_choice_two: "",
    third_preference_choice_three: "",
    third_preference_choice_four: "",
    no_of_mun: "",
  });
  console.log(userDetails);
  //   const navigate = useNavigation()

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userresponse = {
        participant: userDetails?.id,
        first_preference: user.first_preference,
        second_preference: user.second_preference,
        third_preference: user.third_preference,
        first_preference_choice_one: user.first_preference_choice_one,
        first_preference_choice_two: user.first_preference_choice_two,
        first_preference_choice_three: user.first_preference_choice_three,
        first_preference_choice_four: user.first_preference_choice_four,
        second_preference_choice_one: user.second_preference_choice_one,
        second_preference_choice_two: user.second_preference_choice_two,
        second_preference_choice_three: user.second_preference_choice_three,
        second_preference_choice_four: user.second_preference_choice_four,
        third_preference_choice_one: user.third_preference_choice_one,
        third_preference_choice_two: user.third_preference_choice_two,
        third_preference_choice_three: user.third_preference_choice_three,
        third_preference_choice_four: user.third_preference_choice_four,
        no_of_mun: user.no_of_mun,
      };
      const response = await axios.post("/apiV1/mun", userresponse);
      const { data } = response;
      setLoading(false);
      setSuccess(true);
      fetchMuns();
      //   navigate("/verifyemail");
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  const handleChange1 = (first_preference) => {
    setUser({ ...user, first_preference: first_preference?.value });
  };
  const handleChange11 = (first_preference_choice_one) => {
    setUser({
      ...user,
      first_preference_choice_one: first_preference_choice_one?.value,
    });
  };
  const handleChange12 = (first_preference_choice_two) => {
    setUser({
      ...user,
      first_preference_choice_two: first_preference_choice_two?.value,
    });
  };
  const handleChange13 = (first_preference_choice_three) => {
    setUser({
      ...user,
      first_preference_choice_three: first_preference_choice_three?.value,
    });
  };
  const handleChange14 = (first_preference_choice_four) => {
    setUser({
      ...user,
      first_preference_choice_four: first_preference_choice_four?.value,
    });
  };

  const handleChange2 = (second_preference) => {
    setUser({ ...user, second_preference: second_preference?.value });
  };
  const handleChange21 = (second_preference_choice_one) => {
    setUser({
      ...user,
      second_preference_choice_one: second_preference_choice_one?.value,
    });
  };
  const handleChange22 = (second_preference_choice_two) => {
    setUser({
      ...user,
      second_preference_choice_two: second_preference_choice_two?.value,
    });
  };
  const handleChange23 = (second_preference_choice_three) => {
    setUser({
      ...user,
      second_preference_choice_three: second_preference_choice_three?.value,
    });
  };
  const handleChange24 = (second_preference_choice_four) => {
    setUser({
      ...user,
      second_preference_choice_four: second_preference_choice_four?.value,
    });
  };

  const handleChange3 = (third_preference) => {
    setUser({ ...user, third_preference: third_preference?.value });
  };
  const handleChange31 = (third_preference_choice_one) => {
    setUser({
      ...user,
      third_preference_choice_one: third_preference_choice_one?.value,
    });
  };
  const handleChange32 = (third_preference_choice_two) => {
    setUser({
      ...user,
      third_preference_choice_two: third_preference_choice_two?.value,
    });
  };
  const handleChange33 = (third_preference_choice_three) => {
    setUser({
      ...user,
      third_preference_choice_three: third_preference_choice_three?.value,
    });
  };
  const handleChange34 = (third_preference_choice_four) => {
    setUser({
      ...user,
      third_preference_choice_four: third_preference_choice_four?.value,
    });
  };

  return (
    <div className="mun-reg-page">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="u-part">
          <Link to="/mun" className="cross">
            {" "}
            X{" "}
          </Link>

          <div className="txt">
            <div className="text1">MUN REGISTRATION</div>
            <div className="h-line"></div>
          </div>

          <div className="prefer-boxes">
            <div className="prefer-box1">
              <div className="prefer-text">Number of previous Attended MUN</div>
              <TextField
                label="Number of previous Attended MUN"
                className={classes.textField}
                inputProps={{ className: classes.input }}
                InputLabelProps={{
                  classes: {
                    root: classes.inputLabel,
                    focused: "focused",
                  },
                }}
                required
                style={{
                  color: "white !important",
                }}
                width="100%"
                variant="outlined"
                onChange={(e) =>
                  setUser({ ...user, no_of_mun: e.target.value })
                }
              />
              {/* <Input
                onChange={(e) =>
                  setUser({ ...user, no_of_mun: e.target.value })
                }
              /> */}
            </div>
          </div>

          <div className="prefer-boxes">
            <div className="prefer-box1">
              <div className="prefer-text">First Committee Preference</div>
              <div className="select1">
                <Select
                  placeholder="First Preference*"
                  onChange={handleChange1}
                  //   styles={customStyles}
                  options={choices}
                  isSearchable={false}
                />
              </div>

              <div
                className="select12"
                style={
                  user.first_preference == "unsc" ||
                  user.first_preference == "aippm" ||
                  user.first_preference == "harry potter(order of the phoenix)"
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <div style={{ display: "flex", gap: "2vw" }}>
                  <div>
                    <Select
                      placeholder="First Choice*"
                      onChange={handleChange11}
                      //   styles={customStyles}
                      options={
                        user.first_preference == "unsc"
                          ? choices1
                          : user.first_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />
                  </div>
                  <div>
                    <Select
                      placeholder="Second Choice*"
                      onChange={handleChange12}
                      //   styles={customStyles}
                      options={
                        user.first_preference == "unsc"
                          ? choices1
                          : user.first_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />{" "}
                  </div>{" "}
                  <div>
                    <Select
                      placeholder="Third Choice*"
                      onChange={handleChange13}
                      //   styles={customStyles}
                      options={
                        user.first_preference == "unsc"
                          ? choices1
                          : user.first_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />{" "}
                  </div>{" "}
                  <div>
                    <Select
                      placeholder="Fourth Choice*"
                      onChange={handleChange14}
                      //   styles={customStyles}
                      options={
                        user.first_preference == "unsc"
                          ? choices1
                          : user.first_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />{" "}
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="prefer-box1">
              <div className="prefer-text">Second Committee Preference</div>
              <div className="select1">
                <Select
                  placeholder="Second Preference*"
                  onChange={handleChange2}
                  //   styles={customStyles}
                  options={choices}
                  isSearchable={false}
                />
              </div>
              <div
                className="select12"
                style={
                  user.first_preference == "unsc" ||
                  user.first_preference == "aippm" ||
                  user.first_preference == "harry potter(order of the phoenix)"
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <div style={{ display: "flex", gap: "2vw" }}>
                  <div>
                    {" "}
                    <Select
                      placeholder="First Choice*"
                      onChange={handleChange21}
                      //   styles={customStyles}
                      options={
                        user.second_preference == "unsc"
                          ? choices1
                          : user.second_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />{" "}
                  </div>
                  <div>
                    {" "}
                    <Select
                      placeholder="Second Choice*"
                      onChange={handleChange22}
                      //   styles={customStyles}
                      options={
                        user.second_preference == "unsc"
                          ? choices1
                          : user.second_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <Select
                      placeholder="Third Choice*"
                      onChange={handleChange23}
                      //   styles={customStyles}
                      options={
                        user.second_preference == "unsc"
                          ? choices1
                          : user.second_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <Select
                      placeholder="Fourth Choice*"
                      onChange={handleChange24}
                      //   styles={customStyles}
                      options={
                        user.second_preference == "unsc"
                          ? choices1
                          : user.second_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="prefer-box1">
              <div className="prefer-text">Third Committee Preference</div>
              <div className="select1">
                <Select
                  placeholder="Third Preference*"
                  onChange={handleChange3}
                  //   styles={customStyles}
                  options={choices}
                  isSearchable={false}
                />
              </div>

              <div
                className="select12"
                style={
                  user.first_preference == "unsc" ||
                  user.first_preference == "aippm" ||
                  user.first_preference == "harry potter(order of the phoenix)"
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <div style={{ display: "flex", gap: "2vw" }}>
                  <div>
                    {" "}
                    <Select
                      placeholder="First Choice*"
                      onChange={handleChange31}
                      //   styles={customStyles}
                      options={
                        user.third_preference == "unsc"
                          ? choices1
                          : user.third_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />
                  </div>
                  <div>
                    {" "}
                    <Select
                      placeholder="Second Choice*"
                      onChange={handleChange32}
                      //   styles={customStyles}
                      options={
                        user.third_preference == "unsc"
                          ? choices1
                          : user.third_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <Select
                      placeholder="Third Choice*"
                      onChange={handleChange33}
                      //   styles={customStyles}
                      options={
                        user.third_preference == "unsc"
                          ? choices1
                          : user.third_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <Select
                      placeholder="Fourth Choice*"
                      onChange={handleChange34}
                      //   styles={customStyles}
                      options={
                        user.third_preference == "unsc"
                          ? choices1
                          : user.third_preference == "aippm"
                          ? choices2
                          : choices3
                      }
                      isSearchable={false}
                    />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        {success && (
          <div className="text-success reg-now">
            🎉 You are Registered Successsully for MUN
          </div>
        )}
        {error && (
          <div className="text-danger reg-now">
            😓 Something went wrong please try again
          </div>
        )}

        <div className="reg-now">
          <AniButton onSubmit={onSubmit} name={"Register"} />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;

  return {
    userDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMuns: (params) => dispatch(fetchMun(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Munregister);

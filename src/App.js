import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

// import CollegeDetails from "./components/registration/CollegeDetailes/Collegedetailes";
// import RegPage from "./components/registration/RegistrationPage/RegPage";
import PersonalDetails from "./components/registration/step1/personalDetails";

// import PersonalDetails from "./components/registration/step1/personalDetails";

function App() {
  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
          {/* <Route exact={true} path="/registration" element={<RegPage />} />
          <Route exact={true} path="/collegedetailes" element={<CollegeDetails />} /> */}
          <Route exact={true} path="/personaldetails" element={<PersonalDetails />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;

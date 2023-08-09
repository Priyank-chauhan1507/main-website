import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CollegeDetails from "./components/registration/CollegeDetailes/Collegedetailes";
import RegPage from "./components/registration/RegistrationPage/RegPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact={true} path="/registration" element={<RegPage />} />
          <Route exact={true} path="/collegedetailes" element={<CollegeDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

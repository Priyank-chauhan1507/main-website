import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Registration/login/Login";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

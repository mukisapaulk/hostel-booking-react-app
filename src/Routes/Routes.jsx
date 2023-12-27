import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import { BrowserRouter } from "react-router-dom";
import TestComponent from "../components/TestComponent";
import HomePage from "../views/HomePage";
// import Residencies from "../components/Residencies/Residencies";

const MyRoutes = () => {
  // const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<TestComponent />} />
        {/* <Route path="/residencies" Component={<Residencies />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;

// App.js
import React from "react";
import Header from "./components/Header/Header";
import FlightSearchForm from "./components/FlightSearchForm/FlightSearchForm";
import Login2 from "./components/Login2/Login";
import RecentFlights from "./components/RecentFlights/RecentFlights";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import RelevantFlights from "./components/RelevantFlights/RelevantFlights";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Login2 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/flights" element={<RelevantFlights />} />
      </Routes>
    </div>
  );
};

export default App;

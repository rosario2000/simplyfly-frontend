// FlightSearchForm.js
import React, { useState } from "react";
import DropdownInput from "../DropDownTextInput/DropDownTextInput";
import { useNavigate } from "react-router-dom";
import "./FlightSearchForm.css";

const FlightSearchForm = ({ user }) => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fullName = user.name;
  const firstName = fullName.split(" ")[0];

  // function filterFlights(flights) {
  //   return flights.filter((flight) => {
  //     // Apply all criteria
  //     const matchesFromCity = flight.from === fromCity;
  //     const matchesToCity = flight.to === toCity;

  //     return matchesFromCity && matchesToCity;
  //   });
  // }

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/flights", {
        method: "GET",
        headers: {
          from_city: fromCity,
          to_city: toCity,
          search_date: date,
        },
      });

      const data = await response.json();
      console.log("Date : ", date);
      console.log("Response : ", response);
      console.log("Data : ", data);

      if (response.ok) {
        // var flights = filterFlights(data);
        navigate("/flights", { state: { relevantFlights: data, user: user } }); // navigate to another component
      } else {
        setError("Invalid Search");
      }
    } catch (err) {
      setError("An unexpected error occured!");
      console.log("Error : ", err);
    }
  };

  const handleFromCity = (data) => {
    setFromCity(data);
  };
  const handleToCity = (data) => {
    setToCity(data);
  };

  return (
    <div className="flight-search-form">
      <h2>Hi {firstName}!</h2>
      <p>Let's find your destination</p>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <div>
            <DropdownInput
              label={"From"}
              placeholder={"DEL"}
              onSendData={handleFromCity}
            />
          </div>
          <div>
            <DropdownInput
              label={"To"}
              placeholder={"BLR"}
              onSendData={handleToCity}
            />
          </div>
          <div className="date-input">
            <label>Date</label>
            <input
              type="date"
              placeholder="2024-09-11"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="search-btn">Search</button>
      </form>
    </div>
  );
};

export default FlightSearchForm;

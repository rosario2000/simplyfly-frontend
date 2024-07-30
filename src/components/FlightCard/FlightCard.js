// FlightCard.js
import React, { useState } from "react";
import dashedline from "../images/dashed_line.png";
import "./FlightCard.css";

const FlightCard = ({
  key,
  id,
  from,
  to,
  departure,
  arrival,
  date,
  duration,
  user,
}) => {
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  const updateUserDetails = async () => {
    const response = await fetch("http://localhost:8080/user/details", {
      method: "GET",
      headers: {
        username: user.userName,
        password: user.password,
      },
    });

    user = await response.json();
    console.log("Updated User : ", user);
  };

  const bookFlight = async (e) => {
    e.preventDefault();

    const data = {
      userName: user.userName,
      password: user.password,
      flightId: id,
    };

    try {
      const response = await fetch("http://localhost:8080/user/flight/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Booking response : ", response);

      if (response.ok) {
        setOk(true);

        user = updateUserDetails();
      } else {
        setError("Something went wrong!");
      }
    } catch (err) {
      setError("An unexpected error occured!");
      console.log("Error : ", err);
    }
  };

  return (
    <div className="flight-card">
      <h3>{id}</h3>
      <div className="container">
        <div className="flight-route">
          <span>{from}</span>
          <img src={dashedline} alt="dashed_line" />
          <span>{to}</span>
        </div>

        <div className="flight-times">
          <span>{departure}</span>
          <div className="flight-duration">{duration}</div>
          <span>{arrival}</span>
        </div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!ok && (
        <button class="search-btn" onClick={bookFlight}>
          Book
        </button>
      )}
      {ok && (
        <button class="search-btn" disabled>
          Booked
        </button>
      )}
    </div>
  );
};

export default FlightCard;

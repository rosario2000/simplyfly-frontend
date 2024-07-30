// RecentFlights.js
import React from "react";
import FlightCard from "../FlightCard/FlightCard";
import "./RecentFlights.css";

const RecentFlights = () => {
  return (
    <div className="recent-flights">
      <h2>
        Your Upcoming Flights <span>See more</span>
      </h2>
      <FlightCard
        airline="Citilink"
        from="Jakarta"
        to="Incheon"
        departure="01:30"
        arrival="06:45"
        date="Sept 11 2023"
        duration="7h 15m"
      />
      <FlightCard
        airline="Garuda Indonesia"
        from="Jakarta"
        to="Incheon"
        departure="01:30"
        arrival="06:45"
        date="Sept 11 2023"
        duration="7h 15m"
      />
    </div>
  );
};

export default RecentFlights;

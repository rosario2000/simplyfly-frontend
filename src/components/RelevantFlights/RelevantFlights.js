import React from "react";
import { useLocation } from "react-router-dom";
import FlightCard from "../FlightCard/FlightCard";
import "./RelevantFlights.css";

const RelevantFlights = () => {
  const location = useLocation();
  const relevantFlights = location.state?.relevantFlights;
  const user = location.state?.user;

  console.log("user : ", user);

  function formatTime(dateString) {
    return dateString.substring(11, 16);
  }

  function formatDate(dateString) {
    const [year, month, day] = dateString.substring(0, 10).split("-");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }

  function calculateDuration(departure, arrival) {
    const departureTime = new Date(departure);
    const arrivalTime = new Date(arrival);
    const durationMs = arrivalTime - departureTime;
    const durationHrs = Math.floor(durationMs / (1000 * 60 * 60));
    const durationMins = Math.floor(
      (durationMs % (1000 * 60 * 60)) / (1000 * 60)
    );
    return `${durationHrs}h ${durationMins}m`;
  }

  var formattedFlights;
  if (relevantFlights == null) {
    return (
      <div className="no-flights">
        <p>No Flights found :/</p>
      </div>
    );
  } else {
    formattedFlights = relevantFlights.map((flight) => ({
      ...flight,
      departureTime: formatTime(flight.departure),
      arrivalTime: formatTime(flight.arrival),
      date: formatDate(flight.departure),
      duration: calculateDuration(flight.departure, flight.arrival),
    }));
  }

  console.log("Formatted Flights : ", formattedFlights);

  return (
    <div className="recent-flights">
      <h2>
        Flights from {relevantFlights[0].from} to {relevantFlights[0].to}
      </h2>
      {formattedFlights.map((flight) => (
        <FlightCard
          key={flight.id}
          id={flight.id}
          from={flight.from}
          to={flight.to}
          departure={flight.departureTime}
          arrival={flight.arrivalTime}
          date={flight.date}
          duration={flight.duration}
          user={user}
        />
      ))}
    </div>
  );
};

export default RelevantFlights;

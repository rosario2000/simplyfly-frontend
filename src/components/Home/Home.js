import FlightSearchForm from "../FlightSearchForm/FlightSearchForm";
import RecentFlights from "../RecentFlights/RecentFlights";
import Notification from "../Notification/Notification";
import { useLocation } from "react-router-dom";
import "./home.css";

const Home = () => {
  const location = useLocation();
  const user = location.state?.user;
  return (
    <>
      <FlightSearchForm user={user} />
      <Notification user={user} />
      <RecentFlights user={user} />
    </>
  );
};

export default Home;

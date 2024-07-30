import React, { useEffect, useState } from "react";
import "./Notification.css";
const Notification = ({ user }) => {
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");

    socket.onopen = () => {
      console.log("WebSocket is connected.");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("notification Data : ", data);
      setNotification(data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      setError("WebSocket error occurred");
    };

    socket.onclose = () => {
      console.log("WebSocket is closed.");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="notification">
      <h1>{notification}</h1>
    </div>
  );
};

export default Notification;

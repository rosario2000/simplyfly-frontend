import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/user/details", {
        method: "GET",
        headers: {
          username: userName,
          password: password,
        },
      });

      const data = await response.json();
      // console.log("Response : ", response);
      // console.log("Data : ", data);

      if (response.ok) {
        navigate("/home", { state: { user: data } }); // navigate to another component
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("An unexpected error occured!");
      console.log("Error : ", err);
    }
  };

  return (
    <div className="auth-component">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="auth-form">
        <label>
          Username:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="search-btn">Login</button>
      </form>
      <p>
        New User?
        <Link to="/signup" className="links">
          {" "}
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;

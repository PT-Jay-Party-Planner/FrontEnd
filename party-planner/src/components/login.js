import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", userData)
      .then(res => {
        localStorage.setItem("Authorization", res.data.token);
        localStorage.setItem( "username", userData.username)
        console.log(res.data);
        history.push("/shopping-list");
      })
      .catch(err => console.log(err));

    console.log(userData);
  };

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <h1>Welcome To The Party Planner</h1>
      <br />
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;

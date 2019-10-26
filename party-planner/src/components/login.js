import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";
import { useHistory } from "react-router-dom";
import * as Log from '../design/styledComponents/loginStyle';

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
    <Log.Container>
      <h1>Welcome To The Party Planner</h1>
      <br />



      <Log.Header>
          
         
          <img  className = "background"src ="https://github.com/PT-Jay-Party-Planner/UXDesign/blob/master/Assets/Images/s-o-c-i-a-l-c-u-t-CZ8XutyXLr8-unsplash.jpg?raw=true"/>

          <img className = "logo" src ="https://github.com/PT-Jay-Party-Planner/UXDesign/blob/master/Style%20Guide/Web%20Style%20Guide/Logo-biggersize.jpg?raw=true"/>
        </Log.Header>
      <Log.StyledForm onSubmit={handleLogin}>
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
        <Log.StyledButton>Log In</Log.StyledButton> 
      </Log.StyledForm>





      
      <div className= "footer">

<img src= "https://cdn.zeplin.io/5da64e5e2e044a2ffcc440f3/assets/4dff3f94-f351-442d-9f98-9d5f7c3e4ef7.png" className="cupcake"/>





</div>
    </Log.Container>
  );
};

export default Login;

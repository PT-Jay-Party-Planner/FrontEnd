import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .required()
    .trim(),
  password: yup
    .string()
    .required()
    .min(6)
});

const RegisterUser = () => {
  const [userState, setUserState] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userState, "handleSubmit Ran");
    schema
      .validate(userState, { abortEarly: false })
      .then(function(value) {
        axiosWithAuth()
          .put("/api/data", value)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      })
      .catch(function(err) {
        const newErrors = {};
        for (const error of err.inner) {
          if (!newErrors[error.path]) {
            newErrors[error.path] = error.message;
          }
        }
        setErrors(newErrors);
      });
  };

  console.log(errors);

  const handleChange = e => {
    const newUserState = { ...userState };
    newUserState[e.target.name] = e.target.value;
    setUserState(newUserState);
  };

  return (
    <div class="register-container">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={userState.username}
          />
          {errors.username}
        </label>
        <label>
          Password:
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={userState.password}
          />
          {errors.password}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterUser;

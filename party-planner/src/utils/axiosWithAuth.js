import axios from "axios";

const axiosWithAuth = () => {
  const Authorization = localStorage.getItem("Authorization");
  return axios.create({
    baseURL: "https://pt-jay-party-planner.herokuapp.com",
    headers: {
      Authorization: Authorization
    }
  });
};

export default axiosWithAuth;

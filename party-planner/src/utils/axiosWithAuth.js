import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "HEROKU LINK WHEN DONE",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;

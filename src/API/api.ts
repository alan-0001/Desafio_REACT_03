import axios from "axios";

const api = axios.create({
  baseURL: "https://aps-weather-app.herokuapp.com/",
});

export default api;



import axios from "axios";
require("dotenv");

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 20000,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const request = option => {
  return instance;
};

export default request;

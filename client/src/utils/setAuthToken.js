import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //Apply to every requrets
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Delete header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;

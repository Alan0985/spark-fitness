import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

//Sign Up
export const signUp = (userData, history) => dispatch => {
  axios
    .post("/api/users/signUp", userData)
    .then(res => history.push("/signIn"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Sign In
export const signIn = (userData, history) => dispatch => {
  axios
    .post("/api/users/signIn", userData)
    .then(res => {
      //Save the token
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      //Set token to header
      setAuthToken(token);

      //Decode the token to get user info.
      const decoded = jwt_decode(token);

      //Set Current User
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

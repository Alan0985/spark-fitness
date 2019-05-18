import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import { GET_ERRORS, GET_USER_INFO } from "./types";

//Sign Up
export const signUp = (userData, history) => dispatch => {
  axios
    .post("/api/users/me/signUp", userData)
    .then(res => history.push("/me/signIn"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Sign In
export const signIn = userData => dispatch => {
  axios
    .post("/api/users/me/signIn", userData)
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

//Set Current User
export const setCurrentUser = decoded => {
  return {
    type: GET_USER_INFO,
    payload: decoded
  };
};

//Get User Info
export const getUserInfo = () => dispatch => {
  axios
    .get("/api/users/me/editProfile")
    .then(res =>
      dispatch({
        type: GET_USER_INFO,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Update User Info
export const updateUserInfo = newInfo => dispatch => {
  axios
    .post("/api/users/me/editProfile", newInfo)
    .then(res => {
      dispatch({
        type: GET_USER_INFO,
        payload: res.data
      });
      alert("Saved");
      window.location = "/me";
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Sign Out
export const signOut = () => dispatch => {
  //Remove token from localStorge
  localStorage.removeItem("jwtToken");

  //Remove auth header
  setAuthToken(false);

  //Set isAuthenticated to false
  dispatch(setCurrentUser({}));

  //Redirect to Sign In
  window.location.href = "/me/signIn";
};

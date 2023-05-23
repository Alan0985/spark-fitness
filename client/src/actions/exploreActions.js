import axios from "axios";
import {
  LOADING,
  GET_TEAM_DATA,
  GET_MEMBERSHIP_DATA,
  GET_TRAINING_DATA,
  GET_ERRORS,
} from "./types";

//Get Team Data
export const getTeamData = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get("/api/team")
    .then((res) =>
      dispatch({
        type: GET_TEAM_DATA,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Get Membership Data
export const getMembershipData = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get("/api/membership")
    .then((res) =>
      dispatch({
        type: GET_MEMBERSHIP_DATA,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Get Training Data
export const getTrainingData = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get("/api/training")
    .then((res) =>
      dispatch({
        type: GET_TRAINING_DATA,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Create a new message
export const createNewMessage = (newMessage) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .post("/api/contact/add", newMessage)
    .then((res) => {
      alert(
        "Thank you for your message, we will get back to you as soon as possible. Have a nice day."
      );
      window.location.replace("/explore/contact");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

import axios from "axios";
import {
  GET_EXPLORE_DATA,
  CREATE_NEW_MESSAGE,
  LOADING,
  GET_ERRORS
} from "./types";

//Get Explore Data
export const getExploreData = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get("/api/explores")
    .then(res =>
      dispatch({
        type: GET_EXPLORE_DATA,
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

//Create a new message
export const createNewMessage = newMessage => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post("/api/explores", newMessage)
    .then(res =>
      dispatch({
        type: CREATE_NEW_MESSAGE,
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

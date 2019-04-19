import axios from "axios";
import { GET_PROFILE, GET_ERRORS, LOADING, UPDATE_PROFILE } from "./types";

//Get current profile
export const getCurrentProfile = () => dispatch => {
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
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

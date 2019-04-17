import axios from "axios";
import { GET_ERRORS } from "./types";

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

import axios from "axios";
import {
  GET_PROFILE,
  GET_ERRORS,
  LOADING,
  CREATE_PROFILE,
  EDIT_PROFILE
} from "./types";

// //Get current profile
// export const getCurrentProfile = () => dispatch => {
//   axios
//     .get("/api/profile/me/editProfile")
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// //Create profile
// export const createProfile = profileData => dispatch => {
//   axios
//     .post("/api/profile/me/createProfile", profileData)
//     .then(res =>
//       dispatch({
//         type: CREATE_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

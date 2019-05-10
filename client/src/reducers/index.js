import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postReducer from "./postReducer";
import exploreReducer from "./exploreReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  post: postReducer,
  explore: exploreReducer
});

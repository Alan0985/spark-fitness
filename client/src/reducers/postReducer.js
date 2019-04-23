import { GET_POSTS, LOADING } from "../actions/types";
import isEmpty from "../validation/isEmpty";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };

    default:
      return state;
  }
}

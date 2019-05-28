import { GET_EXPLORE_DATA, LOADING } from "../actions/types";

const initialState = {
  explore: {},
  messages: [],
  message: {},
  load: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        load: true
      };

    case GET_EXPLORE_DATA:
      return {
        ...state,
        explore: action.payload,
        load: false
      };

    default:
      return state;
  }
}

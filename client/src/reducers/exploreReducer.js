import {
  GET_EXPLORE_DATA,
  CREATE_NEW_MESSAGE,
  LOADING
} from "../actions/types";

const initialState = {
  explore: {},
  messages: [],
  message: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_EXPLORE_DATA:
      return {
        ...state,
        explore: action.payload,
        loading: false
      };

    case CREATE_NEW_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
        loading: false
      };

    default:
      return state;
  }
}

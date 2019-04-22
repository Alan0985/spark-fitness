import isEmpty from "../validation/isEmpty";

import { GET_USER_INFO } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    default:
      return state;
  }
}

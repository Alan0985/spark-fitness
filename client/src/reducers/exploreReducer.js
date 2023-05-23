import {
  GET_TEAM_DATA,
  GET_MEMBERSHIP_DATA,
  GET_TRAINING_DATA,
  LOADING,
} from "../actions/types";

const initialState = {
  team: [],
  membership: [],
  training: [],
  messages: [],
  message: {},
  load: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        load: true,
      };

    case GET_TEAM_DATA:
      return {
        ...state,
        team: action.payload,
        load: false,
      };

    case GET_MEMBERSHIP_DATA:
      return {
        ...state,
        membership: action.payload,
        load: false,
      };

    case GET_TRAINING_DATA:
      return {
        ...state,
        training: action.payload,
        load: false,
      };

    default:
      return state;
  }
}

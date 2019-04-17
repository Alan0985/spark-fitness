import { TEST_DISPATCH } from "./types";

export const signUp = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};

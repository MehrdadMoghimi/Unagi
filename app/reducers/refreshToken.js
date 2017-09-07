import {
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNOUT_SUCCESS
} from "../resources/ActionTypes";

const refreshToken = (state = "", action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return action.refreshToken;
    case SIGNUP_SUCCESS:
      return action.refreshToken;
    case SIGNOUT_SUCCESS:
      return "";
    default:
      return state;
  }
};

export default refreshToken;

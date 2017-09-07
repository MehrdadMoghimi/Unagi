import {
  SIGNIN_REQUEST,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNOUT_SUCCESS
} from "../resources/ActionTypes";

const haveValidRefreshToken = (state = false, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return false;
    case SIGNIN_FAILURE:
      return false;
    case SIGNIN_SUCCESS:
      return true;
    case SIGNUP_REQUEST:
      return false;
    case SIGNUP_FAILURE:
      return false;
    case SIGNUP_SUCCESS:
      return true;
    case SIGNOUT_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default haveValidRefreshToken;

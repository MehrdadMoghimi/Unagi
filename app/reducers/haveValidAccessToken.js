import {
  GET_ACCESS_TOKEN_REQUEST,
  GET_ACCESS_TOKEN_SUCCESS,
  GET_ACCESS_TOKEN_FAILURE,
  SIGNOUT_SUCCESS
} from "../resources/ActionTypes";

const haveValidAccessToken = (state = false, action) => {
  switch (action.type) {
    case GET_ACCESS_TOKEN_REQUEST:
      return false;
    case GET_ACCESS_TOKEN_SUCCESS:
      return true;
    case GET_ACCESS_TOKEN_FAILURE:
      return false;
    case SIGNOUT_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default haveValidAccessToken;

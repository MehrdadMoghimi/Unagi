import {
  GET_ACCESS_TOKEN_SUCCESS,
  SIGNOUT_SUCCESS
} from "../resources/ActionTypes";

const accessToken = (state = "", action) => {
  switch (action.type) {
    case GET_ACCESS_TOKEN_SUCCESS:
      return action.accessToken;
    case SIGNOUT_SUCCESS:
      return "";
    default:
      return state;
  }
};

export default accessToken;

import {
  LIKE_POST_REQUEST,
  LIKE_POST_FAILURE,
  LIKE_POST_SUCCESS
} from "../resources/ActionTypes";

const LikingSuccessful = (state = false, action) => {
  switch (action.type) {
    case LIKE_POST_REQUEST:
      return false;
    case LIKE_POST_FAILURE:
      return false;
    case LIKE_POST_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default LikingSuccessful;

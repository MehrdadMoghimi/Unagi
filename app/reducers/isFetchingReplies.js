import {
  FETCH_REPLIES_REQUEST,
  FETCH_REPLIES_FAILURE,
  FETCH_REPLIES_SUCCESS
} from "../resources/ActionTypes";

const isFetchingReplies = (state = false, action) => {
  switch (action.type) {
    case FETCH_REPLIES_REQUEST:
      return true;
    case FETCH_REPLIES_FAILURE:
      return false;
    case FETCH_REPLIES_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isFetchingReplies;

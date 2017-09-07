import {
  FETCH_MORE_REPLIES_REQUEST,
  FETCH_MORE_REPLIES_FAILURE,
  FETCH_MORE_REPLIES_SUCCESS
} from "../resources/ActionTypes";

const isFetchingMoreReplies = (state = false, action) => {
  switch (action.type) {
    case FETCH_MORE_REPLIES_REQUEST:
      return true;
    case FETCH_MORE_REPLIES_FAILURE:
      return false;
    case FETCH_MORE_REPLIES_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isFetchingMoreReplies;

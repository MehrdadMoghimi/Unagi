import {
  FETCH_MORE_REPLIES_FAILURE,
  FETCH_MORE_REPLIES_SUCCESS,
  FETCH_MORE_REPLIES_REQUEST
} from "../resources/ActionTypes";

const FetchingMoreRepliesSuccessful = (state = false, action) => {
  switch (action.type) {
    case FETCH_MORE_REPLIES_REQUEST:
      return false;
    case FETCH_MORE_REPLIES_FAILURE:
      return false;
    case FETCH_MORE_REPLIES_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default FetchingMoreRepliesSuccessful;

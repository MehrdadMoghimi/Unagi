import {
  FETCH_REPLIES_FAILURE,
  FETCH_REPLIES_SUCCESS,
  FETCH_REPLIES_REQUEST
} from "../resources/ActionTypes";

const FetchingRepliesSuccessful = (state = false, action) => {
  switch (action.type) {
    case FETCH_REPLIES_REQUEST:
      return false;
    case FETCH_REPLIES_FAILURE:
      return false;
    case FETCH_REPLIES_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default FetchingRepliesSuccessful;

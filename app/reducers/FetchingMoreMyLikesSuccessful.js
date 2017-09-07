import {
  FETCH_MORE_MY_LIKES_FAILURE,
  FETCH_MORE_MY_LIKES_SUCCESS,
  FETCH_MORE_MY_LIKES_REQUEST
} from "../resources/ActionTypes";

const FetchingMoreMyLikesSuccessful = (state = false, action) => {
  switch (action.type) {
    case FETCH_MORE_MY_LIKES_REQUEST:
      return false;
    case FETCH_MORE_MY_LIKES_FAILURE:
      return false;
    case FETCH_MORE_MY_LIKES_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default FetchingMoreMyLikesSuccessful;

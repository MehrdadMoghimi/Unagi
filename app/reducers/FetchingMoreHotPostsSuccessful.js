import {
  FETCH_MORE_HOT_POSTS_FAILURE,
  FETCH_MORE_HOT_POSTS_SUCCESS,
  FETCH_MORE_HOT_POSTS_REQUEST
} from "../resources/ActionTypes";

const FetchingMoreHotPostsSuccessful = (state = false, action) => {
  switch (action.type) {
    case FETCH_MORE_HOT_POSTS_REQUEST:
      return false;
    case FETCH_MORE_HOT_POSTS_FAILURE:
      return false;
    case FETCH_MORE_HOT_POSTS_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default FetchingMoreHotPostsSuccessful;

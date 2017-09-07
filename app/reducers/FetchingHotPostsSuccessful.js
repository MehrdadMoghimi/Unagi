import {
  FETCH_HOT_POSTS_FAILURE,
  FETCH_HOT_POSTS_SUCCESS,
  FETCH_HOT_POSTS_REQUEST
} from "../resources/ActionTypes";

const FetchingHotPostsSuccessful = (state = false, action) => {
  switch (action.type) {
    case FETCH_HOT_POSTS_REQUEST:
      return false;
    case FETCH_HOT_POSTS_FAILURE:
      return false;
    case FETCH_HOT_POSTS_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default FetchingHotPostsSuccessful;

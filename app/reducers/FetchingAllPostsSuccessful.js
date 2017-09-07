import {
  FETCH_ALL_POSTS_FAILURE,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_REQUEST
} from "../resources/ActionTypes";

const FetchingAllPostsSuccessful = (state = false, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_REQUEST:
      return false;
    case FETCH_ALL_POSTS_FAILURE:
      return false;
    case FETCH_ALL_POSTS_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default FetchingAllPostsSuccessful;

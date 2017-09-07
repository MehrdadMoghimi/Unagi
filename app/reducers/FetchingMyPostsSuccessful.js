import {
  FETCH_MY_POSTS_FAILURE,
  FETCH_MY_POSTS_SUCCESS,
  FETCH_MY_POSTS_REQUEST
} from "../resources/ActionTypes";

const FetchingMyPostsSuccessful = (state = false, action) => {
  switch (action.type) {
    case FETCH_MY_POSTS_REQUEST:
      return false;
    case FETCH_MY_POSTS_FAILURE:
      return false;
    case FETCH_MY_POSTS_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default FetchingMyPostsSuccessful;

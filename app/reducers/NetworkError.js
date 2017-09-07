import {
  FETCH_ALL_POSTS_FAILURE,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_HOT_POSTS_FAILURE,
  FETCH_HOT_POSTS_SUCCESS,
  FETCH_REPLIES_FAILURE,
  FETCH_REPLIES_SUCCESS,
  FETCH_MORE_POSTS_FAILURE,
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_MORE_HOT_POSTS_FAILURE,
  FETCH_MORE_HOT_POSTS_SUCCESS,
  FETCH_MORE_REPLIES_FAILURE,
  FETCH_MORE_REPLIES_SUCCESS,
  SEND_POST_FAILURE,
  SEND_POST_SUCCESS
} from "../resources/ActionTypes";

const NetworkError = (state = false, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_FAILURE:
      return true;
    case FETCH_ALL_POSTS_SUCCESS:
      return false;
    case FETCH_HOT_POSTS_FAILURE:
      return true;
    case FETCH_HOT_POSTS_SUCCESS:
      return false;
    case FETCH_REPLIES_FAILURE:
      return true;
    case FETCH_REPLIES_SUCCESS:
      return false;
    case FETCH_MORE_POSTS_FAILURE:
      return true;
    case FETCH_MORE_POSTS_SUCCESS:
      return false;
    case FETCH_MORE_HOT_POSTS_FAILURE:
      return true;
    case FETCH_MORE_HOT_POSTS_SUCCESS:
      return false;
    case FETCH_MORE_REPLIES_FAILURE:
      return true;
    case FETCH_MORE_REPLIES_SUCCESS:
      return false;
    case SEND_POST_FAILURE:
      return true;
    case SEND_POST_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default NetworkError;

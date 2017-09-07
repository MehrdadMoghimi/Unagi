import {
  FETCH_MY_LIKES_FAILURE,
  FETCH_MY_LIKES_SUCCESS,
  FETCH_MY_LIKES_REQUEST
} from "../resources/ActionTypes";

const FetchingMyLikesSuccessful = (state = false, action) => {
  switch (action.type) {
    case FETCH_MY_LIKES_REQUEST:
      return false;
    case FETCH_MY_LIKES_FAILURE:
      return false;
    case FETCH_MY_LIKES_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default FetchingMyLikesSuccessful;

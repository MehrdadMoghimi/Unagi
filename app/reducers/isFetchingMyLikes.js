import {
  FETCH_MY_LIKES_REQUEST,
  FETCH_MY_LIKES_FAILURE,
  FETCH_MY_LIKES_SUCCESS
} from "../resources/ActionTypes";

const isFetchingMyLikes = (state = false, action) => {
  switch (action.type) {
    case FETCH_MY_LIKES_REQUEST:
      return true;
    case FETCH_MY_LIKES_FAILURE:
      return false;
    case FETCH_MY_LIKES_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isFetchingMyLikes;

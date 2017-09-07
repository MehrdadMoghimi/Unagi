import {
  GET_LOCATION_REQUEST,
  GET_LOCATION_FAILURE,
  GET_LOCATION_SUCCESS
} from "../resources/ActionTypes";

const isGettingLocation = (state = false, action) => {
  switch (action.type) {
    case GET_LOCATION_REQUEST:
      return true;
    case GET_LOCATION_FAILURE:
      return false;
    case GET_LOCATION_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isGettingLocation;

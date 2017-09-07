import {
  GET_LOCATION_FAILURE,
  GET_LOCATION_SUCCESS
} from "../resources/ActionTypes";

const LocationError = (state = false, action) => {
  switch (action.type) {
    case GET_LOCATION_FAILURE:
      return true;
    case GET_LOCATION_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default LocationError;

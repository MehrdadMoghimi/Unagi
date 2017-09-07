import {
  GET_LOCATION_REQUEST,
  GET_LOCATION_FAILURE,
  GET_LOCATION_SUCCESS
} from "../resources/ActionTypes";
import getLocationFromDevice from "../utils/getLocationFromDevice";

export function getLocationRequest() {
  return {
    type: GET_LOCATION_REQUEST
  };
}
export function getLocationSuccess(location) {
  return {
    type: GET_LOCATION_SUCCESS,
    location
  };
}
export function getLocationFailure(error) {
  return {
    type: GET_LOCATION_FAILURE,
    error
  };
}

export function getLocation() {
  return dispatch => {
    dispatch(getLocationRequest());
    return getLocationFromDevice()
      .then(location => {
        dispatch(getLocationSuccess(location));
      })
      .catch(error => {
        dispatch(getLocationFailure(error));
      });
  };
}

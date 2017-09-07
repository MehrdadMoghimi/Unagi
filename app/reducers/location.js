import { GET_LOCATION_SUCCESS } from "../resources/ActionTypes";

const location = (
  state = {
    longitude: "unknown",
    latitude: "unknown"
  },
  action
) => {
  switch (action.type) {
    case GET_LOCATION_SUCCESS:
      return {
        longitude: action.location.longitude,
        latitude: action.location.latitude
      };
    default:
      return state;
  }
};

export default location;

import { TOGGLE_ANONYMOUS } from "../resources/ActionTypes";

const isAnonymous = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_ANONYMOUS:
      return !state;
    default:
      return state;
  }
};

export default isAnonymous;

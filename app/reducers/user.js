import {
  SIGNUP_SUCCESS,
  GET_USER_SUCCESS,
  UPDATE_USER_SUCCESS
} from "../resources/ActionTypes";

const user = (
  state = { name: "", surname: "", email: "", username: "", phone: "" },
  action
) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        name: action.user.name,
        surname: action.user.surname,
        email: action.user.email,
        username: action.user.username,
        phone: action.user.phone
      };
    case GET_USER_SUCCESS:
      return {
        name: action.user.name,
        surname: action.user.surname,
        email: action.user.email,
        username: action.user.username,
        phone: action.user.phone
      };
    case UPDATE_USER_SUCCESS:
      return {
        name: action.user.name,
        surname: action.user.surname,
        email: action.user.email,
        username: action.user.username,
        phone: action.user.phone
      };
    default:
      return state;
  }
};

export default user;

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_FAILURE_USERNAME_EXISTS
} from "../resources/ActionTypes";
import { ToastAndroid } from "react-native";
import { UUID } from "../resources/Strings";
import { getAccessTokenSuccess } from "./AccessTokenActions";

var unagiServer = require("../api/unagiServer");

export function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  };
}
export function signupSuccess(refreshToken, user) {
  return {
    type: SIGNUP_SUCCESS,
    refreshToken,
    user
  };
}
export function signupFailure() {
  return {
    type: SIGNUP_FAILURE
  };
}
export function signupFailureUsernameExists() {
  return {
    type: SIGNUP_FAILURE_USERNAME_EXISTS
  };
}

export function signup(username, password, optional) {
  return (dispatch, getState) => {
    dispatch(signupRequest());
    console.log("IN SIGNUP");
    return unagiServer
      .signupAndGetAccessToken(
        getState().location,
        username,
        password,
        UUID,
        optional
      )
      .then(response => {
        console.log("SIGNUP RESPONSE");
        dispatch(
          signupSuccess(response.refreshToken, {
            name: optional.name,
            surname: optional.surname,
            username: username,
            email: optional.email,
            phone: optional.phone
          })
        );
        dispatch(getAccessTokenSuccess(response.accessToken));
        dispatch();
      })
      .catch(error => {
        console.log("SIGNUP ERROR", error);
        dispatch(signupFailure(error));
      });
  };
}

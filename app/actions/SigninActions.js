import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} from "../resources/ActionTypes";
import { ToastAndroid } from "react-native";
import { UUID } from "../resources/Strings";
import { getAccessTokenSuccess } from "./AccessTokenActions";
import { getUser } from "./UserActions";

var unagiServer = require("../api/unagiServer");

export function signinRequest() {
  return {
    type: SIGNIN_REQUEST
  };
}
export function signinSuccess(refreshToken) {
  return {
    type: SIGNIN_SUCCESS,
    refreshToken
  };
}
export function signinFailure() {
  return {
    type: SIGNIN_FAILURE
  };
}

export function signin(username, password) {
  return (dispatch, getState) => {
    dispatch(signinRequest());
    console.log("IN SIGNIN ");
    return unagiServer
      .signinAndGetAccessToken(getState().location, username, password, UUID)
      .then(response => {
        console.log("SIGNIN RESPONSE ");
        dispatch(signinSuccess(response.refreshToken));
        dispatch(getAccessTokenSuccess(response.accessToken));
        dispatch(getUser()).catch();
      })
      .catch(error => {
        console.log("SIGNIN ERROR", error);
        dispatch(signinFailure(error));
      });
  };
}

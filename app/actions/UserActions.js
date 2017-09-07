import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from "../resources/ActionTypes";

import { ToastAndroid } from "react-native";
import { UUID } from "../resources/Strings";
import { getAccessTokenSuccess } from "./AccessTokenActions";

var unagiServer = require("../api/unagiServer");

export function getUserRequest() {
  return {
    type: GET_USER_REQUEST
  };
}
export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    user
  };
}
export function getUserFailure() {
  return {
    type: GET_USER_FAILURE
  };
}

export function getUser() {
  return (dispatch, getState) => {
    dispatch(getUserRequest());
    console.log("IN GET USER ");
    return unagiServer
      .getUser(getState().location, getState().accessToken)
      .then(response => {
        console.log("GET USER RESPONSE ");
        dispatch(getUserSuccess(response));
      })
      .catch(error => {
        console.log("GET USER ERROR", error);
        dispatch(getUserFailure(error));
      });
  };
}

export function updateUserRequest() {
  return {
    type: UPDATE_USER_REQUEST
  };
}
export function updateUserSuccess(user) {
  return {
    type: UPDATE_USER_SUCCESS,
    user
  };
}
export function updateUserFailure() {
  return {
    type: UPDATE_USER_FAILURE
  };
}

export function updateUser(user) {
  return (dispatch, getState) => {
    dispatch(updateUserRequest());
    console.log("IN UPDATE USER ", user);
    return unagiServer
      .updateUser(getState().location, getState().accessToken, user)
      .then(response => {
        console.log("UPDATE USER RESPONSE ", user);
        dispatch(updateUserSuccess(user));
      })
      .catch(error => {
        console.log("UPDATE USER ERROR", error);
        dispatch(updateUserFailure(error));
      });
  };
}

import {
  GET_ACCESS_TOKEN_REQUEST,
  GET_ACCESS_TOKEN_SUCCESS,
  GET_ACCESS_TOKEN_FAILURE
} from "../resources/ActionTypes";

import { UUID } from "../resources/Strings";
var unagiServer = require("../api/unagiServer");

export function getAccessTokenRequest() {
  return {
    type: GET_ACCESS_TOKEN_REQUEST
  };
}
export function getAccessTokenSuccess(accessToken) {
  return {
    type: GET_ACCESS_TOKEN_SUCCESS,
    accessToken
  };
}
export function getAccessTokenFailure() {
  return {
    type: GET_ACCESS_TOKEN_FAILURE
  };
}

export function getAccessToken() {
  return (dispatch, getState) => {
    dispatch(getAccessTokenRequest());
    console.log("IN ACCESS TOKEN ");
    return unagiServer
      .getAccessToken(getState().location, getState().refreshToken, UUID)
      .then(response => {
        console.log("IN ACCESS TOKEN SUCCESS");
        dispatch(getAccessTokenSuccess(response.accessToken));
      })
      .catch(error => {
        console.log("IN ACCESS TOKEN FAIL");
        dispatch(getAccessTokenFailure(error));
      });
  };
}

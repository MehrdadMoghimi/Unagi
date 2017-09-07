import { SIGNOUT_SUCCESS } from "../resources/ActionTypes";

export function signout() {
  return {
    type: SIGNOUT_SUCCESS
  };
}

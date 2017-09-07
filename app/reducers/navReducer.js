import {
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNOUT_SUCCESS,
  UPDATE_USER_SUCCESS,
  BACK_SCREEN,
  NAVIGATE,
  POST_SENT_AND_GOT_BACK
} from "../resources/ActionTypes";
import { AppNavigator } from "../config/router";
import { NavigationActions } from "react-navigation";

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: "FirstPage"
      })
    ]
  })
);

const mainState = AppNavigator.router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: "TabWithDrawer"
      })
    ]
  })
);

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return mainState;
    case SIGNUP_SUCCESS:
      return mainState;
    case UPDATE_USER_SUCCESS:
      return mainState;
    case SIGNOUT_SUCCESS:
      return initialState;
    case NAVIGATE:
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.payload }),
        state
      );
    case BACK_SCREEN:
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
    case POST_SENT_AND_GOT_BACK:
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
  //const nextState = AppNavigator.router.getStateForAction(action, state);
};

export default navReducer;

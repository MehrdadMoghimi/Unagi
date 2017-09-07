import { connect } from "react-redux";
import {
  signinAndUpdateLocationAndGetAccessToken,
  signupAndUpdateLocationAndGetAccessToken
} from "../actions/Actions";
import { signin } from "../actions/SigninActions";
import FirstPage from "../screens/FirstPage";

const mapStateToProps = state => {
  return {
    haveValidAccessToken: state.haveValidAccessToken,
    haveValidRefreshToken: state.haveValidRefreshToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (username, password) => {
      dispatch(signinAndUpdateLocationAndGetAccessToken(username, password));
    },
    signup: (username, password, optional) => {
      dispatch(
        signupAndUpdateLocationAndGetAccessToken(username, password, optional)
      );
    }
  };
};

const FirstPageContainer = connect(mapStateToProps, mapDispatchToProps)(
  FirstPage
);

export default FirstPageContainer;

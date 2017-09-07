import { connect } from "react-redux";
import { signout } from "../actions/SignoutActions";
import { toggleAnonymous } from "../actions/Actions";
import DrawerMenu from "../screens/DrawerMenu";

const mapStateToProps = state => {
  return {
    isAnonymous: state.isAnonymous,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signout: () => {
      dispatch(signout());
    },
    toggleAnonymous: () => {
      dispatch(toggleAnonymous());
    }
  };
};

const DrawerMenuContainer = connect(mapStateToProps, mapDispatchToProps)(
  DrawerMenu
);

export default DrawerMenuContainer;

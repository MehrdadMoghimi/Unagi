import { connect } from "react-redux";
import { updateUser } from "../actions/UserActions";
import { toggleAnonymous } from "../actions/Actions";
import EditProfile from "../screens/EditProfile";

const mapStateToProps = state => {
  return {
    isAnonymous: state.isAnonymous
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => {
      dispatch(updateUser(user));
    }
  };
};

const EditProfileContainer = connect(mapStateToProps, mapDispatchToProps)(
  EditProfile
);

export default EditProfileContainer;

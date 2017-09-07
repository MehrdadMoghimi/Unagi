import { connect } from "react-redux";
import { updateLocationAndSendPost } from "../actions/Actions";
import { getAllPosts } from "../actions/AllPostsActions";
import { getHotPosts } from "../actions/HotPostsActions";
import { getMyPosts } from "../actions/MyPostsActions";
import { getMyLikes } from "../actions/MyLikesActions";
import { changeSendText, postSentAndGotBack } from "../actions/SendPostActions";
import SendPost from "../screens/SendPost";

const mapStateToProps = state => {
  return {
    isGettingLocation: state.isGettingLocation,
    LocationError: state.LocationError,
    isSendingPosts: state.isSendingPosts,
    NetworkError: state.NetworkError,
    location: state.location,
    sendText: state.sendText,
    SendingSuccessful: state.SendingSuccessful
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLocationAndSendPost: (parentId, parentName) => {
      dispatch(updateLocationAndSendPost(parentId, parentName));
    },
    changeSendText: text => {
      dispatch(changeSendText(text));
    },
    postSentAndGotBack: pageName => {
      dispatch(postSentAndGotBack());
      if (pageName === "Feed") {
        dispatch(getAllPosts());
      } else if (pageName === "HotFeed") {
        dispatch(getHotPosts());
      } else if (pageName === "MyLikes") {
        dispatch(getMyLikes());
      } else if (pageName === "MyPosts") {
        dispatch(getMyPosts());
      }
    }
  };
};

const SendPostContainer = connect(mapStateToProps, mapDispatchToProps)(
  SendPost
);

export default SendPostContainer;

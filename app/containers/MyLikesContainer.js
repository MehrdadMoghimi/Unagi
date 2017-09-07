import { connect } from "react-redux";
import { updateLocationAndGetMyLikes } from "../actions/Actions";
import { getMyLikes } from "../actions/MyLikesActions";
import { getMoreMyLikes } from "../actions/MyLikesActions";
import { likePost } from "../actions/LikePostActions";
import { addToReplies } from "../actions/RepliesActions";
import MyLikes from "../screens/MyLikes";

const mapStateToProps = state => {
  return {
    isGettingLocation: state.isGettingLocation,
    LocationError: state.LocationError,
    isFetchingMyLikes: state.isFetchingMyLikes,
    isFetchingMoreMyLikes: state.isFetchingMoreMyLikes,
    NetworkError: state.NetworkError,
    myLikes: state.myLikes,
    location: state.location,
    FetchingMyLikesSuccessful: state.FetchingMyLikesSuccessful,
    FetchingMoreMyLikesSuccessful: state.FetchingMoreMyLikesSuccessful,
    sendText: state.sendText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLocationAndFetchMyLikes: dispatch(updateLocationAndGetMyLikes()),
    fetchMyLikes: () => {
      dispatch(getMyLikes());
    },
    fetchMoreMyLikes: beforeDate => {
      dispatch(getMoreMyLikes(beforeDate));
    },
    likePost: (postId, isLike) => {
      dispatch(likePost(postId, isLike));
    },
    addToReplies: item => {
      dispatch(addToReplies({ post: item, replies: [] }));
    }
  };
};

const MyLikesContainer = connect(mapStateToProps, mapDispatchToProps)(MyLikes);

export default MyLikesContainer;

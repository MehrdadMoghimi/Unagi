import { connect } from "react-redux";
import { updateLocationAndGetMyPosts } from "../actions/Actions";
import { getMyPosts } from "../actions/MyPostsActions";
import { getMoreMyPosts } from "../actions/MyPostsActions";
import { likePost } from "../actions/LikePostActions";
import { addToReplies } from "../actions/RepliesActions";
import MyPosts from "../screens/MyPosts";

const mapStateToProps = state => {
  return {
    isGettingLocation: state.isGettingLocation,
    LocationError: state.LocationError,
    isFetchingMyPosts: state.isFetchingMyPosts,
    isFetchingMoreMyPosts: state.isFetchingMoreMyPosts,
    NetworkError: state.NetworkError,
    myPosts: state.myPosts,
    location: state.location,
    FetchingMyPostsSuccessful: state.FetchingMyPostsSuccessful,
    FetchingMoreMyPostsSuccessful: state.FetchingMoreMyPostsSuccessful,
    sendText: state.sendText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLocationAndFetchMyPosts: dispatch(updateLocationAndGetMyPosts()),
    fetchMyPosts: () => {
      dispatch(getMyPosts());
    },
    fetchMoreMyPosts: beforeDate => {
      dispatch(getMoreMyPosts(beforeDate));
    },
    likePost: (postId, isLike) => {
      dispatch(likePost(postId, isLike));
    },
    addToReplies: item => {
      dispatch(addToReplies({ post: item, replies: [] }));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

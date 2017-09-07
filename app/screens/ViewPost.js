import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ListPost from "../components/ListPost";

export default class ViewPost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (
      this.props.navigation.state.params.mainPostId !== undefined ||
      this.props.navigation.state.params.mainPostId !== null
    ) {
      var mainItem = this.props.replies.find(
        item =>
          item.post.post.postId ===
          this.props.navigation.state.params.mainPostId
      );
      const { navigate } = this.props.navigation;
      return (
        <ListPost
          inViewPost={true}
          mainPost={mainItem.post}
          posts={mainItem.replies}
          isFetchingPosts={this.props.isFetchingReplies}
          isFetchingMorePosts={this.props.isFetchingMoreReplies}
          NetworkError={this.props.NetworkError}
          navigate={navigate}
          sendText={this.props.sendText}
          fetchPosts={this.props.fetchReplies}
          fetchMorePosts={this.props.fetchMoreReplies}
          likePost={this.props.likePost}
          addToReplies={this.props.addToReplies}
          FetchingPostsSuccessful={this.props.FetchingRepliesSuccessful}
          FetchingMorePostsSuccessful={this.props.FetchingMoreRepliesSuccessful}
        />
      );
    } else {
      return <Text>No Post</Text>;
    }
  }
  componentWillMount() {
    this.props.fetchReplies(this.props.navigation.state.params.mainPostId);
  }
}

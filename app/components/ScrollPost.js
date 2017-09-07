import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl
} from "react-native";
import Post from "./Post";
import styles from "../style/FeedStyle";

export default class ScrollPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      refreshRequest: false
    };
  }

  onRefresh() {
    this.setState({ refreshing: true, refreshRequest: true });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.refreshRequest) {
      this.props.fetchPosts();
      if (nextProps.NetworkError) {
        this.setState({ refreshing: false });
      }
      if (nextProps.FetchingAllPostsSuccessful) {
        this.setState({ refreshing: false });
      }
      this.setState({ refreshRequest: false });
    }
  }

  render() {
    return (
      <ScrollView
        style={styles.scollContainer}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }
      >
        {this.props.posts.map((item, index) =>
          <Post
            postId={item.postId}
            username="ناشناس"
            key={index}
            text={item.content}
            replys="۴"
            likes="۶" //{item.likes}
            isLikedByMe={Math.random() >= 0.5}
            date={new Date(item.date).getTime()}
            navigate={this.props.navigate}
          />
        )}
      </ScrollView>
    );
  }
}

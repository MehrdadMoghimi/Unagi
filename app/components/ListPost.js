import React, { Component } from "react";
import { Text, Image, View, StyleSheet, SectionList } from "react-native";
import Post from "./Post";
import MainPost from "./MainPost";
import styles from "../style/FeedStyle";

export default class ListPost extends Component {
  constructor(props) {
    super(props);
    this.onRefresh = this.onRefresh.bind(this);
    this.onGetMore = this.onGetMore.bind(this);
    this.state = {
      refreshRequest: false,
      getMoreRequest: false,
      beforeDate: null
    };
  }

  onRefresh() {
    this.setState({ refreshRequest: true });
  }
  onGetMore(beforeDate) {
    this.setState({ getMoreRequest: true, beforeDate });
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextState.refreshRequest) {
      this.props.inViewPost
        ? nextProps.fetchPosts(this.props.mainPost.post.postId)
        : nextProps.fetchPosts();
      this.setState({ refreshRequest: false });
    }
    if (nextState.getMoreRequest) {
      if (!nextProps.isFetchingMorePosts && !nextProps.isFetchingPosts) {
        this.props.inViewPost
          ? nextProps.fetchMorePosts(
              this.props.mainPost.post.postId,
              nextState.beforeDate
            )
          : nextProps.fetchMorePosts(nextState.beforeDate);
      }
      this.setState({ getMoreRequest: false });
    }
  }

  render() {
    return (
      <SectionList
        style={styles.scrollContainer}
        sections={[{ data: this.props.posts, title: "Feed" }]}
        renderItem={({ item, index }) =>
          <Post
            item={item}
            index={index}
            navigate={this.props.navigate}
            sendText={this.props.sendText}
            likePost={this.props.likePost}
            addToReplies={this.props.addToReplies}
            pageName={this.props.inViewPost ? "ViewPost" : this.props.pageName}
          />}
        renderSectionHeader={({ section }) => {
          return this.props.inViewPost
            ? <MainPost
                item={this.props.mainPost}
                navigate={this.props.navigate}
                likePost={this.props.likePost}
                sendText={this.props.sendText}
                addToReplies={this.props.addToReplies}
                pageName={this.props.pageName}
              />
            : null;
        }}
        refreshing={this.props.isFetchingPosts}
        onRefresh={() => {
          return this.onRefresh();
        }}
        onEndReached={() => {
          return this.props.posts.length !== 0
            ? this.onGetMore(
                this.props.pageName === "HotFeed"
                  ? this.props.posts[this.props.posts.length - 1].post.score
                  : this.props.posts[this.props.posts.length - 1].post.date
              )
            : () => {};
        }}
        onEndReachedThreshold={0.05}
        keyExtractor={item => item.post.postId}
      />
    );
  }
}

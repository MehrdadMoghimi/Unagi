import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Animated,
  Share
} from "react-native";
import Animation from "lottie-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style/PostStyle";
import dateDifferenceComputer from "../utils/dateDifferenceComputer";
import toPersianNumber from "../utils/toPersianNumber";

export default class Post extends Component {
  render() {
    var likeColor = this.props.item.likedByMe ? "#d62d51" : "gray";
    var iconSize = 17;
    var date = dateDifferenceComputer(
      new Date(this.props.item.post.date).getTime()
    );
    console.log(this.props.item.post.name);
    var isAnonymous =
      this.props.item.post.name == null ||
      this.props.item.post.name == undefined;
    var name = isAnonymous ? "ناشناس" : this.props.item.post.name;
    this.state = {
      progress: new Animated.Value(this.props.item.likedByMe ? 1 : 0)
    };
    return (
      <TouchableOpacity
        style={styles.post}
        onPress={() => {
          this.props.addToReplies(this.props.item);
          this.props.navigate("ViewPost", {
            mainPostId: this.props.item.post.postId,
            pageName: this.props.pageName
          });
        }}
      >
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {name}
          </Text>
          <View style={styles.userImage}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={require("../resources/img/anonymous.jpg")}
                style={styles.img}
              />
              <View style={styles.fixCircleClipping} />
            </View>
          </View>
        </View>
        <View style={styles.contentHolder}>
          <Text style={styles.postContent}>
            {this.props.item.post.content}
          </Text>
          <View style={styles.spacer} />
        </View>
        <View style={styles.postInfo}>
          <View style={styles.leftInfo}>
            <View style={styles.share}>
              <TouchableOpacity
                onPress={() => {
                  Share.share(
                    {
                      message: this.props.item.post.content,
                      title: "این پست اوناگی را نگاه کن"
                    },
                    {
                      // Android only:
                      dialogTitle: "share this post"
                    }
                  );
                }}
              >
                <View style={styles.Holder}>
                  <Icon name="share-alt" size={iconSize} color="gray" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.replyInfo}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigate("SendPost", {
                    parentId: this.props.item.post.postId,
                    parentName: this.props.item.post.name,
                    updateLocationAndSendPost: () => {},
                    RemainingCharNum: 160 - this.props.sendText.length,
                    pageName: this.props.pageName
                  });
                }}
              >
                <View style={styles.Holder}>
                  <Icon name="reply" size={iconSize} color="gray" />
                </View>
              </TouchableOpacity>
              <Text style={{ fontFamily: "Vazir" }}>
                {toPersianNumber(this.props.item.post.replies)}
              </Text>
            </View>
            <View style={styles.likeInfo}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.props.item.likedByMe
                    ? this.animation.reset()
                    : this.animation.play();
                  this.props.likePost(
                    this.props.item.post.postId,
                    !this.props.item.likedByMe
                  );
                }}
              >
                <View style={styles.Holder}>
                  <Animation
                    ref={animation => {
                      this.animation = animation;
                    }}
                    style={{
                      width: 130,
                      height: 130
                    }}
                    source={require("../resources/TwitterHeart.json")}
                    progress={this.state.progress}
                  />
                </View>
              </TouchableWithoutFeedback>
              <Text style={{ color: likeColor, fontFamily: "Vazir" }}>
                {toPersianNumber(this.props.item.post.likes)}
              </Text>
            </View>
          </View>
          <View style={styles.dateInfo}>
            <Text style={{ fontFamily: "Vazir", fontSize: 11 }}>
              {" "}{date}{" "}
            </Text>
            <Icon name="clock-o" size={iconSize} color="gray" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.item.likedByMe !== nextProps.item.likedByMe ||
      this.props.item.post.replies !== nextProps.item.post.replies
    ) {
      return true;
    } else {
      return false;
    }
  }
}

import React, { Component } from "react";
import { Animated } from "react-native";
import Animation from "lottie-react-native";

export default class likeButton extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Animation
        ref={animation => {
          this.animation = animation;
        }}
        style={{
          width: this.props.size,
          height: this.props.size
        }}
        source={require("../resources/TwitterHeart.json")}
      />
    );
  }
}

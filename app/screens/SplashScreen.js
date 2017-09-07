import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Animated } from "react-native";
import styles from "../style/SplashStyle";
import Animation from "lottie-react-native";

var logo = require("../resources/img/logo.png");

export default class SplashScreen extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
        <Text style={styles.text}>اوناگی</Text>
        <Animation
          ref={animation => {
            this.animation = animation;
          }}
          style={styles.animation}
          source={require("../resources/preloader.json")}
          loop={true}
        />
      </View>
    );
  }
}

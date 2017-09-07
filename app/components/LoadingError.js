import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style/ErrorStyle";
import RNANAndroidSettingsLibrary from "react-native-android-settings-library";
import { Animated } from "react-native";
import Animation from "lottie-react-native";

export default class LoadingErrror extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    var iconName =
      this.props.errorType === "gps"
        ? "ACTION_LOCATION_SOURCE_SETTINGS"
        : "ACTION_WIFI_SETTINGS";
    var src =
      this.props.errorType === "gps"
        ? require("../resources/PinJump.json")
        : require("../resources/WifiWiper.json");
    var text =
      this.props.errorType === "gps"
        ? "خطای دسترسی به موقعیت جغرافیایی"
        : "خطای دسترسی به اینترنت";
    return (
      <View style={styles.container}>
        <View style={styles.alert}>
          <Text style={styles.notifText}>
            {" "}{text}{" "}
          </Text>
          <Icon name="exclamation-triangle" size={20} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.spacer} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => RNANAndroidSettingsLibrary.open(iconName)}
          >
            <Icon name="wifi" size={20} color="#FFFAFA" />
            <Text style={styles.buttonText}>
              {" "}{this.props.errorType} settings{" "}
            </Text>
          </TouchableOpacity>
          <View style={styles.spacer} />
        </View>
        <Animation
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 250,
            height: 250
          }}
          source={src}
          loop={true}
        />
      </View>
    );
  }
}

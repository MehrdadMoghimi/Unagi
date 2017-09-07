import React, { Component } from "react";
import {
  StyleSheet,
  AppRegistry,
  Text,
  TextInput,
  Button,
  View,
  textAlign,
  textAlignVertical,
  borderRadius,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import styles from "../style/LoginStyle";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class AboutUs extends Component {
  render() {
    return (
      <View style={{ marginTop: 35 }}>
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "#8cc63f",
              fontFamily: "Vazir",
              fontSize: 15,
              marginBottom: 13
            }}
          >
            :اعضای تیم
          </Text>

          <Text
            style={{
              textAlign: "center",

              fontFamily: "Vazir",
              fontSize: 12,
              marginBottom: 10
            }}
          >
            محمد گنجی
          </Text>

          <Text
            style={{
              textAlign: "center",

              fontFamily: "Vazir",
              fontSize: 12,
              marginBottom: 10
            }}
          >
            محمدمحمودی
          </Text>

          <Text
            style={{
              textAlign: "center",

              fontFamily: "Vazir",
              fontSize: 12,
              marginBottom: 10
            }}
          >
            امیر محمد کریمی
          </Text>

          <Text
            style={{
              textAlign: "center",

              fontFamily: "Vazir",
              fontSize: 12,
              marginBottom: 10
            }}
          >
            مهرداد مقیمی
          </Text>

          <Text
            style={{
              textAlign: "center",

              fontFamily: "Vazir",
              fontSize: 12,
              marginBottom: 10
            }}
          >
            سبا صالحی
          </Text>

          <Text
            style={{
              textAlign: "center",

              fontFamily: "Vazir",
              fontSize: 12,
              marginBottom: 10
            }}
          >
            اسحاق موتابی
          </Text>

          <View
            style={{
              marginTop: 14,
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15
            }}
          >
            <TouchableOpacity style={styles.enterButton} onPress={() => {}}>
              <Icon
                style={(style = { color: "white" })}
                name="send"
                size={15}
              />
              <Text style={{ fontFamily: "Vazir" }}>توییترمون ! :|</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.enterButton} onPress={() => {}}>
              <Icon
                style={(style = { color: "white" })}
                name="send"
                size={15}
              />
              <Text style={{ alignItems: "center", fontFamily: "Vazir" }}>
                اینستاگرام
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

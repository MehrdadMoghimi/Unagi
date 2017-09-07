import React, { Component } from "react";
import { AppRegistry, Switch, StyleSheet, Text, View } from "react-native";
import {
  COLOR,
  ThemeProvider,
  Toolbar,
  Drawer,
  Avatar,
  Button
} from "react-native-material-ui";
import Container from "../components/Container";

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
    accentColor: COLOR.pink500
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20
    }
  },
  avatar: {
    container: {
      backgroundColor: "black"
    }
  }
};

export default class DrawerMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <View style={styles.container}>
            <Drawer>
              <Drawer.Section
                items={[
                  {
                    icon: "edit",
                    value: (
                      <View>
                        <Text
                          style={{
                            marginRight: 80,
                            alignItems: "center",
                            fontFamily: "Vazir"
                          }}
                        >
                          ویرایش پروفایل
                        </Text>
                      </View>
                    ),
                    onPress: () => {
                      this.props.navigation.navigate("EditProfile");
                    }
                  },
                  {
                    icon: "person",
                    value: (
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center"
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Vazir"
                          }}
                        >
                          حالت ناشناس
                        </Text>
                        <Switch
                          onValueChange={() => this.props.toggleAnonymous()}
                          style={{
                            marginLeft: 50,
                            marginRight: 20,
                            width: 45
                          }}
                          value={this.props.isAnonymous}
                        />
                      </View>
                    )
                  },
                  {
                    icon: "chevron-right",
                    value: (
                      <Text
                        style={{
                          marginRight: 100,
                          alignItems: "center",
                          fontFamily: "Vazir"
                        }}
                      >
                        درباره ما
                      </Text>
                    ),
                    onPress: () => {
                      this.props.navigation.navigate("AboutUs");
                    }
                  },
                  {
                    icon: "exit-to-app",
                    value: (
                      <View>
                        <Text
                          style={{
                            marginRight: 40,
                            alignItems: "center",
                            fontFamily: "Vazir",
                            color: "red"
                          }}
                        >
                          خروج از حساب کاربری
                        </Text>
                      </View>
                    ),
                    onPress: () => {
                      this.props.signout();
                    }
                  }
                ]}
              />
            </Drawer>
          </View>
        </Container>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  header: {
    backgroundColor: "#455A64"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

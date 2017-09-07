import React, { Component } from "react";
import { Text, BackHandler } from "react-native";
import { connect } from "react-redux";
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  addNavigationHelpers,
  NavigationActions
} from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";

import FeedContainer from "../containers/FeedContainer";
import SendPostContainer from "../containers/SendPostContainer";
import HotFeedContainer from "../containers/HotFeedContainer";
import ViewPostContainer from "../containers/ViewPostContainer";
import FirstPageContainer from "../containers/FirstPageContainer";
import DrawerMenuContainer from "../containers/DrawerMenuContainer";
import MyPostsContainer from "../containers/MyPostsContainer";
import MyLikesContainer from "../containers/MyLikesContainer";
import EditProfileContainer from "../containers/EditProfileContainer";
import AboutUs from "../screens/AboutUs";

export const Tabs = TabNavigator(
  {
    Feed: {
      screen: FeedContainer,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name={"md-home"} color={"white"} size={25} />;
        }
      }
    },
    HotFeed: {
      screen: HotFeedContainer,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name={"md-flame"} color={"white"} size={25} />;
        }
      }
    },
    MyPosts: {
      screen: MyPostsContainer,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name={"md-person"} color={"white"} size={25} />;
        }
      }
    },
    MyLikes: {
      screen: MyLikesContainer,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name={"md-heart"} color={"white"} size={25} />;
        }
      }
    }
  },
  {
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "#689F38"
      }
    }
  }
);

export const TabWithDrawer = DrawerNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: {
        title: "Home"
      }
    }
  },
  {
    drawerWidth: 260,
    contentComponent: DrawerMenuContainer
  }
);

export const AppNavigator = StackNavigator({
  FirstPage: {
    screen: FirstPageContainer,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{ fontFamily: "Vazir-Bold", fontSize: 20, color: "white" }}
        >
          {"ثبت نام"}{" "}
        </Text>
      ),
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#8BC34A"
      }
    }
  },
  TabWithDrawer: {
    screen: TabWithDrawer,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Text
          style={{ fontFamily: "Vazir-Bold", fontSize: 20, color: "white" }}
        >
          {"اوناگی"}{" "}
        </Text>
      ),
      justifyContent: "center",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#8BC34A"
      },
      headerLeft: (
        <Icon
          style={{ paddingLeft: 5 }}
          name="md-menu"
          color="white"
          size={40}
          onPress={() => {
            return navigation.state.index === 1
              ? navigation.navigate("DrawerClose")
              : navigation.navigate("DrawerOpen");
          }}
        />
      )
    })
  },
  SendPost: {
    screen: SendPostContainer,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{ fontFamily: "Vazir-Bold", fontSize: 20, color: "white" }}
        >
          {"ارسال پست"}{" "}
        </Text>
      ),
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#8BC34A"
      }
    }
  },
  ViewPost: {
    screen: ViewPostContainer,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{ fontFamily: "Vazir-Bold", fontSize: 20, color: "white" }}
        >
          {"کامنت های پست"}{" "}
        </Text>
      ),
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#8BC34A"
      }
    }
  },
  EditProfile: {
    screen: EditProfileContainer,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{ fontFamily: "Vazir-Bold", fontSize: 20, color: "white" }}
        >
          {"ویرایش حساب کاربری"}{" "}
        </Text>
      ),
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#8BC34A"
      }
    }
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{ fontFamily: "Vazir-Bold", fontSize: 20, color: "white" }}
        >
          {"درباره ما"}{" "}
        </Text>
      ),
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#8BC34A"
      }
    }
  }
});

class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export const AppWithNavigationState = connect(mapStateToProps)(App);

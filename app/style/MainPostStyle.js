import { StyleSheet } from "react-native";

var circleRadius = 60;
var circleFixBorder = 30;
var fSize = 19;

const styles = StyleSheet.create({
  post: {
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    padding: 7
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10
  },
  userImage: {
    flex: 1,
    alignItems: "center"
  },
  imageContainer: {
    width: circleRadius,
    height: circleRadius,
    borderRadius: circleRadius / 2,
    overflow: "hidden"
  },
  img: {
    width: circleRadius,
    height: circleRadius
  },
  fixCircleClipping: {
    position: "absolute",
    top: -circleFixBorder,
    bottom: -circleFixBorder,
    right: -circleFixBorder,
    left: -circleFixBorder,
    borderRadius: circleRadius / 2 + circleFixBorder / 2,
    borderWidth: circleFixBorder,
    borderColor: "white"
  },
  userName: {
    flex: 4,
    textAlign: "right",
    fontSize: fSize,
    fontFamily: "Vazir"
  },
  postContent: {
    padding: 15,
    justifyContent: "center",
    fontSize: fSize,
    fontFamily: "Vazir"
  },
  postInfo: {
    margin: 3,
    marginBottom: 0,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#cccccc",
    borderTopWidth: 0.5
  },
  dateInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  leftInfo: {
    flex: 1,
    flexDirection: "row"
  },
  likeInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  replyInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  share: {
    flexDirection: "row",
    alignItems: "center"
  },
  Holder: {
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "#000",
    // borderWidth: 1,
    // backgroundColor: "#dedede",
    // marginVertical: 10,
    width: 45,
    height: 45
  }
});

export default styles;

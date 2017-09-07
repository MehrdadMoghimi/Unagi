import { StyleSheet } from "react-native";

var circleRadius = 40;
var circleFixBorder = 20;
var fSize = 14;

const styles = StyleSheet.create({
  post: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 0.5,
    padding: 7
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center"
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
    flex: 7,
    textAlign: "right",
    fontSize: fSize,
    fontFamily: "Vazir"
  },
  contentHolder: {
    flexDirection: "row"
  },
  postContent: {
    flex: 7,
    marginLeft: 8,
    marginBottom: 3,
    justifyContent: "center",
    fontFamily: "Vazir",
    fontSize: 12
  },
  spacer: {
    flex: 1
  },
  postInfo: {
    flex: 1,
    margin: 3,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
    width: 40,
    height: 40
  }
});

export default styles;

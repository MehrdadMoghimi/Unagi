import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // padding: 20,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "white"
  },
  alert: {
    flexDirection: "row",
    padding: 10
  },
  notifText: {},
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "space-between"
  },
  spacer: {
    flex: 1
  },
  button: {
    flex: 4,
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "#008080"
  },
  buttonText: {
    color: "#FFFAFA"
  }
});

export default styles;

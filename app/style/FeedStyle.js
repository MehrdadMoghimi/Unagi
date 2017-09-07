import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  postItem: {
    flex: 5,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    padding: 16,
    height: 80,
    backgroundColor: "#DCEDC8",
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0
  },
  postText: {
    marginRight: 16,
    color: "#212121"
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  loading: {
    flex: 1,
    paddingTop: 20
  },
  addButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute"
  },
  networkError: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default styles;

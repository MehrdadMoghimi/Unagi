import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F000"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 200,
    height: 200
  },
  text: {
    fontFamily: "Vazir",
    textAlign: "center",
    color: "#000000",
    width: 200
  },
  textboxes: {
    padding: 25,

    marginBottom: 120
  },
  TextInput: {
    fontFamily: "Vazir",
    borderRadius: 5,
    textAlign: "right",
    height: 40,
    marginBottom: 20,
    backgroundColor: "#FFF"
  },
  enterButton: {
    borderRadius: 10,
    marginRight: 2,
    marginTop: 50,
    marginBottom: 17,
    alignItems: "center",
    backgroundColor: "#008080",
    paddingVertical: 10,
    flex: 1
  },
  registerbutton: {
    borderRadius: 10,
    marginLeft: 6,
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
    paddingVertical: 25,
    flex: 1
  },
  Buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default styles;

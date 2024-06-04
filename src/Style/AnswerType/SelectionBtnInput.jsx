import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textInput: {
    width: "75%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    fontSize: 18,
    color: "black",
    marginBottom: 20,
  },
  btn: {
    text: {
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
      color: "black"
    },
    backgroundColor: "gray",
    borderRadius: 10,

    width: "75%",
    height: 60,
    marginBottom: 10,
    justifyContent: "center"
  },
  btnLong: {
    text: {
      fontSize: 14,
      fontWeight: "600",
      textAlign: "left",
      color: "black",
      marginLeft: 20,
      lineHeight: 25
    },
    backgroundColor: "gray",
    borderRadius: 10,

    width: "100%",
    height: 70,
    marginBottom: 10,
    justifyContent: "center"
  }
})
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        padding: 20,
        flex: 1
    },
    selectionContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    selection: {
        text: {
            textAlign: "center",
            fontSize: 16,
            color: "black",
            fontWeight: "700"
        },
        backgroundColor: "#708090",
        width: "50%",
        padding: 15,
        borderRadius: 20
    }
})
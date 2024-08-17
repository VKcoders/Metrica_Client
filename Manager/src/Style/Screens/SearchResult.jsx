import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        padding: 20,
        flex: 1
    },
    title: {
        color: "black",
        padding: 30,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800"
    },
    selectionContainer: {
        flex: 1,
        alignItems: "center",
    },
    selection: {
        text: {
            textAlign: "left",
            fontSize: 16,
            color: "black",
            fontWeight: "700"
        },
        backgroundColor: "#708090",
        width: "100%",
        padding: 15,
        borderRadius: 20,
        marginTop: 25
    }
})
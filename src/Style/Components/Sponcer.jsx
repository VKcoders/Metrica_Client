import { StyleSheet, Dimensions } from "react-native";

// const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        width: 70,
        height: 80,
        marginRight: 10
    },
    title: {
        color: "black",
        fontSize: 14,
        fontWeight: "700",
        textAlign: "center"
    },
    text: {
        color: "black",
        fontSize: 11,
        // fontWeight: "700",
        textAlign: "center"
    }
})
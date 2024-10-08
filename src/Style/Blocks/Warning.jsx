import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        width: width * 0.93,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "justify",
        marginBottom: 10
    }
})
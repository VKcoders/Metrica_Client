import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: "#9aa2a7",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        marginRight: 30,
        alignSelf: "flex-end"
    },
    text: {
        color: "black",
        fontSize: 16,
        fontWeight: "700"
    }
})
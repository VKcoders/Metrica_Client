import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    content: {        
        marginTop: 20
    },
    userCard: {
        backgroundColor: "#7393B3",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20
    },
    font: {
        fontSize: 16,
        fontWeight: "800",
        color: "black"
    }
})
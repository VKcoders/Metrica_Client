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
        fontSize: 13,
        fontWeight: "800",
        color: "black"
    },
    mainBar: {
        text: {
            color: "black",
            fontWeight: "700"
        },
        innerBar: {
            position: "absolute",
            left: 0,
            backgroundColor: "green",
            height: "100%",
        },
        backgroundColor: "white",
        width: "95%",
        height: 45,
        alignSelf: "center",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        marginBottom: 30,
        
    }
})
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { icons } from "../../Localized";

function Profile({ data, tracker }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.icon} source={icons.unKnowUser} />
            <View style={styles.infoContainer}>
                <Text style={styles.text}>{data.name}</Text>
                <View style={styles.bar}>
                    {
                        tracker ? (
                            <>
                                <Text style={styles.bar.text}>{data.progress}%</Text>
                                <View style={[styles.bar.inner, {width: `${data.progress}%`}]} />
                            </>
                        ) : (
                            <>
                                <Text style={styles.bar.text}>0000 / 0000</Text>
                                <View style={[styles.bar.inner, {width: `${data.progress}%`}]} />
                            </>
                        )
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#708090",
        marginBottom: 18,
        width: "95%",
        alignSelf: "center",
        padding: 10,
        borderRadius: 10,
        flexDirection: "row"
    },
    icon: {
        height: 100,
        width: 100,
        marginRight: 15,
    },
    infoContainer: {
        backgroundColor: "#cfcbcb",
        flexGrow: 1,
        padding: 10,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "space-around"
    },
    text: {
        color: "black",
        fontWeight: "700"
    },
    bar: {
        inner: {
            position: "absolute",
            left: 0,
            backgroundColor: "green",
            height: "100%",
            zIndex: -5
        },
        text: {
            color: "black",
            fontSize: 12,
            fontWeight: "600"
        },
        backgroundColor: "white",
        width: "100%",
        height: 20,
        borderRadius: 15,

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    }
})

export default Profile;
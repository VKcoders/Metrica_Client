import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { icons } from "../Localized";

function Return({nav}) {
        const handlePress = () => nav.goBack();

        return (
            <TouchableOpacity style={styles.container} onPress={handlePress}>
                <Image style={styles.icon} source={icons.return} />
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
    },
    icon: {
        width: "100%",
        height: "100%",
    }
})

export default Return;

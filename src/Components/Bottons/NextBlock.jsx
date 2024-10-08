import { Text, TouchableOpacity } from "react-native";

import { screens as styles } from "../../Style";

function NextBlock({action, text}) {
    const css = styles["NextBlock"];

    return (
        <TouchableOpacity style={css.container} onPress={() => action()}>
            <Text style={css.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default NextBlock;
import { useContext, useEffect } from "react";
import { Global } from "../../Context";
import { Text, View } from "react-native";

import { screens as styles } from "../../Style";
import { strings } from "../../Localized";
import Background from "../Background";
import { NextBlock } from "../Bottons";

function Warning({ next }) {
    const { setUniqueId, user: { id: userId } } = useContext(Global);
    const css = styles["Warning"];
    const localized = strings["Warning"];

    const handleConfirm = () => {
        function pad2(number) {
            return (number < 10 ? '0' : '') + number;
        }
  
        const now = new Date();
    
        const day = pad2(now.getDate());
        const month = pad2(now.getMonth() + 1);
        const year = now.getFullYear();
        const hours = pad2(now.getHours());
        const minutes = pad2(now.getMinutes());

        setUniqueId(`${userId}-${day}/${month}/${year}-${hours}h${minutes}`);

        next();
    }

    return (
        <>
            <Background index={"4"} />
            <View style={css.container}>
                <Text style={css.text}>{localized}</Text>
                <NextBlock action={handleConfirm} text={"Concordar"} />
            </View>
        </>
    )
}

export default Warning;
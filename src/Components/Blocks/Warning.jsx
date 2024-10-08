import { useContext, useEffect, useState } from "react";
import { Global } from "../../Context";
import { Text, View } from "react-native";

import { screens as styles } from "../../Style";
import Background from "../Background";
import { NextBlock } from "../Bottons";

function Warning({ next, warnings }) {
    const { setUniqueId, user: { id: userId } } = useContext(Global);
    const [activeWarnings, setActiveWarnings] = useState([]);
    const [count, setCount] = useState(0);
    const css = styles["Warning"];

    useEffect(() => {
        const formated = Object.keys(warnings).reduce((acc, cur) => {
            if (!warnings[cur]) return acc;
            acc.push(warnings[cur])
            return acc;
        }, [])

        setActiveWarnings(formated)
    }, [])

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
    };

    const handleNext = () => setCount(count + 1);

    return (
        <>
            <Background index={"4"} />
            <View style={css.container}>
                <Text style={css.text}>{activeWarnings[count]}</Text>
                <NextBlock
                    action={ activeWarnings.length === count + 1 ? handleConfirm : handleNext}
                    text={activeWarnings.length === count + 1 ? "Concordar" : "Próximo"}
                />
            </View>
        </>
    )
}

export default Warning;
import { Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { screens as styles } from "../../Style";
import Background from "../Background";
import { NextBlock } from "../Bottons";

function Warning({ next }) {
    const navigation = useNavigation();

    const css = styles["Warning"];

    const yes = () => next();

    const no = () => navigation.navigate("Home");

    return (
        <>
            <Background index={"4"} />
            <View style={css.container}>
                <Text style={css.text}>Você é eleitor nessa cidade?</Text>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                    // backgroundColor: "green",
                    width: "35%"
                }}>

                    <NextBlock
                        action={yes}
                        text={"sim"}
                    />

                    <NextBlock
                        action={no}
                        text={"não"}
                    />

                </View>
            </View>
        </>
    )
}

export default Warning;
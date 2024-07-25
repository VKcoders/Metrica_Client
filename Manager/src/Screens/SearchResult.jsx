import { useEffect, useState, useContext } from "react";
import { Global } from "../Context";
import { View, Text, TouchableOpacity } from "react-native";

import { screens as styles } from "../Style";
import Loader from "../Components/Loader";
import Return from "../Components/Return";
import Background from "../Components/Background";

import { getIntroQuestions } from "../Service/Question";

function SearchResult({route: { name, params: {searchId, token} }, navigation}) {
    const { setSelectedFilter } = useContext(Global);
    const [selection, setSelection] = useState([]);
    const [load, setLoad] = useState(true);
    const css = styles[name];

    useEffect(() => {
        async function Job() {
            const paramQuestion = await getIntroQuestions(searchId, token);
            const paramOnFormat = paramQuestion.split(';');

            setSelection(paramOnFormat);
            setLoad(false);
        }
        Job();
    }, []);

    const handlePress = (type) => {
        const rightKind = type === null ? "all" : type;
        
        setSelectedFilter(rightKind);
        navigation.navigate("MainQuestion", {id: searchId, token});
    }

    return (
        <View style={css.screen}>
            <Background index={"3"} />
            {
                !!load ? (
                    <Loader />
                ) : (
                    <>
                        <Return nav={navigation} />
                        <View style={css.selectionContainer}>
                            {
                                selection.map((e, i) => (
                                    <TouchableOpacity style={css.selection} key={"op-" + i} onPress={() => handlePress(e) }>
                                        <Text style={css.selection.text}>{e}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                            <TouchableOpacity style={css.selection} onPress={() => handlePress(null)}>
                                <Text style={css.selection.text}>Todos</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
            }
        </View>
    )
}

export default SearchResult;
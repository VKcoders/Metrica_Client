import { useEffect, useState, useContext } from "react";
import { Global } from "../Context";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { screens as styles } from "../Style";
import Loader from "../Components/Loader";
import Return from "../Components/Return";
import Background from "../Components/Background";

import { getIntroQuestions } from "../Service/Question";

function SearchResult({route: { name, params: {searchId, token} }, navigation}) {
    const { setSelectedFilter } = useContext(Global);
    const [selection, setSelection] = useState([]);
    const [filterTitle, setFilterTitle] = useState("");
    const [load, setLoad] = useState(true);
    const css = styles[name];

    useEffect(() => {
        async function Job() {
            const { answer, question } = await getIntroQuestions(searchId, token);

            const paramOnFormat = answer.split(';');

            setSelection(paramOnFormat);
            setFilterTitle(question.split(":"))
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
                        <ScrollView>

                            <Return nav={navigation} />

                            <Text style={css.title}>{filterTitle}</Text>
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
                        </ScrollView>
                    </>
                )
            }
        </View>
    )
}

export default SearchResult;
import { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { screens as styles } from "../Style";

import Loader from "../Components/Loader";

import { getMainQuestions } from "../Service/Question";

function MainQuestion ({route: { name, params: {id, token} }, navigation}) {
    const [load, setLoad] = useState(true);
    const [questions, setQuestions] = useState({
        data: {},
        keys: []
    });
    const css = styles[name];

    useEffect(() => {
        async function Job () {
            const questionsData = await getMainQuestions(id, token);

            setQuestions({
                data: questionsData,
                keys: Object.keys(questionsData)
            });

            setLoad(false);
        };
        setLoad(true);
        Job();
    }, [])

    const toInitialScreen = () => navigation.navigate("Home");

    return !!load ?
        (
            <Loader />
        ) : (
            <ScrollView style={{backgroundColor: "#FAF9F6"}}>
                <TouchableOpacity style={css.homeBtn} onPress={toInitialScreen}>
                    <Text style={css.homeBtn.text}>Página Inicial</Text>
                </TouchableOpacity>

                <View style={{marginTop: 40}}>
                    {
                        questions.keys.map((key, indice) => {
                            const { question, question_id: questionId } = questions.data[key];
                            const count = (indice + 1) < 10 ? `0${indice + 1}` : indice + 1;

                            const handlePress = () => navigation.navigate("Graphics", {questionId, searchId: id, token});

                            return (
                                <TouchableOpacity key={indice} onPress={handlePress} style={css.questionBtn}>
                                    <Text style={{color: "black", fontWeight: "600"}}>{count + "º " + question}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
}

export default MainQuestion;
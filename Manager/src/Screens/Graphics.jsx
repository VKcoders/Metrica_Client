import { useState, useEffect, useContext } from "react";
import { Global } from "../Context";
import { View, ScrollView } from "react-native";
import { screens as styles } from "../Style";

import Loader from "../Components/Loader";
import Return from "../Components/Return";
import Pie from "../Components/Graphic/Pie";

import { getAllAnswersByQuestion } from "../Service/Answer";

function Graphics ({route: { name, params: {questionId, searchId, token} }, navigation}) {
    const { selectedFilter } = useContext(Global);
    const [load, setLoad] = useState(true);
    const [collected, setCollected] = useState({})
    const css = styles[name];

    useEffect(() => {
        async function Job () {
            const answersData = await getAllAnswersByQuestion(questionId, searchId, selectedFilter, token);

            const answersCounted = answersData.reduce((acc, cur) => {
                const resposta = cur.answer_collected;
                acc[resposta] = (acc[resposta] || 0) + 1;
                return acc;
            }, {});
          
            setCollected(answersCounted)
            setLoad(false);
        };
        setLoad(true);
        Job();
    }, [])

    return !!load ?
        (
            <Loader />
        ) : (
            <ScrollView>
                <View style={css.screen}>
                    <Return nav={navigation} />
                    <View style={css.graphic}>
                        <Pie data={collected} />
                    </View>
                </View>
            </ScrollView>
        )
}

export default Graphics;
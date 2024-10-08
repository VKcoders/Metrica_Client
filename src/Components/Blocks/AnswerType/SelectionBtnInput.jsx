import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";

import { screens as styles } from "../../../Style";

import { NextBlock } from "../../Bottons";

function SelectionBtnInput({ data, next, action }) {
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false)
    
    const css = styles["SelectionBtnInput"];
    
    useEffect(() => {
        const array = data.answer.split(';');
        setOptions(array);
    }, []);

    const handlePress = (key, text) => {
        action({ id: data.question_id, value: text });
        if (key === selected) {
            next.func();
            return;
        }
        setSelected(key);
    };

    const handleChange = (t) => {
        if (t.length >= 2) {
            setCanSubmit(true);
            action({id: data.question_id, value: t});
            return;
        }
        setCanSubmit(false);
    }

    return (
        <View style={css.container}>
            <TextInput 
                style={css.textInput}
                placeholder="escrever..."
                placeholderTextColor={"black"}
                onChangeText={handleChange}
            />
            {
                options.map((text, index) => {
                    const key = "question-" + index;
                    return (
                        <TouchableOpacity 
                            key={key}
                            style={[css.btn, key === selected && {backgroundColor: "green"}]}
                            onPress={() => handlePress(key, text)}
                        >
                            <Text style={css.btn.text}>{text}</Text>
                        </TouchableOpacity>
                    )
                })
            }

            { !!canSubmit && <NextBlock action={next.func} text={next.text} /> }
        </View>
    )
}

export default SelectionBtnInput;
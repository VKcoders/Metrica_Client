import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { strings } from "../../Localized";

function CardSearch({data, nav, token, toWhere}) {
    const {id, introduction: qtdIntro, search: qtdQuestion, qtd_users, total, name} = data;
    const str = strings.Cards.Search;

    const handleClick = () => nav(toWhere, {searchId: id, token});

    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
            <Text style={[styles.text, { marginBottom: 12}]}>{name.toUpperCase()}</Text>
 
            <Text style={styles.text}>{str.protocol(id)}</Text>
            <Text style={styles.text}>{str.info}</Text>
            <Text style={[styles.text, {width: "80%", alignSelf: "center"}]}>{str.introBlock(qtdIntro)}</Text>
            <Text style={[styles.text, {width: "80%", alignSelf: "center"}]}>{str.mainBlock(qtdQuestion)}</Text>
            <Text style={[styles.text, {width: "80%", alignSelf: "center", marginTop: 12}]}>{str.qtdPeople(qtd_users)}</Text>

            <Text style={[styles.text, styles.total]}>{str.subTitle(total)}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAF9F6",
        marginTop: 15,
        marginBottom: 5,
        padding: 15,
        borderRadius: 10
    },
    text: {
        color: "black",
        fontWeight: "600"
    },
    total: {
        position: "absolute",
        right: 10,
        top: 10
    }
})

export default CardSearch;
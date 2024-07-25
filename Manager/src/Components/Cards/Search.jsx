import { StyleSheet, Text, TouchableOpacity } from "react-native";

function CardSearch({data, nav, token, toWhere}) {
    const {id, introduction: qtdIntro, search: qtdQuestion, qtd_users, total} = data;

    const handleClick = () => nav(toWhere, {searchId: id, token});

    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
            <Text style={styles.text}>Número de Protocolo da Pesquisa: {id}</Text>
            <Text style={styles.text}>Número de perguntas: {qtdIntro + qtdQuestion}</Text>
            <Text style={styles.text}>Entrevistadores: {qtd_users} pessoas</Text>
            <Text style={[styles.text, styles.total]}>{total}</Text>
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
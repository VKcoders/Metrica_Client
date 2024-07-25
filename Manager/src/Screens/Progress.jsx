import { useContext } from "react";
import { Global } from "../Context";
import { Text, ScrollView } from "react-native";

import { screens as styles } from "../Style";
import { strings } from "../Localized";
import ToggleMenu from "../Components/ToggleMenu";
import Background from "../Components/Background";
import Card from "../Components/Cards/Search";

function Progress({route: { name, params }, navigation: { navigate }}) {
    const { searchs, token } = useContext(Global);
    const localized = strings[name];
    const css = styles[name];

    return (
        <>
            <Background index={"1"} />
            <ToggleMenu currentLocation={name} nav={navigate} />
            <ScrollView>
                <Text style={css.title}>{localized.title}</Text>
                {
                    searchs.map((search, i) => <Card
                        key={"search-" + i}
                        token={token} data={search}
                        nav={navigate}
                        toWhere={"SearchStatus"}
                    />)
                }
                { searchs.length <= 0 && <Text style={css.noData}>{localized.noResult}</Text> }
            </ScrollView>
        </>
    )
}

export default Progress;
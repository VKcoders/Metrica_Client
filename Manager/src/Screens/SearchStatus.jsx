import { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";

import { screens as styles } from "../Style";
import Loader from "../Components/Loader";
import Return from "../Components/Return";
import Update from "../Components/Update";

import { getUsersProgressFromSearch } from "../Service/User"

function SearchStatus({route: { name, params }, navigation}) {
    const [update, setUpdate] = useState(false);
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    const css = styles[name];

    useEffect(() => {
        setLoad(true);
        const { searchId, token } = params;
        async function Job(id, token) {
            const fetchData = await getUsersProgressFromSearch(id, token);
            setData(fetchData);
            setLoad(false);
        };
        Job(searchId, token);
    }, [update]);

    return (
        <ScrollView>
            <View style={css.header}>
                <Return nav={navigation} />
                <Update action={setUpdate} />
            </View>
            {
                !!load ? (
                    <Loader />
                ) : (
                    <View style={css.content}>
                        {
                            data.map((user, i) => {
                                const dinamicWidth = user.progress < 40 ? "42%" : `${user.progress}%`
                                return (
                                    <View key={user + "-" + i} style={[css.userCard, {width: dinamicWidth}]}>
                                        <Text style={css.font}>{user.name}</Text>
                                        <Text style={css.font}>{user.progress} %</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                )
            }
        </ScrollView>
    )
}

export default SearchStatus;
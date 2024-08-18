import { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import { screens as styles } from "../Style";

import Loader from "../Components/Loader";
import Return from "../Components/Return";
import Update from "../Components/Update";
import Profile from "../Components/Cards/Profile";

import { getUsersProgressFromSearch } from "../Service/User"

function SearchStatus({route: { name, params }, navigation}) {
    const [update, setUpdate] = useState(false);
    const [stats, setStats] = useState({});
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const [trackerType, setTrackerType] = useState(true);

    const css = styles[name];

    useEffect(() => {
        setLoad(true);
        const { searchId, token } = params;
        async function Job(id, token) {
            const fetchData = await getUsersProgressFromSearch(id, token);

            const qtdUsers = fetchData.length;

            const resultStats = fetchData.reduce((acc, cur, index) => {
                acc.memory = acc.memory + cur.progress;

                if ((index + 1) === qtdUsers) {
                    acc.total = (acc.memory / qtdUsers).toFixed(2);
                    return acc;
                };

                return acc;
            }, {memory: 0, total: 0});
            
            setData(fetchData);
            setStats(resultStats);
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
                        <TouchableOpacity onPress={() => setTrackerType(p => !p)} style={css.mainBar}>
                            {
                                trackerType ? (
                                    <>
                                        <Text style={[css.mainBar.innerBar, {width: `${stats.total}%`}]} />
                                        <Text style={css.mainBar.text}>{stats.total}%</Text>
                                    </>
                                ) : (
                                    <>
                                        {/* Solve this on backend... new route */}
                                        <Text style={[css.mainBar.innerBar, {width: `${stats.total}%`}]} />
                                        <Text style={css.mainBar.text}>0000 / 0000</Text>
                                    </>
                                )
                            }
                            
                        </TouchableOpacity>
                        {
                            data.map((user, i) => <Profile key={user + "-" + i} data={user} tracker={trackerType} />)
                        }
                    </View>
                )
            }
        </ScrollView>
    )
}

export default SearchStatus;
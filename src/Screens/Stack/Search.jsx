import React, { useState, useEffect, useContext } from "react";
import { Global } from "../../Context";
import Block from "../../Components/Blocks";

import Loader from "../../Components/Loader"

import { getSearchById } from "../../Service/Search";
import { getSearchsWarning } from "../../Service/Warning";

function Search({navigation: { navigate }, route: {params}}) {
    const { token, user: {id} } = useContext(Global);
    const [searchInfo, setSearchInfo] = useState({});
    const [pipeline, setPipeline] = useState(["Warning", "Introduction", "Questions"]);
    const [index, setIndex] = useState(0);
    const [loader, setLoader] = useState(true);
    const [warning, setWarning] = useState({});

    useEffect(() => {
        async function Jobs() {
            const data = await getSearchById(params.searchId, token);
            const warnings = await getSearchsWarning(id, token);

            setSearchInfo(data);

            if (!warnings['first']) {
                setPipeline(["Introduction", "Questions"])
                setLoader(false)
            } else {
                setWarning(warnings)
                setLoader(false)
            }
        };
        Jobs()
    }, [])

    const handleNext = () => {
        if (pipeline.length === index + 1) {
            setIndex(0);
            navigate("Home");
            return;
        }
        setIndex(index + 1);
    }

    const DynamicComponent = Block[pipeline[index]];

    return !!loader ? (
        <Loader />
    ) : (
        <DynamicComponent 
            next={handleNext}
            warnings={warning}
            introId={searchInfo.introduction} 
            questionId={searchInfo.search}
            token={token}
            userId={id}
            searchId={params.searchId}
        />
    ) 
};

export default Search;
import React from "react";
import {ScriptProps} from "next/script";

const SearchBox: React.FC<ScriptProps> = () => {
    return (
        <>
            <input placeholder={"hello"}/>
        </>
    )
}

export default SearchBox
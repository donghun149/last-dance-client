import React from "react";
import {ScriptProps} from "next/script";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {idState} from "../states/states";
import {useRouter} from "next/router";

const SearchBox: React.FC<ScriptProps> = () => {
    const [id, setID] = useRecoilState(idState)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(id);
        setID(e.target.value);
    };

    const router = useRouter()
    const onSubmit = () => {
        console.log(id);
        router.push(`/users/${id}`)
    };

    return (
        <>
            <SearchBoxInput
                placeholder={"Put Your Github ID"}
                type="text"
                value={id}
                onChange={onChange}
            />
            <button
                onClick={onSubmit}
            >검색
            </button>
        </>
    )
}

export default SearchBox

const SearchBoxInput = styled.input`
  max-width: 250px;
  min-width: 250px;
`
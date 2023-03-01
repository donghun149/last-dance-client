import React, {ChangeEventHandler, MouseEventHandler} from "react";
import styled from "styled-components";
import {Search} from "@mui/icons-material";

const SearchContainer = styled.div`
  max-width: 500px;
  min-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid gainsboro;
  border-radius: 4px;
  padding: 2px;
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const SearchIcon = styled(Search)`
  margin-right: 1rem;
  font-size: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: calc(1em + 1rem);
  border: none;
  box-sizing: border-box;
`;


interface SearchBoxProps {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onClick: MouseEventHandler<any> | undefined
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchBox: React.FC<SearchBoxProps> = (
    {value, onChange, onClick, onKeyDown}
) => {
  return <SearchContainer>
    <Input
        type="text"
        placeholder="닉네임 혹은 이름을 검색하세요"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
    />
    <SearchIcon onClick={onClick}/>
  </SearchContainer>;
}

export default SearchBox
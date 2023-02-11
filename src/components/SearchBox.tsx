import React, {ChangeEventHandler} from "react";
import styled from "styled-components";
import {Search} from "@mui/icons-material";

const SearchContainer = styled.div`
  max-width: 500px;
  min-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px;
  padding: 1rem;
  border-radius: 4px;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const SearchIcon = styled(Search)`
  margin-right: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  padding-left: calc(1em + 1rem);
  border: none;
`;


interface SearchBoxProps {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchBox : React.FC<SearchBoxProps> = (
    { value, onChange, onKeyDown}
) => {
  return <SearchContainer>
    <Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
    />
    <SearchIcon/>
  </SearchContainer>;
}

export default SearchBox
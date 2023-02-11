import React, {useState} from 'react';
import styled from 'styled-components';
import SearchBox from "../components/SearchBox";

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 300px;
  margin-bottom: 40px;

  @media (max-width: 500px) {
    width: 60%;
  }
`;

const GoogleSearch: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(`Searching for "${searchText}"`);
    }
  };

  return (
      <Root>
        <Image src="/images/logo.jpeg" alt="Logo"/>
        <SearchBox value={searchText} onChange={(event) => setSearchText(event.target.value)}
                   onKeyDown={handleSearch}/>
      </Root>
  );
};

export default GoogleSearch;
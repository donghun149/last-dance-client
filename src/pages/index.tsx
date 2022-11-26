import SearchBox from "../components/SearchBox";
import React from "react";
import HexagonalIcon from '../../public/svg/hexagonal.svg';
import styled from "styled-components";

export default function HomePage() {
    return (
        <>
            <MainWrapper>
                <HexagonalLogo>
                    <HexagonalIcon/>
                </HexagonalLogo>
                <SearchBox/>
                <div>this is search home</div>
            </MainWrapper>
        </>
    )
}

const MainWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--ntp-one-google-bar-height));
  min-width: fit-content;
  padding-top: var(--ntp-one-google-bar-height);
  position: relative;
  z-index: 1;
`

const HexagonalLogo = styled.div`
  width: 200px;
  height: 200px;
`


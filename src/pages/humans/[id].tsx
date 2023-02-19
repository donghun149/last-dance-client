import React from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
import HumanContent from "../../components/humans/HumanContent";

interface Props {

}

const HumanPage: React.FC<Props> = () => {
  const router = useRouter()
  const {query} = router

  return (
      <Root>
        <Content>
          <ProfileImage src="/images/logo.jpeg"/>
          <NickName>
            {query.id}
          </NickName>
          <Name>
            류동훈
          </Name>
          <Description>
            서비스 개발이 취미인 평범한 서버 개발자입니다.
          </Description>
          <HumanContent/>
          <HumanContent/>
          <HumanContent/>
        </Content>
      </Root>
  )
}

const Root = styled.div`
  height: 100vh;
  padding-top: 60px;
`;

const Content = styled.div`
  padding-top: 30px;
  width: 800px;
  margin: 0 auto;
  @media (max-width: 400px) {
    width: 400px;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: 500px) {
    width: 60px;
    height: 60px;
  }
`;

const NickName = styled.div`
  font-size: 40px;
  font-weight: bold;
`
const Name = styled.div`
  font-size: 20px;
`
const Description = styled.div`
  padding-top: 10px;
  font-size: 15px;
`

export default HumanPage
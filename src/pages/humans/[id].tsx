import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
import HumanContent from "../../components/humans/HumanContent";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import userService from "../../apis/userService";
import {getTokenFromLocalStorage} from "../../utils/TokenUtils";

interface Props {
  human: Human
}

interface Human {
  email: string | '',
  nickname: string | '',
}

const HumanPage = ({human}: InferGetServerSidePropsType<GetServerSideProps>) => {
  console.log(human)
  const [isRender, setIsRender] = useState(false)
  const [isOwn, setIsOwn] = useState(false)
  const router = useRouter()
  const {query} = router

  useEffect(() => {
    const tokenFromLocalStorage = getTokenFromLocalStorage()
    userService.getIsOwn({
      email: human.email, token: (tokenFromLocalStorage || '').toString()
    }).then(isOwn => {
      if (isOwn) setIsOwn(true)
    }).catch(error => {
      console.log(error)
    })
  }, [isRender])

  const handleEdit = () => {
    router.push(`/humans/${human.nickname}/edit`)
  }

  return (
      <Root>
        <Content>
          <ProfileImage src="/images/logo.jpeg"/>
          <NickName>
            {query.id}
          </NickName>
          <ProfileHeader>
            <ProfileHeaderLeft>
              <Name>
                류동훈
              </Name>
              <Description>
                서비스 개발이 취미인 평범한 서버 개발자입니다.
              </Description>
            </ProfileHeaderLeft>
            <ProfileHeaderRight>
              {
                  isOwn && (
                      <EditButton onClick={handleEdit}>Edit</EditButton>
                  )
              }
            </ProfileHeaderRight>

          </ProfileHeader>
          <HumanContent/>
          <HumanContent/>
          <HumanContent/>
        </Content>
      </Root>
  )
}

type HumansQuery = {
  id: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const nickname = context.query.id as string;
  const human = await userService.getUserByNickname({nickname}).catch(error => {
    return {email: '', nickname: ''}
  });
  return {props: {human}};
};

const Root = styled.div`
  height: 100vh;
  padding-top: 60px;
`;

const Content = styled.div`
  padding-top: 30px;
  width: 800px;
  margin: 0 auto;
  @media (max-width: 400px) {
    width: 90%;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileHeader = styled.div`
  border-bottom: 1px gainsboro solid;
  display: flex;
  justify-content: space-between;
`

const ProfileHeaderLeft = styled.div`

`
const ProfileHeaderRight = styled.div`
`

const NickName = styled.div`
  font-size: 35px;
  font-weight: bold;
  padding: 5px 0;
`
const Name = styled.div`
  font-size: 15px;
  padding: 3px 0;
`
const Description = styled.div`
  padding: 3px 0 12px 0;
  font-size: 12px;
`

const EditButton = styled.button`
  text-align: center;
  cursor: pointer;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: normal;
  border-radius: 4px;
  border: 30px;
  word-break: keep-all;
  background: rgb(33, 37, 41);
  color: rgb(255, 255, 255);
  transition: all 0.125s ease-in 0s;
  box-sizing: border-box;
  line-height: 25px;
`


export default HumanPage
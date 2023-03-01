import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import userService from "../../../apis/userService";
import {getTokenFromLocalStorage} from "../../../utils/TokenUtils";

interface Props {
  human: Human
}

interface Human {
  email: string | '',
  nickname: string | '',
}

const HumanEditPage = ({human}: InferGetServerSidePropsType<GetServerSideProps>) => {
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

  const handleEditComplete = () => {
    router.push(`/humans/${human.nickname}`)
  }

  return (
      <Root>
        <Content>
          <ProfileImage
              src="https://velog.velcdn.com/images/pexe99/post/9faaadfd-1a8a-41b0-9e52-d85e0642d951/image.jpg"/>
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
                      <EditButton onClick={handleEditComplete}>Complete</EditButton>
                  )
              }
            </ProfileHeaderRight>
          </ProfileHeader>
          <HumanPostBoxWrapper>
            <HumanPostBox>
              <HumanPost>
                <HumanPostContentIfImgUpper>
                  <HumanPostContentImg
                      src="https://velog.velcdn.com/images/shyuuuuni/post/231a74ef-b786-4e29-8646-2a5bf645aaa6/image.gif"/>
                </HumanPostContentIfImgUpper>
                <HumanPostContentUpper>
                  <HumanPostContentUpperMain>
                    <HumanPostContentUpperTitle>
                      안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                    </HumanPostContentUpperTitle>
                    <HumanPostContentUpperDescriptionWrap>
                      <HumanPostContentUpperDescription>
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                      </HumanPostContentUpperDescription>
                    </HumanPostContentUpperDescriptionWrap>
                  </HumanPostContentUpperMain>
                  <HumanPostContentUpperSub>
                    <span>5일 전</span>
                    <HumanPostContentUpperSubSeparator>·</HumanPostContentUpperSubSeparator>
                    <span>13개의 댓글</span>
                  </HumanPostContentUpperSub>
                </HumanPostContentUpper>
                <HumanPostContentLower>
                  <HumanPostContentLowerDescription>
                    아래 부분입니다
                  </HumanPostContentLowerDescription>
                </HumanPostContentLower>
              </HumanPost>

              <HumanPost>
                <HumanPostContentIfImgUpper>
                  <HumanPostContentImg
                      src="https://velog.velcdn.com/images/chocochip/post/d8961fdf-949c-45a7-8127-98e8db986b91/image.png"/>
                </HumanPostContentIfImgUpper>
                <HumanPostContentUpper>
                  <HumanPostContentUpperMain>
                    <HumanPostContentUpperTitle>
                      안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                    </HumanPostContentUpperTitle>
                    <HumanPostContentUpperDescriptionWrap>
                      <HumanPostContentUpperDescription>
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                      </HumanPostContentUpperDescription>
                    </HumanPostContentUpperDescriptionWrap>
                  </HumanPostContentUpperMain>
                  <HumanPostContentUpperSub>
                    <span>5일 전</span>
                    <HumanPostContentUpperSubSeparator>·</HumanPostContentUpperSubSeparator>
                    <span>13개의 댓글</span>
                  </HumanPostContentUpperSub>
                </HumanPostContentUpper>
                <HumanPostContentLower>
                  <HumanPostContentLowerDescription>
                    아래 부분입니다
                  </HumanPostContentLowerDescription>
                </HumanPostContentLower>
              </HumanPost>

              <HumanPost>
                <HumanPostContentIfImgUpper>
                  <HumanPostContentImg
                      src="https://velog.velcdn.com/images/watasieun/post/90093496-0c60-45c4-a6fc-44e15efd2f77/image.jpg"/>
                </HumanPostContentIfImgUpper>
                <HumanPostContentUpper>
                  <HumanPostContentUpperMain>
                    <HumanPostContentUpperTitle>
                      안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                    </HumanPostContentUpperTitle>
                    <HumanPostContentUpperDescriptionWrap>
                      <HumanPostContentUpperDescription>
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                      </HumanPostContentUpperDescription>
                    </HumanPostContentUpperDescriptionWrap>
                  </HumanPostContentUpperMain>
                  <HumanPostContentUpperSub>
                    <span>5일 전</span>
                    <HumanPostContentUpperSubSeparator>·</HumanPostContentUpperSubSeparator>
                    <span>13개의 댓글</span>
                  </HumanPostContentUpperSub>
                </HumanPostContentUpper>
                <HumanPostContentLower>
                  <HumanPostContentLowerDescription>
                    아래 부분입니다
                  </HumanPostContentLowerDescription>
                </HumanPostContentLower>
              </HumanPost>

              <HumanPost>
                <HumanPostContentIfImgUpper>
                  <HumanPostContentImg
                      src="https://velog.velcdn.com/images/hyeonbinnn/post/6f269995-9e0f-41ef-9c1e-536c12a4c78d/image.jpg"/>
                </HumanPostContentIfImgUpper>
                <HumanPostContentUpper>
                  <HumanPostContentUpperMain>
                    <HumanPostContentUpperTitle>
                      안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                    </HumanPostContentUpperTitle>
                    <HumanPostContentUpperDescriptionWrap>
                      <HumanPostContentUpperDescription>
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                      </HumanPostContentUpperDescription>
                    </HumanPostContentUpperDescriptionWrap>
                  </HumanPostContentUpperMain>
                  <HumanPostContentUpperSub>
                    <span>5일 전</span>
                    <HumanPostContentUpperSubSeparator>·</HumanPostContentUpperSubSeparator>
                    <span>13개의 댓글</span>
                  </HumanPostContentUpperSub>
                </HumanPostContentUpper>
                <HumanPostContentLower>
                  <HumanPostContentLowerDescription>
                    아래 부분입니다
                  </HumanPostContentLowerDescription>
                </HumanPostContentLower>
              </HumanPost>

              <HumanPost>
                <HumanPostContentIfImgUpper>
                  <HumanPostContentImg
                      src="https://velog.velcdn.com/images/hyeonbinnn/post/6f269995-9e0f-41ef-9c1e-536c12a4c78d/image.jpg"/>
                </HumanPostContentIfImgUpper>
                <HumanPostContentUpper>
                  <HumanPostContentUpperMain>
                    <HumanPostContentUpperTitle>
                      안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                    </HumanPostContentUpperTitle>
                    <HumanPostContentUpperDescriptionWrap>
                      <HumanPostContentUpperDescription>
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                      </HumanPostContentUpperDescription>
                    </HumanPostContentUpperDescriptionWrap>
                  </HumanPostContentUpperMain>
                  <HumanPostContentUpperSub>
                    <span>5일 전</span>
                    <HumanPostContentUpperSubSeparator>·</HumanPostContentUpperSubSeparator>
                    <span>13개의 댓글</span>
                  </HumanPostContentUpperSub>
                </HumanPostContentUpper>
                <HumanPostContentLower>
                  <HumanPostContentLowerDescription>
                    아래 부분입니다
                  </HumanPostContentLowerDescription>
                </HumanPostContentLower>
              </HumanPost>
              <HumanPost>
                <HumanPostContentIfImgUpper>
                  <HumanPostContentImg
                      src="https://velog.velcdn.com/images/shyuuuuni/post/231a74ef-b786-4e29-8646-2a5bf645aaa6/image.gif"/>
                </HumanPostContentIfImgUpper>
                <HumanPostContentUpper>
                  <HumanPostContentUpperMain>
                    <HumanPostContentUpperTitle>
                      안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                    </HumanPostContentUpperTitle>
                    <HumanPostContentUpperDescriptionWrap>
                      <HumanPostContentUpperDescription>
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                      </HumanPostContentUpperDescription>
                    </HumanPostContentUpperDescriptionWrap>
                  </HumanPostContentUpperMain>
                  <HumanPostContentUpperSub>
                    <span>5일 전</span>
                    <HumanPostContentUpperSubSeparator>·</HumanPostContentUpperSubSeparator>
                    <span>13개의 댓글</span>
                  </HumanPostContentUpperSub>
                </HumanPostContentUpper>
                <HumanPostContentLower>
                  <HumanPostContentLowerDescription>
                    아래 부분입니다
                  </HumanPostContentLowerDescription>
                </HumanPostContentLower>
              </HumanPost>

              <HumanPost>
                <HumanPostContentIfImgUpper>
                  <HumanPostContentImg
                      src="https://velog.velcdn.com/images/chocochip/post/d8961fdf-949c-45a7-8127-98e8db986b91/image.png"/>
                </HumanPostContentIfImgUpper>
                <HumanPostContentUpper>
                  <HumanPostContentUpperMain>
                    <HumanPostContentUpperTitle>
                      안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                    </HumanPostContentUpperTitle>
                    <HumanPostContentUpperDescriptionWrap>
                      <HumanPostContentUpperDescription>
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                      </HumanPostContentUpperDescription>
                    </HumanPostContentUpperDescriptionWrap>
                  </HumanPostContentUpperMain>
                  <HumanPostContentUpperSub>
                    <span>5일 전</span>
                    <HumanPostContentUpperSubSeparator>·</HumanPostContentUpperSubSeparator>
                    <span>13개의 댓글</span>
                  </HumanPostContentUpperSub>
                </HumanPostContentUpper>
                <HumanPostContentLower>
                  <HumanPostContentLowerDescription>
                    아래 부분입니다
                  </HumanPostContentLowerDescription>
                </HumanPostContentLower>
              </HumanPost>

              <HumanPost>
                <HumanPostContentIfImgUpper>
                  <HumanPostContentImg
                      src="https://velog.velcdn.com/images/watasieun/post/90093496-0c60-45c4-a6fc-44e15efd2f77/image.jpg"/>
                </HumanPostContentIfImgUpper>
                <HumanPostContentUpper>
                  <HumanPostContentUpperMain>
                    <HumanPostContentUpperTitle>
                      안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                    </HumanPostContentUpperTitle>
                    <HumanPostContentUpperDescriptionWrap>
                      <HumanPostContentUpperDescription>
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                      </HumanPostContentUpperDescription>
                    </HumanPostContentUpperDescriptionWrap>
                  </HumanPostContentUpperMain>
                  <HumanPostContentUpperSub>
                    <span>5일 전</span>
                    <HumanPostContentUpperSubSeparator>·</HumanPostContentUpperSubSeparator>
                    <span>13개의 댓글</span>
                  </HumanPostContentUpperSub>
                </HumanPostContentUpper>
                <HumanPostContentLower>
                  <HumanPostContentLowerDescription>
                    아래 부분입니다
                  </HumanPostContentLowerDescription>
                </HumanPostContentLower>
              </HumanPost>

              <HumanPost>
                <HumanPostContentIfImgUpper>
                  <HumanPostContentImg
                      src="https://velog.velcdn.com/images/hyeonbinnn/post/6f269995-9e0f-41ef-9c1e-536c12a4c78d/image.jpg"/>
                </HumanPostContentIfImgUpper>
                <HumanPostContentUpper>
                  <HumanPostContentUpperMain>
                    <HumanPostContentUpperTitle>
                      안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                    </HumanPostContentUpperTitle>
                    <HumanPostContentUpperDescriptionWrap>
                      <HumanPostContentUpperDescription>
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                      </HumanPostContentUpperDescription>
                    </HumanPostContentUpperDescriptionWrap>
                  </HumanPostContentUpperMain>
                  <HumanPostContentUpperSub>
                    <span>5일 전</span>
                    <HumanPostContentUpperSubSeparator>·</HumanPostContentUpperSubSeparator>
                    <span>13개의 댓글</span>
                  </HumanPostContentUpperSub>
                </HumanPostContentUpper>
                <HumanPostContentLower>
                  <HumanPostContentLowerDescription>
                    아래 부분입니다
                  </HumanPostContentLowerDescription>
                </HumanPostContentLower>
              </HumanPost>

              <HumanPost>
                <HumanPostContentIfImgUpper>
                  <HumanPostContentImg
                      src="https://velog.velcdn.com/images/hyeonbinnn/post/6f269995-9e0f-41ef-9c1e-536c12a4c78d/image.jpg"/>
                </HumanPostContentIfImgUpper>
                <HumanPostContentUpper>
                  <HumanPostContentUpperMain>
                    <HumanPostContentUpperTitle>
                      안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                    </HumanPostContentUpperTitle>
                    <HumanPostContentUpperDescriptionWrap>
                      <HumanPostContentUpperDescription>
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                        안녕하세요 반갑습니다. 저는 류동훈이라고 합니다. 앞으로 잘부탁드립니다.
                      </HumanPostContentUpperDescription>
                    </HumanPostContentUpperDescriptionWrap>
                  </HumanPostContentUpperMain>
                  <HumanPostContentUpperSub>
                    <span>5일 전</span>
                    <HumanPostContentUpperSubSeparator>·</HumanPostContentUpperSubSeparator>
                    <span>13개의 댓글</span>
                  </HumanPostContentUpperSub>
                </HumanPostContentUpper>
                <HumanPostContentLower>
                  <HumanPostContentLowerDescription>
                    아래 부분입니다
                  </HumanPostContentLowerDescription>
                </HumanPostContentLower>
              </HumanPost>



            </HumanPostBox>
          </HumanPostBoxWrapper>
        </Content>
      </Root>
  )
}
const HumanPostBoxWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  cursor: auto;
  width: 100%;
  margin-left: -10px;
  margin-right: -10px;
`

const HumanPostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0;
  justify-content: flex-start;
`

const HumanPost = styled.div`
  width: 230px;
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0 4px 16px 0;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 10px 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  :hover {
    transform: translateY(-8px);
    box-shadow: rgb(0 0 0 / 8%) 0px 12px 20px 0px;
  }
`

const HumanPostContentIfImgUpper = styled.div`
  padding-top: 52.1921%;
  width: 100%;
  position: relative;
`

const HumanPostContentImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`

const HumanPostContentUpper = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
`

const HumanPostContentUpperMain = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`

const HumanPostContentUpperTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const HumanPostContentUpperDescriptionWrap = styled.div`
`

const HumanPostContentUpperDescription = styled.p`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  line-height: 1.5;
  //height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
`

const HumanPostContentUpperSub = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: gray;
`

const HumanPostContentUpperSubSeparator = styled.span`
  margin-left: 2px;
  margin-right: 2px;
`

const HumanPostContentLower = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: gray;
`

const HumanPostContentLowerDescription = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid var(--border4);
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  -webkit-box-pack: justify;
  justify-content: space-between;
`

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
  padding-top: 60px;
`;

const Content = styled.div`
  padding-top: 30px;
  width: 1000px;
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
  font-size: 17px;
  padding: 5px 0;
`
const Description = styled.div`
  padding: 2px 0 12px 0;
  font-size: 13px;
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


export default HumanEditPage
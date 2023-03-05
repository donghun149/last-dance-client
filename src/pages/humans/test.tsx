import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import userService from "../../apis/userService";
import {getTokenFromLocalStorage} from "../../utils/TokenUtils";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import PostBox from "../../components/Post";

interface Props {
  human: Human
}

interface Human {
  email: string | '',
  nickname: string | '',
}

const HumanPage = ({human}: InferGetServerSidePropsType<GetServerSideProps>) => {
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
    router.push(`/edit`)
  }

  return (
      <Root>
        <ProfileViewWrapper>
        <ProfileImageWrapper>
          <ProfileImage src="https://velog.velcdn.com/images/pexe99/post/9faaadfd-1a8a-41b0-9e52-d85e0642d951/image.jpg"/>
        </ProfileImageWrapper>
          <NickName>
            dong149
          </NickName>
          <Name>
            류동훈
          </Name>
          <Description>
            서비스 개발이 취미인 평범한 서버 개발자입니다.
          </Description>
        </ProfileViewWrapper>
        <ViewWrapper>
          <PostListViewSection>
            <PostListView>
              {PostDummyData.map((post) => (
                  <PostBox
                      key={post.id}
                      profileImage={post.profileImage}
                      nickname={post.nickname}
                      title={post.title}
                      description={post.description}
                      image={post.image}
                  />
              ))}


            </PostListView>
          </PostListViewSection>
          <PostViewSection>
            <PostViewWrapperWrapper>
              <PostViewWrapper>
                <PostView>
                  <MarkdownEditorWrapper>
                    <div className="markdown-body">
                      <ReactMarkdown children={MarkdownDummyData} remarkPlugins={[remarkGfm]}/>
                    </div>
                  </MarkdownEditorWrapper>
                </PostView>
              </PostViewWrapper>
            </PostViewWrapperWrapper>
          </PostViewSection>
        </ViewWrapper>
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
  //padding-top: 50px;
  display: flex;
  flex-direction: row;
  flex: 1 2 0;
`;

const ProfileViewWrapper = styled.aside`
  position: fixed;
  width: 300px;
  height: calc(100% - 0px);
  border-right: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`

const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 16px;
  aspect-ratio: 1/1;
  object-fit: cover;
  overflow: hidden;
  object-position: center;
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

const NickName = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-top: 10px;
`
const Name = styled.div`
  font-size: 18px;
  margin-top: 10px;
  padding: 3px 0;
`
const Description = styled.div`
  margin-top: 5px;
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

const ViewWrapper = styled.main`
  min-width: calc(804px);
  width: calc((100% - 400px) - 0px);
  min-height: calc(100% - 0px);
  margin-left: 300px;
  margin-right: 0;
  flex: 1 1 0;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  position: relative;
  z-index: 1;
`

const PostListViewSection = styled.section`
  width: 600px;
  margin: 0;
  display: block;
`

const PostListView = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 100%;
`

const PostViewSection = styled.section`
  left: 0px;
  height: calc(100%);
  width: calc((100% - 900px) - 0px);
  margin-left: 900px;
  margin-right: 0px;
  position: fixed;
  flex: 1 1 0;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  min-width: 532px;
  border-left: 1px solid gainsboro;
  padding-left: 30px;
  padding-right: 30px;
  z-index: 2;
`

const PostViewWrapperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: gainsboro;
  flex: 1 1 0;
`

const PostViewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 1;
`

const PostView = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin-top: 0px;
  padding-top: 0px;
  overflow: auto;
  overscroll-behavior-y: auto;
`

const PostDummyData = [
  {
    id: "1",
    profileImage: "https://upload.cafenono.com/image/user/20220516/204803_YQuxlM04P8cVp3DvEJ?q=50&s=1440x1&t=outside",
    nickname: "dong149",
    title: "오늘은 작업할 내용이 많습니다.",
    description: "오늘은 틀을 한 번 잡아보았습니다. 이 틀을 일단은 메인 틀로 가져가보려 합니다.",
    image: "https://velog.velcdn.com/images/shyuuuuni/post/231a74ef-b786-4e29-8646-2a5bf645aaa6/image.gif",
  },
  {
    id: "2",
    profileImage: "https://upload.cafenono.com/image/user/20211123/121943_kB8KN4SvB0lzMZXHaI?q=50&s=1440x1&t=outside",
    nickname: "dong149",
    title: "삼성전자, 폴더블폰 물방울 힌지 신뢰성",
    description: "3월입니다.\n" +
        "작년 12월에 마지막으로 오늘의 운동을 올렸습니다. 일이 바빠지고 정신이 없다는 핑계로 매주 매주 올리던 습관을 놓아버렸네요. 한 번 쓰지 않기 시작하니까 이렇게 세 달이 지나버렸습니다. 모두들 잘 지내고 계신가요?",
    image: "https://velog.velcdn.com/images/chocochip/post/d8961fdf-949c-45a7-8127-98e8db986b91/image.png",
  },
  {
    id: "3",
    profileImage: "https://upload.cafenono.com/image/user/20220516/204803_YQuxlM04P8cVp3DvEJ?q=50&s=1440x1&t=outside",
    nickname: "dong149",
    title: "삼성전자, 폴더블폰 물방울 힌지 신뢰성",
    description: "3월입니다.\n" +
        "작년 12월에 마지막으로 오늘의 운동을 올렸습니다. 일이 바빠지고 정신이 없다는 핑계로 매주 매주 올리던 습관을 놓아버렸네요. 한 번 쓰지 않기 시작하니까 이렇게 세 달이 지나버렸습니다. 모두들 잘 지내고 계신가요?",
    image: "https://proxy.cafenono.com/external-image?url=https%3A%2F%2Fimage.imnews.imbc.com%2Freplay%2F2023%2Fnwtoday%2Farticle%2F__icsFiles%2Fafieldfile%2F2023%2F03%2F05%2Ftoday_20230305_070152_1_1_Large.jpg",
  },
  {
    id: "4",
    profileImage: "https://upload.cafenono.com/image/user/20220516/204803_YQuxlM04P8cVp3DvEJ?q=50&s=1440x1&t=outside",
    nickname: "dong149",
    title: "삼성전자, 폴더블폰 물방울 힌지 신뢰성",
    description: "3월입니다.\n" +
        "작년 12월에 마지막으로 오늘의 운동을 올렸습니다. 일이 바빠지고 정신이 없다는 핑계로 매주 매주 올리던 습관을 놓아버렸네요. 한 번 쓰지 않기 시작하니까 이렇게 세 달이 지나버렸습니다. 모두들 잘 지내고 계신가요?",
    image: "https://upload.cafenono.com/image/user/20220516/204803_YQuxlM04P8cVp3DvEJ?q=50&s=1440x1&t=outside",
  }
]

const MarkdownEditorWrapper = styled.div`
  .markdown-body {
    box-sizing: border-box;
    width: 100%;
    padding: 0;
    padding-top: 30px;
    margin: 0;
    color: #24292e;
    font-size: 16px;
    line-height: 1.5;
    -webkit-text-size-adjust: none;
    background-color: #fff; /* 배경색 추가 */
  }

  .markdown-body pre,
  .markdown-body code {
    background-color: #f6f8fa;
    color: #24292e;
  }

  .markdown-body a {
    color: #0366d6;
  }

  .markdown-body hr {
    border-bottom-color: #eee;
  }

  .markdown-body blockquote {
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  .markdown-body img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
`


const MarkdownDummyData = `
# 테스트 컨텐츠입니다.
마크다운으로 보여지는 곳입니다. 

## 해야될 작업이 너무 많습니다.
어느 세월에 다하지?

## 최대한 가볍게 합시다.
일단, 최소한의 기능을 정의합시다.

- [ ] 포스팅 기능
- [x] 테스트하기

# 테스트 컨텐츠입니다.
마크다운으로 보여지는 곳입니다. 

## 해야될 작업이 너무 많습니다.
어느 세월에 다하지?

## 최대한 가볍게 합시다.
일단, 최소한의 기능을 정의합시다.

- [ ] 포스팅 기능
- [x] 테스트하기

# 테스트 컨텐츠입니다.
마크다운으로 보여지는 곳입니다. 

## 해야될 작업이 너무 많습니다.
어느 세월에 다하지?

## 최대한 가볍게 합시다.
일단, 최소한의 기능을 정의합시다.

- [ ] 포스팅 기능
- [x] 테스트하기

# 테스트 컨텐츠입니다.
마크다운으로 보여지는 곳입니다. 

## 해야될 작업이 너무 많습니다.
어느 세월에 다하지?

## 최대한 가볍게 합시다.
일단, 최소한의 기능을 정의합시다.

- [ ] 포스팅 기능
- [x] 테스트하기

# 테스트 컨텐츠입니다.
마크다운으로 보여지는 곳입니다. 

## 해야될 작업이 너무 많습니다.
어느 세월에 다하지?

## 최대한 가볍게 합시다.
일단, 최소한의 기능을 정의합시다.

- [ ] 포스팅 기능
- [x] 테스트하기
`

export default HumanPage

import React from "react";
import styled from "styled-components";

interface PostProps {
  profileImage: string,
  nickname: string,
  title: string,
  description: string,
  image: string,
}

const PostBox: React.FC<PostProps> =
    ({
       profileImage,
       nickname,
       title,
       description,
       image
     }) => {
      return (
          <PostWrapper>
            <Post>
              <PostLeftWrapper>
                <PostProfileImageWrapper>
                  <PostProfileImage src={profileImage}/>
                </PostProfileImageWrapper>
              </PostLeftWrapper>
              <PostRightWrapper>
                <PostRightTitle>{title}</PostRightTitle>
                <PostRightDescription>{description}</PostRightDescription>
                <PostRightImageWrapper>
                  <PostRightImage src={image}/>
                </PostRightImageWrapper>
              </PostRightWrapper>
            </Post>
          </PostWrapper>
      )
    }

const PostWrapper = styled.div`
  opacity: 1;
  padding: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  transform: translateY(0);
  transition: transform 0.3s ease;
`

const Post = styled.div`
  display: flex;
  width: 100%;
  padding: 18px 30px 16px 30px;
  flex-direction: row;
  flex-wrap: nowrap;
  cursor: pointer;

  :hover {
    background-color: whitesmoke;
  }
`

const PostLeftWrapper = styled.div`

`

const PostProfileImageWrapper = styled.div`
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  width: 44px;
  height: 44px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
`
const PostProfileImage = styled.img`
  width: 100%;
  height: 100%;
`

const PostRightWrapper = styled.div`
  padding-left: 12px;
`

const PostRightTitle = styled.div`
  font-size: 18px !important;
  font-weight: bold;
`

const PostRightDescription = styled.div`
  padding-top: 10px;
  line-height: 20px;
  padding-bottom: 10px;
`

const PostRightImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 210px;
  border-radius: 16px;
  overflow: hidden;
`

const PostRightImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: transparent;
  max-height: 210px;
  object-fit: cover;
  object-position: 50% 0%;
`

export default PostBox
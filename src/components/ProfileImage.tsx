import Link from "next/link";
import styled from "styled-components";

export type ProfileImageProps = {
    url: string
}

export default function ProfileImage(props: ProfileImageProps) {
    return (
        <ProfileWrapper>
            <img src={props.url} alt="profile"/>
        </ProfileWrapper>
    )
}

const ProfileWrapper = styled.div`
  margin: 0;
  padding: 8px;
  font-size: 13px;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  justify-content: space-between;
`
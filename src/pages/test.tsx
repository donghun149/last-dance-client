import React, {useState} from "react";
import 'react-quill/dist/quill.snow.css'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {tokenState} from "../states/states";
import MarkdownEditor from "../components/MarkdownEditor";
import HexagonalIcon from '../../public/svg/hexagonal.svg';

interface Props {
}

const MobileAdaptivePage: React.FC<Props> = () => {
  const [token, setToken] = useRecoilState(tokenState)
  const [content, setContent] = useState<string | undefined>("글을 작성해주세요.");

  return (
      <div style={{
        display: "flex",
        flexDirection: "row",
        width: "1000px",
        margin: "0 auto",
        minHeight: "100vh",
        maxHeight: "100vh"
      }}>
        <div style={{
          flex: 6,
          borderRight: "1px solid #D5D5D5",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          minHeight: "100vh",
          maxHeight: "100vh"
        }}>
          <div style={{overflow: "auto",width: "100%"}}>
            <NewsFeed/>
          </div>
          <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end"
              }}
          >
            <MarkdownEditor
                value={content}
                onChange={setContent}
                style={{
                  width: "100%",
                }}
            />
          </div>
        </div>
        <div style={{flex: 4, paddingTop: "50px", display: "flex", flexDirection: "column"}}>
          <div
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "30px",
                paddingLeft: "20px"
              }}
          >
            <HexagonalIcon/>
          </div>
          {token != '' ? <LogOutButton/> : <LoginButton/>}
          <Menu title="랭킹"/>
          <Menu title="출퇴근"/>
        </div>
      </div>
  );
};

interface MenuProps {
  title: string;
}

const Menu: React.FC<MenuProps> = ({title}) => {
  return (
      <div style={{
        fontSize: "26px",
        lineHeight: "26px",
        backgroundColor: "white",
        marginBottom: "20px",
        paddingLeft: "20px",
        fontWeight: "bold",
        cursor: "pointer"
      }}>
        {title}
      </div>
  );
};

interface LoginButtonProps {

}

const LoginButton: React.FC<LoginButtonProps> = () => {
  const router = useRouter()

  const pushToLoginPage = () => {
    router.push(`/login`)
  }

  return (
      <div
          style={{
            fontSize: "26px",
            lineHeight: "26px",
            backgroundColor: "white",
            marginBottom: "20px",
            paddingLeft: "20px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          onClick={pushToLoginPage}
      >
        로그인
      </div>
  )
}

interface LogOutButtonProps {

}

const LogOutButton: React.FC<LogOutButtonProps> = () => {
  const router = useRouter()

  const pushToLoginPage = () => {
    router.push(`/logout`)
  }

  return (
      <div
          style={{
            fontSize: "26px",
            lineHeight: "26px",
            backgroundColor: "white",
            marginBottom: "20px",
            paddingLeft: "20px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          onClick={pushToLoginPage}
      >
        로그아웃
      </div>
  )
}


interface CompanyTitleProps {
  title: string;
}

const MainTitle: React.FC<CompanyTitleProps> = ({title}) => {
  return (
      <h1 style={{
        fontSize: "40px",
        fontWeight: "bold",
        marginBottom: "50px",
        paddingLeft: "20px",
      }}>
        {title}
      </h1>
  );
};

interface News {
  username: string;
  profileImage: string;
  content: string;
  link?: string;
  time: Date;
}

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<News[]>([{
    username: "User 1",
    profileImage: "https://via.placeholder.com/50x50",
    content: "Content 1",
    link: "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
    time: new Date(Date.now() - 60 * 60 * 1000)
  }, {
    username: "User 2",
    profileImage: "https://via.placeholder.com/50x50",
    content: "Content 2",
    link: "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
    time: new Date(Date.now() - 5 * 60 * 1000)
  }, {
    username: "User 3",
    profileImage: "https://via.placeholder.com/50x50",
    content: "Content 3",
    time: new Date(Date.now())
  },]);

  const calculateTime = (date: Date) => {
    const currentDate = new Date();
    const diffInSeconds = (currentDate.getTime() - date.getTime()) / 1000;
    if (diffInSeconds < 60) {
      return "방금 전";
    } else if (diffInSeconds < 60 * 60) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${diffInMinutes}분 전`;
    } else if (diffInSeconds < 24 * 60 * 60) {
      const diffInHours = Math.floor(diffInSeconds / (60 * 60));
      return `${diffInHours}시간 전`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {news.map((n, index) => (
            <div key={index} style={{
              width: "80%",
              padding: "10px",
              marginTop: "20px",
              borderRadius: "4px",
              boxShadow: "rgb(0 0 0 / 4%) 0px 4px 16px 0px"
            }}>
              <div style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                <img src={n.profileImage} style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "10px"
                }}/>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h3 style={{fontWeight: "bold"}}>{n.username}</h3>
                  <p style={{fontSize: "12px", color: "#8E8E93"}}>{calculateTime(n.time)}</p>
                </div>
              </div>
              {n.link ? (
                  <a href={n.link} target="_blank">
                    <img
                        src={`${n.link}`}
                        style={{width: "100%", marginBottom: "10px"}}
                    />
                  </a>
              ) : null}
              <p>{n.content}</p>
            </div>
        ))}
      </div>
  );
};


export default MobileAdaptivePage;

import React from "react";

interface Props {
}

const LoginPage: React.FC<Props> = () => {
  return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "1000px",
        margin: "0 auto",
        minHeight: "100vh",
        justifyContent: "center"
      }}>
        <Title content="COMPANY"/>
        <Input placeHolder="이메일 혹은 코드를 입력하세요"/>
      </div>
  );
};

interface TitleProps {
  content: string;
}

const Title: React.FC<TitleProps> = ({content}) => {
  return (
      <div style={{margin: "0 auto", marginTop: "-50px", textAlign: "center"}}>
        <h1 style={{fontSize: "50px", fontWeight: "bold"}}>{content}</h1>
      </div>
  )
}

interface InputProps {
  placeHolder: string;
}

const Input: React.FC<InputProps> = ({placeHolder}) => {
  return (
      <div style={{margin: "0 auto", marginTop: "50px", minWidth: "400px", textAlign: "center"}}>
        <input
            style={{padding: "5px", width: "80%"}}
            placeholder={placeHolder}
        />
      </div>
  )
}

export default LoginPage;

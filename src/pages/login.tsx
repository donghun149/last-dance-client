import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import userService from "../apis/userService";
import {useRecoilState} from "recoil";
import {tokenState} from "../states/states";

interface Props {
}

const LoginPage: React.FC<Props> = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [submit, setSubmit] = useState(false)

  const [token, setToken] = useRecoilState(tokenState)
  const router = useRouter()

  useEffect(() => {
    if (!submit) return
    userService.login({email: email, password: password}
    ).then(data => {
      const jwt = data as string

      setToken(jwt)
      alert(`토큰이 발급되었습니다. ${jwt}`)
      router.push(`/`)
    }).catch(e => {
      alert(`로그인에 실패했습니다.`)
      setSubmit(false)
    })
  }, [submit])

  const handleSubmit = () => {
    setSubmit(true)
  }

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
        <SubTitle content="로그인"/>
        <InputForm value={email} placeHolder="이메일을 입력하세요" onChange={setEmail}/>
        <InputForm value={password} placeHolder="패스워드를 입력하세요" type="password"
                   onChange={setPassword}/>
        <LoginButton onClick={handleSubmit}/>
      </div>
  );
};

interface TitleProps {
  content: string;
}

const Title: React.FC<TitleProps> = ({content}) => {
  return (
      <div
          style={{margin: "0 auto", textAlign: "center"}}>
        <h1 style={{fontSize: "50px", fontWeight: "bold"}}>{content}</h1>
      </div>
  )
}

interface SubTitleProps {
  content: string;
}

const SubTitle: React.FC<SubTitleProps> = ({content}) => {
  return (
      <div
          style={{
            margin: "0 auto",
            minWidth: "400px",
            marginTop: "90px",
            marginBottom: "20px",
            textAlign: "center"
          }}
      >
        <h1 style={{fontSize: "30px", fontWeight: "bold"}}>{content}</h1>
      </div>
  )
}

interface InputFormProps {
  value: string
  placeHolder: string,
  type?: string | "email",
  onChange: (value: string) => void
}

const InputForm: React.FC<InputFormProps> = ({value, placeHolder, type, onChange}) => {
  const [content, setContent] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setContent(inputValue)
    onChange(inputValue)
  }

  return (
      <div style={{margin: "0 auto", marginTop: "10px", minWidth: "400px", textAlign: "center"}}>
        <input
            style={{padding: "5px", width: "80%"}}
            placeholder={placeHolder}
            onChange={handleChange}
            value={content}
            type={type}
        />
      </div>
  )
}

interface LoginButton {
  onClick: () => void
}

const LoginButton: React.FC<LoginButton> = ({onClick}) => {
  return (
      <button
          onClick={onClick}
          style={{
            margin: "0 auto",
            marginTop: "30px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: "blue"
          }}
      >
        시작하기
      </button>
  )
}

interface InputAndButtonProps {
  value: string
  placeHolder: string
  onChange: (value: string) => void
}

export default LoginPage;

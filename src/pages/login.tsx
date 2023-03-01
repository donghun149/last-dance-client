import React, {useState} from "react";
import {useRouter} from "next/router";
import userService from "../apis/userService";
import {useRecoilState} from "recoil";
import {tokenState} from "../states/states";
import {setTokenToLocalStorage} from "../utils/TokenUtils";
import styled from "styled-components";

interface Props {
}

const LoginPage: React.FC<Props> = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [token, setToken] = useRecoilState(tokenState)
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    userService.login({email: email, password: password}
    ).then(data => {
      const jwt = data as string
      setToken(jwt)
      setTokenToLocalStorage(jwt)
      router.push(`/`)
    }).catch(e => {
      setEmail("")
      setPassword("")
      alert(`로그인에 실패했습니다.`)
    })
  }

  const goRegister = () => {
    router.push(`/register`)
  }

  return (
      <Root>
        <Content>
          <Title content="로그인"/>
          <form onSubmit={handleSubmit}>
            <InputFormWrap>
              <InputForm value={email} placeHolder="이메일을 입력하세요" onChange={setEmail} type="email"/>
              <InputForm value={password} placeHolder="패스워드를 입력하세요" type="password"
                         onChange={setPassword}/>
            </InputFormWrap>
            <LoginButton/>
          </form>
          <RegisterDescription>
            <RegisterButton onClick={goRegister}>회원가입</RegisterButton>
          </RegisterDescription>
        </Content>
      </Root>
  );
};

const RegisterDescription = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  color: #757575;
`

const RegisterButton = styled.span`
  color: black;
  cursor: pointer;
`

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

interface InputFormProps {
  value: string
  placeHolder: string,
  type?: string | "email",
  onChange: (value: string) => void
}

const InputForm: React.FC<InputFormProps> = ({value, placeHolder, type, onChange}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    onChange(inputValue)
  }

  let autoCompleteType = type
  if (type === "password") {
    autoCompleteType = "current-password"
  }

  return (
      <InputWrap>
        <Input
            placeholder={placeHolder}
            onChange={handleChange}
            value={value}
            type={type}
            autoComplete={autoCompleteType}
        />
      </InputWrap>
  )
}

const InputWrap = styled.div`
  width: 100%;
  margin-top: 10px;
  outline: none;
  border: 1px solid gainsboro;
`

const Input = styled.input`
  padding: 10px;
  width: 100%;
  outline: none;
  border: none;
  box-sizing: border-box;
`

const InputFormWrap = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding-top: 30px;
  width: 800px;
  margin: 0 auto;
  @media (max-width: 400px) {
    width: 90%;
  }
`;

interface LoginButton {
}

const LoginButton: React.FC<LoginButton> = ({}) => {
  return (
      <LoginButtonWrapper>
        <LoginButtonWrap type="submit">
          시작하기
        </LoginButtonWrap>
      </LoginButtonWrapper>
  )
}
const LoginButtonWrapper = styled.div`
  width: 90px;
  margin: 0 auto;
  margin-top: 20px;
`
const LoginButtonWrap = styled.button`
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 4px 16px;
  font-size: 15px;
  font-weight: normal;
  border-radius: 4px;
  border: 30px;
  word-break: keep-all;
  background: rgb(33, 37, 41);
  color: rgb(255, 255, 255);
  transition: all 0.125s ease-in 0s;
  box-sizing: border-box;
  line-height: 30px;
`

interface InputAndButtonProps {
  value: string
  placeHolder: string
  onChange: (value: string) => void
}

export default LoginPage;

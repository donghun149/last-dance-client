import React, {useState} from "react";
import userService from "../apis/userService";
import {useRouter} from "next/router";
import styled from "styled-components";

interface Props {
}

const RegisterPage: React.FC<Props> = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    userService.register({
      email: email,
      name: name,
      password: password
    }).then(() => {
      router.push(`/login`)
    }).catch(e => {
      setEmail("")
      setName("")
      setPassword("")
      alert(`회원가입에 실패했습니다.`)
    })
  }

  return (
      <Root>
        <Content>
          <Title content="회원가입"/>
          <form onSubmit={handleSubmit}>
            <InputFormWrap>
              <InputForm
                  value={email}
                  placeHolder="이메일을 입력하세요"
                  type="email"
                  onChange={setEmail}
              />
              <InputForm
                  value={name}
                  placeHolder="이름을 입력하세요"
                  type="username"
                  onChange={setName}
              />
              <InputForm
                  value={password}
                  placeHolder="패스워드를 입력하세요"
                  type="password"
                  onChange={setPassword}
              />
            </InputFormWrap>
            <RegisterButton/>
          </form>
        </Content>
      </Root>
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

interface RegisterButtonProps {
}

const RegisterButton: React.FC<RegisterButtonProps> = ({}) => {
  return (
      <RegisterButtonWrapper>
        <RegisterButtonWrap type="submit">
          등록하기
        </RegisterButtonWrap>
      </RegisterButtonWrapper>
  )
}

const RegisterButtonWrapper = styled.div`
  width: 90px;
  margin: 0 auto;
  margin-top: 20px;
`

const RegisterButtonWrap = styled.button`
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

export default RegisterPage;

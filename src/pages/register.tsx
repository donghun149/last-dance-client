import React, {useEffect, useState} from "react";
import userService from "../apis/userService";
import {useRouter} from "next/router";

interface Props {
}

const RegisterPage: React.FC<Props> = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [submit, setSubmit] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!submit) return
    userService.register({
      email: email,
      name: name,
      password: password
    }).then(() => {
      router.push(`/login`)
    }).catch(() => {
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
        <SubTitle content="회원가입"/>
        <InputForm value={email} placeHolder="이메일을 입력하세요" onChange={setEmail}/>
        <InputForm value={name} placeHolder="이름을 입력하세요" onChange={setName}/>
        <InputForm value={password} placeHolder="패스워드를 입력하세요" type="password"
                   onChange={setPassword}/>
        <RegisterButton onClick={handleSubmit}/>
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

interface RegisterButtonProps {
  onClick: () => void
}

const RegisterButton: React.FC<RegisterButtonProps> = ({onClick}) => {
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
        등록하기
      </button>
  )
}

export default RegisterPage;

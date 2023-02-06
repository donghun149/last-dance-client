import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import userService from "../apis/userService";

interface Props {
}

const LoginPage: React.FC<Props> = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    if (!submit) return
    userService.login({email: email, password: password}
    ).then(response => {
      console.log(response)
      const token = response.data as string
      console.log(token)
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
        <InputAndButton value={email} placeHolder="이메일을 입력하세요" onChange={setEmail}/>
        <InputAndButton value={password} placeHolder="패스워드를 입력하세요" onChange={setPassword}/>
        <button onClick={handleSubmit}>제출</button>
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
  value: string
  placeHolder: string
  onChange: (value: string) => void
}

const InputAndButton: React.FC<InputProps> = ({value, placeHolder, onChange}) => {
  const [content, setContent] = useState("")
  const [contentIsNull, setContentIsNull] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setContent(inputValue)
    onChange(inputValue)
  }

  useEffect(() => {
    if (value == "")
      setContentIsNull(true)
    else
      setContentIsNull(false)
  }, [content])

  const router = useRouter()

  const handleSubmit = () => {
    router.push(`/main`)
  }

  return (
      <div style={{margin: "0 auto", marginTop: "50px", minWidth: "400px", textAlign: "center"}}>
        <input
            style={{padding: "5px", width: "80%"}}
            placeholder={placeHolder}
            onChange={handleChange}
            value={content}
            type="email"
        />
        {!contentIsNull && (
            <button onClick={handleSubmit} style={{paddingLeft: "10px"}}>
              제출
            </button>)}
      </div>
  )
}

export default LoginPage;

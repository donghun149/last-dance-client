import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

interface Props {
}

const LoginPage: React.FC<Props> = () => {
  const [content, setContent] = useState("")
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
        <InputAndButton value={content} placeHolder="이메일 혹은 코드를 입력하세요" onChange={setContent}/>
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

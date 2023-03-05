import {NextComponentType} from "next"
import {AppContext, AppInitialProps, AppProps} from "next/app";
import {darkTheme, GlobalStyle, lightTheme} from "../styles/global-style";
import {useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import {RecoilRoot} from "recoil";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
      <div>
        <RecoilRoot>
          <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
            <GlobalStyle/>
            {/*<Navigation/>*/}
            {/*<button onClick={toggleTheme}>Switch Mode</button>*/}
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ButtonWrap>
              <Button>Home</Button>
              <Button>Login</Button>
            </ButtonWrap>
          </ThemeProvider>
          <GlobalStyle/>
        </RecoilRoot>
      </div>
  )
}

const Layout = styled.div`
  background: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text};
  height: 100%;
`

const ButtonWrap = styled.div`
  bottom: 20px;
  left: 10px;
  display: flex;
  position: fixed;
  z-index: 999;
`

const Button = styled.button`
  text-align: center;
  cursor: pointer;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: normal;
  border-radius: 4px;
  border: 30px;
  word-break: keep-all;
  background: rgb(33, 37, 41);
  color: rgb(255, 255, 255);
  transition: all 0.125s ease-in 0s;
  box-sizing: border-box;
  line-height: 25px;
  z-index: 999;
  margin-left: 10px;
`


App.getInitialProps = async ({Component, ctx}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {pageProps};
}

export default App;
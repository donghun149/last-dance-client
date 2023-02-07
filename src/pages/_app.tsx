import {NextComponentType} from "next"
import {AppContext, AppInitialProps, AppProps} from "next/app";
import {darkTheme, GlobalStyle, lightTheme} from "../styles/global-style";
import Header from "../components/Header";
import {useEffect, useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import {RecoilRoot} from "recoil";

const INACTIVITY_TIMEOUT = 10 * 1000; // 60 seconds

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const onActivity = () => {
      setIsActive(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsActive(false), INACTIVITY_TIMEOUT);
    };

    document.addEventListener('mousemove', onActivity);
    document.addEventListener('keypress', onActivity);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousemove', onActivity);
      document.removeEventListener('keypress', onActivity);
    };
  }, []);

  return <>
    <RecoilRoot>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyle/>
        {/*<Header/>*/}
        {/*<button onClick={toggleTheme}>Switch Mode</button>*/}

        <Layout>
          <div>
            <h1>User is {isActive ? 'active' : 'inactive'}</h1>
          </div>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <GlobalStyle/>
    </RecoilRoot>
  </>
}

const Layout = styled.div`
  background: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text};
`


App.getInitialProps = async ({Component, ctx}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {pageProps};
}

export default App;
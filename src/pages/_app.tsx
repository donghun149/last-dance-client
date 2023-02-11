import {NextComponentType} from "next"
import {AppContext, AppInitialProps, AppProps} from "next/app";
import {darkTheme, GlobalStyle, lightTheme} from "../styles/global-style";
import {useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import {RecoilRoot} from "recoil";
import Navigation from "../components/Navigation";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return <div
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "hidden"
      }}
  >
    <RecoilRoot>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyle/>
        <Navigation/>
        {/*<Header/>*/}
        {/*<button onClick={toggleTheme}>Switch Mode</button>*/}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <GlobalStyle/>
    </RecoilRoot>
  </div>
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
import {NextComponentType} from "next"
import {AppContext, AppInitialProps, AppProps} from "next/app";
import {darkTheme, GlobalStyle, lightTheme} from "../styles/global-style";
import Header from "../components/Header";
import {useState} from "react";
import styled, {ThemeProvider} from "styled-components";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    };

    return <>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
            <GlobalStyle/>
            <Header/>
            <button onClick={toggleTheme}>Switch Mode</button>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
        <GlobalStyle/>
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
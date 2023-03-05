import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";
import {ServerStyleSheet} from "styled-components";

export default class CustomDocument extends Document {
  static async getInitialProps(
      ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
          });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
        <Html>
          <Head>
            <title>HumanZIP</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, width=device-width, minimum-scale=1.0, maximum-scale=1.0,  user-scalable=no"
            />
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.css"
                  integrity="sha512-n5zPz6LZB0QV1eraRj4OOxRbsV7a12eAGfFcrJ4bBFxxAwwYDp542z5M0w24tKPEhKk2QzjjIpR5hpOjJtGGoA=="
                  crossOrigin="anonymous" referrerPolicy="no-referrer"
            />
          </Head>
          <body>
          <Main/>
          </body>
          <NextScript/>
        </Html>
    );
  }
}

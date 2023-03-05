import {createGlobalStyle, DefaultTheme} from 'styled-components';
import reset from "styled-reset";
import {media} from "./theme";

export const lightTheme: DefaultTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
};

export const darkTheme: DefaultTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
};

export const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
  }

  .w-md-editor-text-pre > code,
  .w-md-editor-text-input {
    font-size: 18px !important;
    line-height: 27px !important;
  }
  
  ${reset}
  :focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    font-size: 15px;
    -webkit-text-size-adjust: none;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    
    // ${media.tablet} {
    //   font-size: 11px;
    // }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: default;
      fill: #f2f3f4;
    }
  }

  .pc-tablet-only {
    display: block;

    ${media.mobile} {
      display: none;
    }
  }

  .tablet-mobile-only {
    display: none;

    ${media.tablet} {
      display: block;
    }
  }

  .mobile-only {
    display: none;

    ${media.mobile} {
      display: block;
    }
  }

  .markdown-body {
    box-sizing: border-box;
    //min-width: 200px;
    //max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
`;
import styled, {css} from "styled-components";

const customMediaQuery = (maxWidth: number): string =>
    `@media (max-width: ${maxWidth}px)`;
export const media = {
    custom: customMediaQuery,
    tablet: customMediaQuery(1234),
    mobile: customMediaQuery(420),
};

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 4.2rem;
  box-sizing: border-box;
  max-width: 144rem;
  ${media.mobile} {
    padding: 0 2rem;
  }
`;
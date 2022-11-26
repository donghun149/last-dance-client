import Link from "next/link";
import styled from "styled-components";

export default function Header() {
    return (
        <HeaderWrapper>
            <nav>
                <Link href="/">
                    home
                </Link>
                <Link href="/about">
                    about
                </Link>
            </nav>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
  margin: 0;
  padding: 8px;
  font-size: 13px;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
`
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router";
import {
  getTokenFromLocalStorage,
  isTokenExpired,
  removeTokenFromLocalStorage
} from "../utils/TokenUtils";
import {useRecoilState} from "recoil";
import {tokenState} from "../states/states";
import LogoSvg from '../../public/svg/logo.svg';

const Navigation: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [token, setToken] = useRecoilState(tokenState)
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter()

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > prevScrollPos);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token = getTokenFromLocalStorage()
    if (token == null) {
      return
    }
    if (!isTokenExpired(token)) {
      setIsLogin(true)
    }
  }, [token, isLogin])

  const handleClick = () => {
    router.push('/login')
  }

  const handleLogout = () => {
    setToken('')
    setIsLogin(false)
    removeTokenFromLocalStorage()
    router.push('/login')
  }

  const goHome = () => {
    router.push('/')
  }

  return (
      <NavigationContainer className={isHidden ? 'hidden' : ''}>
        <NavigationLeft>
          <Logo onClick={goHome}>
            <LogoSvg style={{width: "30px", height: "30px"}}/>
          </Logo>
        </NavigationLeft>
        <NavigationRight>
          {isLogin ?
              (
                  <LogoutButton onClick={handleLogout}>
                    로그아웃
                  </LogoutButton>
              ) :
              (
                  <LoginButton onClick={handleClick}>
                    로그인
                  </LoginButton>
              )
          }
        </NavigationRight>
      </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  border-bottom: 1px solid gainsboro;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);

  &.hidden {
    transform: translateY(-100%);
  }
`;

const NavigationLeft = styled.div`
  padding-left: 100px;
  
  @media (max-width: 500px) {
    padding-left: 30px;
  }
`

const Logo = styled.div`
  cursor: pointer;
  width: 40px;
`

const NavigationRight = styled.div`
  padding-right: 100px;

  @media (max-width: 500px) {
    padding-right: 30px;
  }
`

const LoginButton = styled.button`
  cursor: pointer;
  padding: 4px 16px;
  font-size: 12px;
  font-weight: normal;
  border-radius: 4px;
  border: 30px;
  word-break: keep-all;
  background: rgb(33, 37, 41);
  color: rgb(255, 255, 255);
  transition: all 0.125s ease-in 0s;
  box-sizing: border-box;
  line-height: 18px;
`

const LogoutButton = styled.button`
  cursor: pointer;
  padding: 4px 16px;
  font-size: 12px;
  font-weight: normal;
  border-radius: 4px;
  border: 30px;
  word-break: keep-all;
  background: rgb(33, 37, 41);
  color: rgb(255, 255, 255);
  transition: all 0.125s ease-in 0s;
  box-sizing: border-box;
  line-height: 18px;
`

export default Navigation;
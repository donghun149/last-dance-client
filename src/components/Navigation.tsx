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

  return (
      <NavigationContainer className={isHidden ? 'hidden' : ''}>
        <NavigationLeft></NavigationLeft>
        <NavigationRight>
          {isLogin ?
              (
                  <LoginButton onClick={handleLogout}>
                    Logout
                  </LoginButton>
              ) :
              (
                  <LoginButton onClick={handleClick}>
                    Login
                  </LoginButton>
              )
          }
        </NavigationRight>
      </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  height: 60px;
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
  padding-left: 50px;
`

const NavigationRight = styled.div`
  padding-right: 50px;
`

const LoginButton = styled.button`
  padding-right: 50px;
  font-size: 15px;
  cursor: pointer;
`

export default Navigation;
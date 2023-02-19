
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: cornsilk;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-bottom: 1px solid gainsboro;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  &.hidden {
    transform: translateY(-100%);
  }
`;

const Navigation: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

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

  return (
      <NavigationContainer className={isHidden ? 'hidden' : ''}>
      </NavigationContainer>
  );
};

export default Navigation;
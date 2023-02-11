import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-bottom: 1px solid gainsboro;
`;

const Navigation: React.FC = () => {
  return (
      <NavigationContainer>
      </NavigationContainer>
  );
};

export default Navigation;

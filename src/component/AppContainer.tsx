import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 480px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const AppContainer = () => (
  <Container className="flex items-center"></Container>
);

export default AppContainer;
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #FFF;
`;

const Navbar = () => (
  <Container className="flex w-full justify-center fixed shadow py-2 px-3">
    <div className="w-6">
      <img
        alt="logo bnkp"
        src="/img/logo_bnkp.png" />
    </div>
    <div>
      <p className="text-sm">Gereja</p>
      <p className="text-base">BNKP Hilihao</p>
    </div>
  </Container>
);

export default Navbar;
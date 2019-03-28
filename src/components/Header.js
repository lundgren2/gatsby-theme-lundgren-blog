import React from 'react';
import styled from '@emotion/styled';
import logo from '../images/logo.svg';

const Wrapper = styled('header')`
  display: flex;
  padding-top: 40px;
  padding-left: 40px;
`;

const Logo = styled('img')`
  padding: 0;
  width: 52px;
  height: 52px;
`;
export default () => (
  <Wrapper>
    <Logo src={logo} alt="Tobias Lundgren" />
  </Wrapper>
);

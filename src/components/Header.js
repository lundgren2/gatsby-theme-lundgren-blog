import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import logo from '../images/logo.svg';

const Wrapper = styled('header')`
  display: flex;
  padding-top: 40px;
  padding-left: 40px;
  padding: 40px 40px 0 40px;
  align-items: center;
  border-top: 10px solid rgba(177, 216, 198, 1);
`;

const Logo = styled('img')`
  padding: 0;
  width: 82px;
  height: 42px;
`;

const Nav = styled('nav')`
  margin-left: 32px;
  &::last-child {
    margin-left: 0;
  }
`;
const NavItem = styled(Link)`
  margin-right: 24px;
  &.active {
    color: #551a5b;
    text-decoration: none;
  }
`;

export default () => (
  <Wrapper>
    <Link to="/">
      <Logo src={logo} alt="Tobias Lundgren" width="82" height="42" />
    </Link>
    <Nav>
      <NavItem to="/">Home</NavItem>
      {/* <NavItem to="/blog">Blog</NavItem> */}
      <NavItem to="/portfolio">Portfolio</NavItem>
    </Nav>
  </Wrapper>
);

NavItem.defaultProps = {
  activeClassName: 'active',
};

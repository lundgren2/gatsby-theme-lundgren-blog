import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Twitter, GitHub, Rss } from 'react-feather';
import media from '../utils/media';

const SidebarWrapper = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  display: none;
  right: 40px;
  top: 80px;
  width: 27px;
  height: 27px;
  font-size: 16px;
  white-space: nowrap;
  pointer-events: none;
  transform: rotate(90deg);
  transform-origin: bottom left;
  user-select: none;
  font-weight: bold;
  ${media.md} {
    display: block;
  }
`;

const SocialWrapper = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: row;
  right: 40px;
  bottom: 5%;
  a svg {
    margin-left: 8px;
    color: ${props => props.theme.colors.text};
    &:hover {
      opacity: 0.6;
    }
  }

  ${media.sm} {
    flex-direction: column;
    right: 40px;
    bottom: 40px;
    a svg {
      margin-top: 8px;
    }
  }
`;
const Sidebar = () => (
  <>
    <SidebarWrapper>Tobias Lundgren</SidebarWrapper>,
    <SocialWrapper>
      <a href="https://github.com/lundgren2" rel="me" target="_blank">
        <GitHub size="1.65em" />
      </a>
      <a href="https://twitter.com/lundgren2" rel="me" target="_blank">
        <Twitter size="1.65em" />
      </a>
      <Link to="/">
        <Rss size="1.65em" />
      </Link>
    </SocialWrapper>
  </>
);

export default Sidebar;

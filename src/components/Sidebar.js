import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Twitter, GitHub, Linkedin, Rss } from 'react-feather';
import media from '../utils/media';

const SidebarWrapper = styled('div')`
  display: flex;
  align-items: center;
  position: fixed;
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
  ${media.sm} {
    display: block;
  }
`;

const SocialWrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: row;

  a svg {
    margin-left: 8px;
    color: ${props => props.theme.colors.text};
    &:hover {
      opacity: 0.6;
    }
  }

  ${media.smDown} {
    margin-left: 16px;
    margin-bottom: 40px;
  }

  ${media.sm} {
    position: fixed;
    bottom: 5%;
    right: 40px;
    right: 40px;
    bottom: 40px;
    flex-direction: column;

    a svg {
      margin-top: 8px;
    }
  }
`;
const Sidebar = () => (
  <>
    <SidebarWrapper>Tobias Lundgren</SidebarWrapper>
    <SocialWrapper>
      <a
        href="https://github.com/lundgren2"
        rel="me noopener noreferrer"
        target="_blank"
      >
        <GitHub size="1.65em" />
      </a>
      <a
        href="https://twitter.com/lundgren2"
        rel="me noopener noreferrer"
        target="_blank"
      >
        <Twitter size="1.65em" />
      </a>
      <a
        href="https://www.linkedin.com/in/tobias-lundgren/"
        rel="me noopener noreferrer"
        target="_blank"
      >
        <Linkedin size="1.65em" />
      </a>
      <Link to="/">
        <Rss size="1.65em" />
      </Link>
    </SocialWrapper>
  </>
);

export default Sidebar;

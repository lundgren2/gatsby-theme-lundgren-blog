import React from 'react';
import styled from '@emotion/styled';
import media from '../utils/media';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  display: none;
  right: 40px;
  top: 60px;
  width: 27px;
  height: 27px;
  font-weight: 500;
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
const Sidebar = () => {
  return <Wrapper>Tobias Lundgren</Wrapper>;
};

export default Sidebar;

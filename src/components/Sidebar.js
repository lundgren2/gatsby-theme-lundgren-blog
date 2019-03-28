import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 30px;
  width: 27px;
  height: 27px;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  pointer-events: none;
  transform: rotate(90deg);
  transform-origin: bottom left;
  user-select: none;
`;
const Sidebar = () => {
  return <Wrapper>Tobias Lundgren</Wrapper>;
};

export default Sidebar;

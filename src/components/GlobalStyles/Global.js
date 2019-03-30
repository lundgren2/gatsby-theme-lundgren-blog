import React from 'react';
import { Global, css, keyframes } from '@emotion/core';
import media from '../../utils/media';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const squareStyle = css`
  content: '';
  display: block;
  width: 350px;
  height: 500px;
  max-width: 500px;
  max-height: 500px;
  transform: rotate(35deg);
  background-color: rgba(177, 216, 198, 0.4);
  position: absolute;
  left: -120px;
  z-index: -999;
  bottom: -350px;
  transition: transform 400ms ease;
  will-change: transform;

  ${media.md} {
    transform: rotate(65deg);
    top: 25px;
    bottom: auto;
    left: auto;
    right: -280px;
  }
`;

export default () => (
  <Global
    styles={css`
      body {
        border-top: 10px solid rgba(177, 216, 198, 1);
        overflow: hidden;
        animation: ${fadeIn} 2s ease;
        &:before {
          ${squareStyle}
        }
      }
      a {
        &:visited {
          color: #0000ee;
        }
      }
    `}
  />
);

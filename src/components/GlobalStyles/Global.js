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
  height: 350px;
  transform: rotate(65deg);
  background-color: rgba(177, 216, 198, 0.3);
  position: fixed;
  left: -200px;
  z-index: -1;
  bottom: -100px;
  transition: transform 400ms ease;
  will-change: transform;
  overflow: hidden;

  ${media.md} {
    transform: rotate(75deg);
    top: 25px;
    bottom: auto;
    left: auto;
    right: -220px;
  }
`;

export default () => (
  <Global
    styles={css`
      body {
        /* border-top: 10px solid rgba(177, 216, 198, 1); */
        /* width: 100%;
        height: 100%; */
        overflow-x: hidden;
        &::before {
          ${squareStyle}
        }
      }
      a {
        &:visited {
          color: #0000ee;
        }
      }
      /* header,
      main,
      footer {
        flex-shrink: 0;
      } */
      #___gatsby {
        /* position: relative; */
        /* min-height: 100vh; */
        /* display: flex; */
        /* flex-direction: column; */
        /* min-height: 100vh; */
        /* align-items: stretch; */
      }
    `}
  />
);

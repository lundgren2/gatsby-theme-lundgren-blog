import React from 'react';
import { Global, css, keyframes } from '@emotion/core';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export default () => (
  <Global
    styles={css`
      body {
        border-top: 10px solid rgba(177, 216, 198, 1);
        animation: ${fadeIn} 2s ease;
      }
      a {
        &:visited {
          color: #0000ee;
        }
      }
    `}
  />
);

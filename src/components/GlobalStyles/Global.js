import React from 'react';
import { Global, css } from '@emotion/core';

export default () => (
  <Global
    styles={css`
      body {
        border-top: 10px solid rgba(177, 216, 198, 1);
        transition: 2s opacity;
        /* border-style: solid;
        border-color: rgba(208, 255, 227, 1);
        border-image: linear-gradient(
          to right,
          rgba(208, 255, 227, 1) 0%,
          rgba(177, 216, 198, 1) 100%
        ); */
      }
    `}
  />
);

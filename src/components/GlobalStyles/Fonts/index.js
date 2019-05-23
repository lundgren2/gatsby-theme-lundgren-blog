import React from 'react';
import { Global, css } from '@emotion/core';

export default () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'poppinsbold';
        src: url('./poppins-bold-webfont.woff2') format('woff2'),
          url('./poppins-bold-webfont.woff') format('woff');
        font-weight: bold;
        font-style: normal;
      }

      @font-face {
        font-family: 'poppinsbold_italic';
        src: url('./poppins-bolditalic-webfont.woff2') format('woff2'),
          url('./poppins-bolditalic-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'poppinsitalic';
        src: url('./poppins-italic-webfont.woff2') format('woff2'),
          url('./poppins-italic-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'poppinsregular';
        src: url('./poppins-regular-webfont.woff2') format('woff2'),
          url('./poppins-regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
    `}
  />
);

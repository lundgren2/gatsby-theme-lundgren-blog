import React from 'react';
import { Global, css } from '@emotion/core';

export default () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'poppinsbold';
        src: url(require('./poppins-bold-webfont.woff2')) format('woff2'),
          url(require('./poppins-bold-webfont.woff')) format('woff');
        font-weight: bold;
        font-style: normal;
      }

      @font-face {
        font-family: 'poppins';
        src: url(require('./poppins-bolditalic-webfont.woff2')) format('woff2'),
          url(require('./poppins-bolditalic-webfont.woff')) format('woff');
        font-weight: bold;
        font-style: italic;
      }

      @font-face {
        font-family: 'poppins';
        src: url(require('./poppins-italic-webfont.woff2')) format('woff2'),
          url(require('./poppins-italic-webfont.woff')) format('woff');
        font-weight: normal;
        font-style: italic;
      }

      @font-face {
        font-family: 'poppins';
        src: url(require('./poppins-regular-webfont.woff2')) format('woff2'),
          url(require('./poppins-regular-webfont.woff')) format('woff');
        font-weight: normal;
        font-style: normal;
      }
    `}
  />
);

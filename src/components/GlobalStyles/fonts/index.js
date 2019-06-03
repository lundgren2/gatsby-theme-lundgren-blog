import React from 'react';
import { Global, css, injectGlobal } from '@emotion/core';
import PoppinsRegular from './poppins-v6-latin-regular.woff';
import PoppinsRegular2 from './poppins-v6-latin-regular.woff2';
import PoppinsItalic from './poppins-v6-latin-italic.woff';
import PoppinsItalic2 from './poppins-v6-latin-italic.woff2';
import PoppinsBold from './poppins-v6-latin-700.woff';
import PoppinsBold2 from './poppins-v6-latin-700.woff2';

export default () => (
  <Global
    styles={css`
      background: black;
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: local('Poppins Regular'), local('Poppins-Regular'),
          url(${PoppinsRegular2}) format('woff2'),
          url(${PoppinsRegular}) format('woff');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 400;
        src: local('Poppins Italic'), local('Poppins-Italic'),
          url(${PoppinsItalic2}) format('woff2'),
          url(${PoppinsItalic}) format('woff');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        src: local('Poppins Bold'), local('Poppins-Bold'),
          url(${PoppinsBold2}) format('woff2'),
          url(${PoppinsBold}) format('woff');
      }
    `}
  />
);

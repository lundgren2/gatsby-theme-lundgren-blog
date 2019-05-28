import React from 'react';
import { Global, css } from '@emotion/core';
import PoppinsEOT from './poppins-v6-latin-regular.eot';
import PoppinsTTF from './poppins-v6-latin-regular.ttf';
import PoppinsSVG from './poppins-v6-latin-regular.svg';
import PoppinsWOFF from './poppins-v6-latin-regular.woff';
import PoppinsWOFF2 from './poppins-v6-latin-regular.woff2';

import PoppinsItalicEOT from './poppins-v6-latin-italic.eot';
import PoppinsItalicTTF from './poppins-v6-latin-italic.ttf';
import PoppinsItalicSVG from './poppins-v6-latin-italic.svg';
import PoppinsItalicWOFF from './poppins-v6-latin-italic.woff';
import PoppinsItalicWOFF2 from './poppins-v6-latin-italic.woff2';

import PoppinsBoldEOT from './poppins-v6-latin-700.eot';
import PoppinsBoldTTF from './poppins-v6-latin-700.ttf';
import PoppinsBoldSVG from './poppins-v6-latin-700.svg';
import PoppinsBoldWOFF from './poppins-v6-latin-700.woff';
import PoppinsBoldWOFF2 from './poppins-v6-latin-700.woff2';

import PoppinsItalicBoldEOT from './poppins-v6-latin-700italic.eot';
import PoppinsItalicBoldTTF from './poppins-v6-latin-700italic.ttf';
import PoppinsItalicBoldSVG from './poppins-v6-latin-700italic.svg';
import PoppinsItalicBoldWOFF from './poppins-v6-latin-700italic.woff';
import PoppinsItalicBoldWOFF2 from './poppins-v6-latin-700italic.woff2';

export default () => (
  <Global
    styles={css`
      /* poppins-regular - latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url(${PoppinsEOT}); /* IE9 Compat Modes */
        src: local('Poppins Regular'), local('Poppins-Regular'),
          url(${PoppinsEOT}?#iefix) format('embedded-opentype'),
          /* IE6-IE8 */ url(${PoppinsWOFF2}) format('woff2'),
          /* Super Modern Browsers */ url(${PoppinsWOFF}) format('woff'),
          /* Modern Browsers */ url(${PoppinsTTF}) format('truetype'),
          /* Safari, Android, iOS */ url(${PoppinsSVG}#Poppins) format('svg'); /* Legacy iOS */
      }
      /* poppins-italic - latin */
      @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 400;
        src: url(${PoppinsItalicEOT}); /* IE9 Compat Modes */
        src: local('Poppins Italic'), local('Poppins-Italic'),
          url(${PoppinsItalicEOT}?#iefix) format('embedded-opentype'),
          /* IE6-IE8 */ url(${PoppinsItalicWOFF2}) format('woff2'),
          /* Super Modern Browsers */ url(${PoppinsItalicWOFF}) format('woff'),
          /* Modern Browsers */ url(${PoppinsItalicTTF}) format('truetype'),
          /* Safari, Android, iOS */ url(${PoppinsItalicSVG}#Poppins)
            format('svg'); /* Legacy iOS */
      }
      /* poppins-700 - latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        src: url(${PoppinsBoldEOT}); /* IE9 Compat Modes */
        src: local('Poppins Regular'), local('Poppins-Regular'),
          url(${PoppinsBoldEOT}?#iefix) format('embedded-opentype'),
          /* IE6-IE8 */ url(${PoppinsBoldWOFF2}) format('woff2'),
          /* Super Modern Browsers */ url(${PoppinsBoldWOFF}) format('woff'),
          /* Modern Browsers */ url(${PoppinsBoldTTF}) format('truetype'),
          /* Safari, Android, iOS */ url(${PoppinsBoldSVG}#Poppins)
            format('svg'); /* Legacy iOS */
      }
      /* poppins-700italic - latin */
      @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 700;
        src: url(${PoppinsItalicBoldEOT}); /* IE9 Compat Modes */
        src: local('Poppins Regular'), local('Poppins-Regular'),
          urlItalic(${PoppinsItalicBoldEOT}?#iefix) format('embedded-opentype'),
          /* IE6-IE8 */ url(${PoppinsItalicBoldWOFF2}) format('woff2'),
          /* Super Modern Browsers */ url(${PoppinsItalicBoldWOFF})
            format('woff'),
          /* Modern Browsers */ url(${PoppinsItalicBoldTTF}) format('truetype'),
          /* Safari, Android, iOS */ url(${PoppinsItalicBoldSVG}#Poppins)
            format('svg'); /* Legacy iOS */
      }
    `}
  />
);

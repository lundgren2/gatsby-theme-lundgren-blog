import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';

export default ({ children }) => [
  <GlobalStyles key="global-styles" />,
  <Header />,
  <div
    style={{
      margin: '10%',
    }}
  >
    {children}
    <Footer />
  </div>,
];

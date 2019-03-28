import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';

export default ({ children }) => [
  <GlobalStyles key="global-styles" />,
  <Header />,
  <Sidebar />,
  <div style={{}}>
    {children}
    <Footer />
  </div>,
];

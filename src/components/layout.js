import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import theme from '../../config/theme';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles key="global-styles" />
    <Sidebar />
    <Header />
    {children}
    <Footer />
  </ThemeProvider>
);

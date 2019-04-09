import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import theme from '../../config/theme';
import Container from './Container';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles key="global-styles" />
    <Sidebar />
    <Header />
    <Container>{children}</Container>
    <Footer />
  </ThemeProvider>
);

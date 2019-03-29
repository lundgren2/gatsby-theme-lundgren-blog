import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import theme from '../../config/theme';
import Container from './Container';

export default ({ children }) => [
  <GlobalStyles key="global-styles" />,
  <ThemeProvider theme={theme}>
    <Sidebar />
    <Header />
    <Container>{children}</Container>
    <Footer />
  </ThemeProvider>,
];

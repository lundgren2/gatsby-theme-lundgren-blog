import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { css, jsx } from '@emotion/core';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import theme from '../../config/theme';
import Container from './Container';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Container>{children}</Container>
    <Footer />
    <Sidebar />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

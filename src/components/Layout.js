import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import theme from '../../config/theme';
import Container from './Container';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles key="global-styles" />
    <Sidebar />
    <Header />
    <Container>{children}</Container>
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

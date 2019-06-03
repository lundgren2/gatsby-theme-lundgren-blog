import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles';
import Container from './Container';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import theme from '../../config/theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme} key="global-theme">
    <GlobalStyles key="global-styles" />
    <Header />
    <Container>{children}</Container>
    <Footer />
    <Sidebar />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

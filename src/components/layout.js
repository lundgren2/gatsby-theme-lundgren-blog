import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';

export default ({ children }) => [
  <GlobalStyles key="global-styles" />,
  <ThemeProvider>
    <Header />
    <Sidebar />
    <div style={{}}>
      {children}
      <Footer />
    </div>
  </ThemeProvider>,
];

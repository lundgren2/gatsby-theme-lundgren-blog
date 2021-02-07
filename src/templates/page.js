import React from 'react';
import { MDXProvider } from '@mdx-js/react';

export default ({ pageContext }) => (
  <MDXProvider>{pageContext.body}</MDXProvider>
);

import React from 'react';
import { Helmet } from 'react-helmet';
import useMetadata from '../hooks/useMetadata';

export default props => {
  const meta = useMetadata();
  const title = props.title || meta.title;
  const description = props.description || meta.description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={meta.author} />
    </Helmet>
  );
};

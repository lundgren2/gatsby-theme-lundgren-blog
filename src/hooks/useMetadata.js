import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query HeadQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(query);
  return data.site.siteMetadata;
};

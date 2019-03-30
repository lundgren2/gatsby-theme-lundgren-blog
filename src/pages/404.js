import React from 'react';
import { jsx, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box } from '@rebass/emotion';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Container from '../components/Container';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      errorImage: file(relativePath: { eq: "404-puppy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 920, quality: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Container py={[20, 20, 120]} css={{ maxWidth: 1200 }}>
        <Flex flexWrap="wrap" alignItems="center">
          <Box width={[1, 1 / 2]} p={20}>
            <h1
              css={css`
                font-size: 4.5rem;
              `}
            >
              Oops!
            </h1>
            <h3>Det här länken fungerar inte.</h3>
            <p
              css={css`
                color: #888;
              `}
            >
              Felkod: 404
            </p>
          </Box>
          <Box width={[1, 1 / 2]}>
            <Img fluid={data.errorImage.childImageSharp.fluid} />
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

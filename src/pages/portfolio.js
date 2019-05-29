import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box } from '@rebass/emotion';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Repository from '../components/Repository';

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      githubData {
        id
        data {
          viewer {
            name
            repositories {
              nodes {
                name
                description
                homepageUrl
                resourcePath
                forkCount
                createdAt
                updatedAt
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  `);

  function sortNumber(a, b) {
    return b.stargazers.totalCount - a.stargazers.totalCount;
  }

  const repos = data.githubData.data.viewer.repositories.nodes;
  console.log(data);
  return (
    <Layout>
      <Container py={[20]}>
        <Flex flexWrap="wrap" alignItems="center">
          <Box>
            {repos.sort(sortNumber).map(repo => (
              <Repository key={repo.name} repo={repo} />
            ))}
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;

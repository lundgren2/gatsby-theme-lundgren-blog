import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box } from '@rebass/emotion';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Repository from '../components/Repository';

const PortfolioPage = () => {
  const data = useStaticQuery(gitHubQuery);

  function sortNumber(a, b) {
    return b.stargazers.totalCount - a.stargazers.totalCount;
  }

  const repos = data.githubData.viewer.repositories.nodes;

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

export const gitHubQuery = graphql`
  {
    githubData {
      viewer {
        name
        avatarUrl
        isHireable
        resourcePath
        repositories(
          last: 12
          privacy: PUBLIC
          orderBy: { field: STARGAZERS, direction: ASC }
        ) {
          nodes {
            name
            description
            homepageUrl
            forkCount
            createdAt
            updatedAt
            resourcePath
            languages(last: 1, orderBy: { field: SIZE, direction: ASC }) {
              edges {
                node {
                  name
                  color
                }
              }
            }
            licenseInfo {
              name
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

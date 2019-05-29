import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Flex, Text } from '@rebass/emotion';
import Container from './Container';
import website from '../../config/website';
import media from '../utils/media';

const FooterWrapper = styled(Flex)`
  position: relative;
  bottom: 0;
  height: 2.5rem;
  ${media.md} {
  }
`;
const FooterColumn = styled(Flex)``;

export default () => (
  <FooterWrapper mb={1} mt={4} as="footer">
    <Container
      width={1}
      css={css`
        max-width: 1440px;
      `}
    >
      <Flex flexDirection={['column', 'row']}>
        <FooterColumn width={[1]} flexDirection="column">
          <Text color="#888" lineHeight={1.5}>
            © MMXIX {website.siteTitle}
          </Text>
        </FooterColumn>
      </Flex>
    </Container>
  </FooterWrapper>
);

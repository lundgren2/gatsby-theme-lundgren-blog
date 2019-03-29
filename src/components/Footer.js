import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Flex, Text } from '@rebass/emotion';
import Container from './Container';
import website from '../../config/website';

const FooterColumn = styled(Flex)``;

export default () => (
  <Flex py={5} mt={5} as="footer">
    <Container width={1} css={{ maxWidth: 1440 }}>
      <Flex flexDirection={['column', 'row']}>
        <FooterColumn
          // width={[1, 0.5]}
          flexDirection="column"
          flex={1}
          mb={4}
          mr={4}
        >
          <Text color="#888" lineHeight={1.5}>
            © MMXIX {website.siteTitle}
          </Text>
        </FooterColumn>
      </Flex>
    </Container>
  </Flex>
);

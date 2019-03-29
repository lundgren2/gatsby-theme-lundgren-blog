import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Flex, Text } from '@rebass/emotion';
import website from '../../config/website';
import Container from './Container';
import Icon from './Icon';

const FooterColumn = styled(Flex)``;
const FooterListItem = ({ Icon: IconComp, rel, children, href }) => (
  <Text as="div" my={1} color="#666">
    <a href={href} rel={rel}>
      {IconComp && (
        <Icon mr={2} ml={0}>
          <IconComp size="1em" />
        </Icon>
      )}
      {children}
    </a>
  </Text>
);

export default () => (
  <Flex
    py={5}
    mt={5}
    as="footer"
    // bg="#f9f9f9"
    css={css`
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    `}
  >
    <Container width={1} css={{ maxWidth: 1440 }}>
      <Flex flexDirection={['column', 'row']}>
        <FooterColumn
          title="About this place"
          width={[1, 1 / 2]}
          flexDirection="column"
          flex={1}
          mb={4}
          mr={4}
        >
          <Text color="#666" lineHeight={1.5}>
            © MMXIX {website.siteTitle}
          </Text>
        </FooterColumn>
        <FooterColumn title="About this place" width={[1, 1 / 2]}>
          <Text color="#666" lineHeight={1.5}>
            © MMXIX {website.siteTitle}
          </Text>
        </FooterColumn>
      </Flex>
    </Container>
  </Flex>
);

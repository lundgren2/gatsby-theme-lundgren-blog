import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@rebass/emotion';
import media from '../utils/media';

export default styled(Box)`
  max-width: 550px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`;

const WideBox = styled(Box)`
  ${media.mdDown} {
    max-width: 100%;
  }
`;
export const WideContainer = props => (
  <WideBox
    width={['100%', '150%', '200%']}
    ml={[0, '-25%', '-50%']}
    {...props}
  />
);

import React from 'react';
// import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { Box } from '@rebass/emotion';

export default props => {
  const {
    ml = 1,
    display = 'inline-block',
    verticalAlign = 'middle',
    ...restProps
  } = props;
  return (
    <Box
      css={css`
        background: #eee;
      `}
      {...restProps}
    >
      {props.children}
    </Box>
  );
};

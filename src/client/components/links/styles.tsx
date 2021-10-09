import React from 'react';
import styled from 'styled-components';
import {
  Typography
} from '@mui/material';
import {
  Link as ReactRouterLink
} from 'react-router-dom';
import {
  getTextColor,
  getFontWeight
} from './utils';

export const CustomLink = styled(ReactRouterLink)`
  color: inherit;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

export const CustomLinkText = styled(
  ({
    active,
    ...restProps
  }) => <Typography {...restProps} />
)`
  color: ${getTextColor};
  font-weight: ${getFontWeight};
`;

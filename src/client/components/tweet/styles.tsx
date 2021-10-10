import * as React from 'react';
import {
  Typography,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';
import { partial } from 'ramda';

import { getTextColor } from '@app/client/shared';

import {
  getTextOrChildren
} from './utils';

export const UsernameText = styled(Typography)`
  font-size: 14;
  font-weight: 600;
  display: inline-block;
  color: ${partial(getTextColor, ['primary'])};
`;

export const TwitterhandleText = styled(Typography)`
  font-size: 12;
  display: inline-block;
  padding-left: 0.25rem;
  color: ${partial(getTextColor, ['secondary'])};
`;

export const FavoritedIcon = styled(FavoriteIcon)`
  path {
    fill #ff6565;
  }
`;

export const CountText = styled(
  ({ text, children, ...restProps }) => (
    <Typography variant="caption" {...restProps}>
      {getTextOrChildren(text, children)}
    </Typography>
  )
)`
  padding-left: 0.25rem;
  color: ${partial(getTextColor, ['secondary'])};
  display: inline-block;
`;

import * as React from 'react';
import {
  Conditional
} from '@app/client/components';

import {
  Box,
  Typography
} from '@mui/material';

interface TendingItemProp {
  title: string;
  description?: string;
  /*
   * Number of tweets associate with the topic
   * **/
  tweets?: string;
}

const TrendingItem : React.FC<TendingItemProp> = (
  props
) => {
  return (
    <Box
      mb={1}
      py={1}
      px={2}
      sx={{
        '&:hover': {
          backgroundColor: 'grey.200'
        }
      }}>
      <Conditional
        show={!!props?.title}>
        <Typography
          variant="caption"
          color="text.secondary">
          {props.title}
        </Typography>
      </Conditional>
      <Conditional
        show={!!props?.description}>
        <Typography variant="subtitle2">
          {props.description}
        </Typography>
      </Conditional>
      <Conditional
        show={!!props?.tweets}>
        <Typography variant="subtitle2">
          {props.tweets}
        </Typography>
      </Conditional>
    </Box>
  );
}

export default TrendingItem;

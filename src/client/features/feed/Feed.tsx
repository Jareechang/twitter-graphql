import * as React from 'react';
//import {
  //UseBaseMutationResult
//} from 'react-query';
//import { Button } from '@app/client/components';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';

import {
  FeedCard
} from '@app/client/components';

import {
  FetchFeedListQuery,
  useFetchFeedListQuery,
} from '@app/graphql';

import { client } from '@app/client/external';

interface FeedProps {}

const Feed: React.FC<FeedProps> = (
  props
) => {
  const feedListRequest: QueryObserverResult<FetchFeedListQuery> = useFetchFeedListQuery(
    client,
  );
  const feedList = feedListRequest?.data?.feed || [];
  if (feedListRequest?.error) {
    return (
      <Typography
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom>
        There was an error fetching the feed
      </Typography>
    );
  }

  if (feedListRequest?.isFetching) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box my={4}>
      {
        feedList.map(feed => (
          <Box my={3} key={feed.id}>
            <FeedCard
              username={feed.user.name}
              content={feed.content}
            />
          </Box>
        ))
      }
    </Box>
  );
}

export default Feed;

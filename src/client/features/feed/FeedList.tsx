import * as React from 'react';
import {
  Box,
  Typography,
  CircularProgress,
} from '@mui/material';
import { QueryObserverResult } from 'react-query';

import {
  FeedCard
} from '@app/client/components';

import {
  FetchFeedListQuery,
  useFetchFeedListQuery,
} from '@app/graphql';

import { client } from '@app/client/external';

interface FeedListProps {}

const FeedList: React.FC<FeedListProps> = (
  props
) => {
  const feedListRequest: QueryObserverResult<FetchFeedListQuery> = useFetchFeedListQuery(
    client,
  );

  const feedList = feedListRequest?.data?.feed || [];
  const isRefetching = feedListRequest?.isRefetching || false;
  const isFetching = feedListRequest?.isFetching || false;
  const isError = feedListRequest?.error || false;

  const renderFeedList = React.useCallback(() => {
    const isValidData = Array.isArray(feedList) && feedList.length > 0;
    if (!isValidData) return null;
    return feedList.map((feed: any) => (
      <Box my={3} key={feed.id}>
        <FeedCard
          id={feed.id}
          username={feed.user.name}
          content={feed.content}
        />
      </Box>
    ));
  }, [feedList]);

  if (isError) {
    return (
      <Typography
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom>
        There was an error fetching the feed
      </Typography>
    );
  }

  if (isFetching && !isRefetching) {
    return (
      <Box
        mt={3}
        sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box my={4}>
      {renderFeedList()}
    </Box>
  );
}

export default FeedList;

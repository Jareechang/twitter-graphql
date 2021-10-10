import * as React from 'react';
import {
  Box,
  Typography,
  CircularProgress,
} from '@mui/material';
import { QueryObserverResult } from 'react-query';

import {
  Link,
  Tweet,
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

  const feedList : FetchFeedListQuery['feed'] = feedListRequest?.data?.feed || [];
  const isRefetching : boolean = feedListRequest?.isRefetching || false;
  const isFetching : boolean = feedListRequest?.isFetching || false;
  const isError : boolean = feedListRequest?.isError || false;

  const renderFeedList = React.useCallback(() => {
    const isValidData = Array.isArray(feedList) && feedList.length > 0;
    if (!isValidData) return null;
    return feedList.map((feed: any) => (
      <Box my={3} key={feed.id}>
        <Link to={`/tweets/${feed.id}`}>
          <Tweet
            id={feed.id}
            username={feed.user.name}
            content={feed.content}
            likes={feed?.likes ?? 0}
            retweets={feed?.retweets ?? 0}
            comments={feed?.comments ?? 0}
          />
        </Link>
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

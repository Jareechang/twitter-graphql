import * as React from 'react';

import { client } from '@app/client/external';

import {
  GetTweetsQuery,
  useGetTweetsQuery
} from '@app/graphql';

import {
  Box,
  Typography,
  CircularProgress,
} from '@mui/material';

import {
  Tweet,
  CommentList,
} from '@app/client/components';

export interface ViewTweetProps {
  id: string;
}

const ViewTweet: React.FC<ViewTweetProps> = (
  props
) => {
  const id : string = props?.id ?? '1';
  const getTweetRequest = useGetTweetsQuery(client, {
    id
  });

  const tweet : GetTweetsQuery['tweet'] = getTweetRequest?.data?.tweet ?? null;
  const isRefetching = getTweetRequest?.isRefetching || false;
  const isFetching = getTweetRequest?.isFetching || false;
  const isError = getTweetRequest?.error || false;

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
    <Box>
      <Tweet
        id={id}
        username={tweet?.user?.name ?? ''}
        likes={tweet?.likes ?? 0}
        content={tweet?.content ?? ''}
        retweets={tweet?.retweets ?? 0}
        comments={tweet?.comments ?? 0}
      />
      <Box mt={2}>
        <Typography variant="body1">
          Comments
        </Typography>
        <Box mt={2}>
          <CommentList />
        </Box>
      </Box>
    </Box>
  );
}

export default ViewTweet;

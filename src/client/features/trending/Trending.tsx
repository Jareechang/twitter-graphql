import * as React from 'react';

import {
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';

import {
  ContentLayout,
  TrendingItem,
} from '@app/client/components';

import {
  GetTrendingQuery,
  useGetTrendingQuery
} from '@app/graphql';

import {
  client
} from '@app/client/external';

export interface TrendingProps {}

const Trending: React.FC<TrendingProps> = (
  props
) => {
  const getTrendingContentRequest = useGetTrendingQuery(client);

  const trendingContent : GetTrendingQuery['trending'] = (
    getTrendingContentRequest?.data?.trending ?? []
  );
  const isRefetching : boolean = getTrendingContentRequest?.isRefetching || false;
  const isFetching : boolean = getTrendingContentRequest?.isFetching || false;
  const isError : boolean = getTrendingContentRequest?.isError || false;

  const renderTrendingContent = React.useCallback(() => {
    if (!Array.isArray(trendingContent)) return null;
    if (trendingContent?.length === 0) return null;
    return trendingContent.map((content) => (
      <TrendingItem
        key={content.id}
        title={content?.title ?? ''}
        description={content?.description ?? ''}
        tweets={content?.tweets ?? ''}
      />
    ));
  }, [trendingContent]);

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
    <ContentLayout>
      <Box
        mx={3}
        p={2}
        sx={{
          backgroundColor: 'grey.50',
          borderRadius: '0.25rem',
          border: '1px solid',
          borderColor: 'text.primary'
        }}>
        <Box px={2}>
          <Typography variant="body1">Trending</Typography>
        </Box>
        <Box mt={2}>{renderTrendingContent()}</Box>
      </Box>
    </ContentLayout>
  );
}

export default Trending;

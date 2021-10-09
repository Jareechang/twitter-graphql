import * as React from 'react';

import { ContentLayout } from '@app/client/components';
import { ComposeTweet } from '@app/client/features/compose-tweet';
import { FeedList } from '@app/client/features/feed';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (
  props
) => {
  return (
    <ContentLayout>
      <ComposeTweet />
      <FeedList />
    </ContentLayout>
  );
}

export default HomePage;

import * as React from 'react'
import {
  useParams,
} from 'react-router-dom';

import { ContentLayout } from '@app/client/components';

import { ViewTweet } from '@app/client/features/view-tweet';

interface ViewTweetPageProps {}

const ViewTweetPage: React.FC<ViewTweetPageProps> = (
  props
) => {
  const { id } = useParams();
  return (
    <ContentLayout>
      <ViewTweet id={id}/>
    </ContentLayout>
  );
}

export default ViewTweetPage;

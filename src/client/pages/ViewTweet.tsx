import * as React from 'react'
import {
  useParams,
} from 'react-router-dom';

import { ContentLayout } from '@app/client/components';

interface ViewTweetContentProps {}

const ViewTweet: React.FC<ViewTweetContentProps> = (
  props
) => {
  const { id } = useParams();
  return (
    <ContentLayout>
      <h3>This is ViewTweet (id: {id})</h3>
    </ContentLayout>
  );
}

export default ViewTweet;

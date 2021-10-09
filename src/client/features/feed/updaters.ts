import {
  FetchFeedListQuery,
} from '@app/graphql';

import {
  AddFeedListData,
} from './types';

export const addFeedListState = (
  /*
   * New Data to update on the state
   *
   * **/
  data: AddFeedListData,
  /*
   * Existing data on the state
   *
   * **/
  prevState: FetchFeedListQuery
): FetchFeedListQuery => {
  const feedList = prevState?.feed ?? [];
  return {
    feed: [
      {
        id: `${feedList.length + 1}`,
        likes: 0,
        retweets: 0,
        comments: 0,
        ...data,
      },
      ...feedList
    ]
  };
}

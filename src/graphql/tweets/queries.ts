// Tweet gets transformed in a weird way by codegen so using TweetItem
import {
  TweetItem,
  TweetItemResponse
} from '@app/gql-types';

import {
  user,
} from '@app/graphql/users/queries';

const tweets : TweetItem[] = [
  {
    id: '1',
    comments: 50,
    retweets: 10,
    likes: 10,
    content: 'gm Twitter!',
    user: '1',
  },
  {
    id: '2',
    comments: 20,
    retweets: 100,
    likes: 100,
    content: 'Excited to get the iOS 14! #apple #fanboy',
    user: '2',
  },
  {
    id: '3',
    comments: 20,
    retweets: 100,
    likes: 100,
    content: 'What did I just see ? What is happening',
    user: '4',
  }
];

export const feed = (): TweetItemResponse[] => {
  return (tweets.map((tweet) => {
    return {
      ...tweet,
      user: user(tweet.user)
    };
  }) as TweetItemResponse[])
}

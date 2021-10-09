// Tweet gets transformed in a weird way by codegen so using TweetItem
import {
  Scalars,
  MutationCreateTweetArgs,
  TweetItem,
  TweetItemResponse
} from '@app/gql-types';

import {
  user,
} from '@app/graphql/users/queries';

let tweets : TweetItem[] = [
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

export const createTweet = (
  parent: unknown,
  args: MutationCreateTweetArgs
) : Promise<TweetItem> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tweet = {
        id: `${tweets.length + 1}`,
        comments: 0,
        retweets: 0,
        likes: 0,
        content: args.content,
        user: args.id,
      };
      tweets = [tweet, ...tweets];
      resolve(tweet);
    }, 1500);
  });
}

export const tweet = (
  parent,
  args
): TweetItem => {
  const tweet = tweets.find(tweet => tweet.id === args.id);
  return {
    ...tweet,
    user: user(tweet.user),
  };
}

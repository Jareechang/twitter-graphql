import * as userQueries from '@app/graphql/users';
import { feed, tweet, createTweet } from '@app/graphql/tweets'
import * as trendingQueries from '@app/graphql/trending';

export default {
  Query: {
    ...userQueries,
    ...trendingQueries,
    feed,
    tweet,
  },
  Mutation: {
    createTweet
  }
};

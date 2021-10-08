import * as userQueries from '@app/graphql/users';
import { feed, createTweet } from '@app/graphql/tweets'
import * as trendingQueries from '@app/graphql/trending';

export default {
  Query: {
    ...userQueries,
    ...trendingQueries,
    feed,
  },
  Mutation: {
    createTweet
  }
};

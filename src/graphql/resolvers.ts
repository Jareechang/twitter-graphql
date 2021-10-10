import * as userQueries from '@app/graphql/users';
import { feed, tweet, createTweet } from '@app/graphql/tweets'
import { trending } from '@app/graphql/trending';

export default {
  Query: {
    ...userQueries,
    trending,
    feed,
    tweet,
  },
  Mutation: {
    createTweet
  }
};

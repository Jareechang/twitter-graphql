import * as userQueries from '@app/graphql/users';
import * as tweetQueries from '@app/graphql/tweets'
import * as trendingQueries from '@app/graphql/trending';

export default {
  Query: {
    ...userQueries,
    ...tweetQueries,
    ...trendingQueries
  },
  Mutation: {
    test: () => 'test'
  }
};

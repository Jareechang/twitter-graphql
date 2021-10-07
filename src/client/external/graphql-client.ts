import { GraphQLClient } from 'graphql-request'
import {
  graphqlEndpoint
} from '@app/client/constants';

const endpoint = process.env.CLIENT_GRAPHQL_ENDPOINT || graphqlEndpoint;

const client = new GraphQLClient(endpoint);

export default client;

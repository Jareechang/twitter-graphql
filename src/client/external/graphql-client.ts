import { GraphQLClient } from 'graphql-request'
import {
  graphqlEndpoint
} from '@app/client/constants';

// Need to update esbuild with replace plugin
//const endpoint = process.env.CLIENT_GRAPHQL_ENDPOINT || graphqlEndpoint;
const endpoint = graphqlEndpoint;

const client = new GraphQLClient(endpoint);

export default client;

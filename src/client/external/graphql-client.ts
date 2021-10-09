import { GraphQLClient } from 'graphql-request'

const graphqlEndpoint = 'http://localhost:4000/graphql';

const client = new GraphQLClient(graphqlEndpoint);

export default client;

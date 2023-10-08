import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'YOUR_HASURA_GRAPHQL_ENDPOINT',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`, // Kullanıcının erişim belgesi
  },
});

export default client;

// services/graphqlService.js

import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import config from '../../config'; // Hasura GraphQL bağlantı bilgileri

// Hasura GraphQL endpoint
const uri = config.HASURA_GRAPHQL_ENDPOINT;

// Hasura admin anahtarı
const adminSecret = config.HASURA_GRAPHQL_ADMIN_SECRET;

// HTTP bağlantısı oluşturun
const httpLink = new HttpLink({uri});

// Kimlik doğrulama bilgilerini ekleyin
const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': adminSecret,
    },
  };
});

// Apollo Client'i oluşturun
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;

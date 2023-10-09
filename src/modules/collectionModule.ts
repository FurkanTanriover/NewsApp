import {gql} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apolloClient from '../services/graphqlService';

const CREATE_COLLECTION_MUTATION = gql`
  mutation AddCollection(
    $excerpt: String!
    $id: Int!
    $thumbnail: jsonb!
    $title: String!
    $url: String!
    $userId: String!
    $authorData: jsonb!
    $categories: jsonb!
  ) {
    insert_collections_one(
      object: {
        authorData: $authorData
        id: $id
        thumbnail: $thumbnail
        url: $url
        userId: $userId
        title: $title
        excerpt: $excerpt
        categories: $categories
      }
    ) {
      id
    }
  }
`;

const GET_COLLECTIONS_QUERY = gql`
  query GetCollections($userId: String!) {
    collections(where: {userId: {_eq: $userId}}) {
      authorData
      thumbnail
      excerpt
      title
      url
      id
      categories
    }
  }
`;

export const createCollectionInHasura = async (collection: any) => {
  const {id, excerpt, thumbnail, title, url, authorData, categories} =
    collection;
  const userInfo = await AsyncStorage.getItem('@userInfo');
  const {id: userId} = JSON.parse(userInfo);

  const createCollectionResult = await apolloClient.mutate({
    mutation: CREATE_COLLECTION_MUTATION,
    variables: {
      id,
      userId,
      excerpt,
      thumbnail,
      title,
      url,
      authorData,
      categories,
    },
  });
  console.log('Collection created in Hasura:', createCollectionResult.data);
};

export const getCollectionsFromHasura = async () => {
  const userInfo = await AsyncStorage.getItem('@userInfo');
  const {id: userId} = JSON.parse(userInfo);

  const {data} = await apolloClient.query({
    query: GET_COLLECTIONS_QUERY,
    variables: {userId},
  });
  return data.collections;
};

import {gql} from '@apollo/client';
import apolloClient from '../services/graphqlService';

const CHECK_USER_EXISTENCE_QUERY = gql`
  query CheckUserExistence($userId: String!) {
    users(where: {id: {_eq: $userId}}) {
      id
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUser(
    $id: String!
    $email: String!
    $name: String!
    $surname: String!
    $photo: String!
  ) {
    insert_users_one(
      object: {
        id: $id
        email: $email
        name: $name
        surname: $surname
        photo: $photo
      }
    ) {
      id
    }
  }
`;

export const createUserInHasura = async (user: any) => {
  const {id, email, givenName: name, familyName: surname, photo} = user;

  try {
    // Kullanıcının varlığını kontrol et
    const {data} = await apolloClient.query({
      query: CHECK_USER_EXISTENCE_QUERY,
      variables: {userId: id},
    });

    // Kullanıcı mevcut değilse ekleyin
    if (!data.users.length) {
      const createUserResult = await apolloClient.mutate({
        mutation: CREATE_USER_MUTATION,
        variables: {id, email, name, surname, photo},
      });
      console.log('User created in Hasura:', createUserResult.data);
    } else {
      console.log('User already exists in Hasura.');
    }
  } catch (error) {
    console.error('Error creating user in Hasura:', error);
  }
};

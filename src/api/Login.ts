import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {setToken} from '../redux/action';
import config from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApolloClient, HttpLink, InMemoryCache, gql} from '@apollo/client';
import {createUserInHasura} from '../modules/userModule';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId: config.WEB_CLIENT_ID,
  offlineAccess: true,
  hostedDomain: '',
  forceCodeForRefreshToken: true,
  accountName: '',
  iosClientId: config.IOS_CLIENT_ID,
  googleServicePlistPath: '',
  openIdRealm: '',
  profileImageSize: 120,
});

export const signInWithGoogle = async (dispatch, success) => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('userInfo', JSON.stringify(userInfo.user));
    if (userInfo.idToken) {
      AsyncStorage.setItem('@userInfo', JSON.stringify(userInfo.user));
      await createUserInHasura(userInfo.user);
      dispatch(setToken(userInfo.idToken));
    }
    dispatch({type: success, payload: userInfo});
  } catch (error) {
    console.log(error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('user cancelled the login flow');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('operation (e.g. sign in) is in progress already');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('play services not available or outdated');
    } else {
      console.log('some other error happened');
    }
  }
};

export default signInWithGoogle;

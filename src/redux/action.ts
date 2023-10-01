import {get} from '../api/Fetch';
import signInWithGoogle from '../api/Login';
import {
  BASE_URL,
  GET_POST_DATA,
  REMOVE_TOKEN,
  SET_SEARCH_QUERY,
  SET_TOKEN,
  SET_USER_INFO,
} from '../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getPosts = dispatch => {
  return get(BASE_URL.concat('/posts'), dispatch, GET_POST_DATA);
};

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setUserInfo = dispatch => {
  return signInWithGoogle(dispatch, SET_USER_INFO);
};

export const setToken = token => async dispatch => {
  try {
    await AsyncStorage.setItem('@token', token);
    dispatch({type: SET_TOKEN, payload: token});
  } catch (e) {
    console.error('Token saving error', e);
  }
};

export const removeToken = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('@token');
    dispatch({type: REMOVE_TOKEN});
  } catch (e) {
    console.error('Token removing error', e);
  }
};

export const getTokenFromStorage = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('@token');
    if (token !== null) {
      dispatch({type: SET_TOKEN, payload: token});
    }
  } catch (e) {
    console.error('Token reading error', e);
  }
};

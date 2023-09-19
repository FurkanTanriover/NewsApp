import {get} from '../api/Fetch';
import {BASE_URL, GET_POST_DATA} from '../utils/constants';

export const getPosts = dispatch => {
  return get(BASE_URL.concat('/posts'), dispatch, GET_POST_DATA);
};

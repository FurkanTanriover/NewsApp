import {get} from '../api/Fetch';
import {BASE_URL, GET_POST_DATA, SET_SEARCH_QUERY} from '../utils/constants';

export const getPosts = dispatch => {
  return get(BASE_URL.concat('/posts'), dispatch, GET_POST_DATA);
};

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

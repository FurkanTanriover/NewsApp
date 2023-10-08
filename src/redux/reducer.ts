import {
  GET_POST_DATA,
  REMOVE_TOKEN,
  SET_SEARCH_QUERY,
  SET_TOKEN,
  SET_USER_INFO,
} from '../utils/constants';

const initialState = {
  posts: [],
  searchQuery: '',
  userInfo: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DATA:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;

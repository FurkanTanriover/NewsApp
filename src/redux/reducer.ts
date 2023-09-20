import {GET_POST_DATA, SET_SEARCH_QUERY} from '../utils/constants';

const initialState = {
  posts: [],
  searchQuery: '',
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
    default:
      return state;
  }
};

export default reducer;

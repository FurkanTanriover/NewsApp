import {GET_POST_DATA} from '../utils/constants';

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DATA:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

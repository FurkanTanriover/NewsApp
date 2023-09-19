import {GET_POST_DATA, LOGIN_FAILURE, LOGIN_SUCCESS} from '../utils/constants';

const initialState = {
  token: null,
  error: null,
  data: null,
  insightsPosts: [],
  posts: [],
  isAuth: false,
  isRegisterSuccess: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
        isAuth: action.payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload || 'Bir hata oluştu',
      };

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

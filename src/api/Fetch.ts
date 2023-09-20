import axios from 'axios';

export const get = (url, dispatch, success) => {
  axios({
    method: 'get',
    url,
    headers: {
      'Accept-Language': 'tr-TR',
    },
  })
    .then(response => {
      dispatch({type: success, payload: response.data});
    })
    .catch(err => {
      console.log('GET ERROR: => ', url, err?.response);
    });
};

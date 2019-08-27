import axios from 'axios';

import actions from './authActions';

const setBaseURL = () => {
  axios.defaults.baseURL = 'http://localhost:3002';
};

const signIn = credentials => dispatch => {
  dispatch(actions.authRequest());
  setBaseURL();
  axios
    .post('/register', credentials)
    .then(({ data }) => {
      dispatch(actions.authSuccess(data));
    })
    .catch(error => dispatch(actions.authError(error)));
};

export default {
  signIn
};

import types from './authActionsTypes';

const authRequest = () => ({
  type: types.AUTH_REQUEST
});

const authSuccess = data => ({
  type: types.AUTH_SUCCESS,
  payload: data
});

const authError = error => ({
  type: types.AUTH_ERROR,
  payload: {
    error
  }
});

export default {
  authRequest,
  authSuccess,
  authError
};

import { combineReducers } from 'redux';

import types from './authActionsTypes';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.AUTH_SUCCESS:
      return payload.user;

    case types.AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  user
});

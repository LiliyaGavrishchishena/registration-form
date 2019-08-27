import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import countriesReducer from '../redux/countries/countriesReducer';
import authReducer from '../redux/auth/authReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: 'country'
};
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  countries: countriesReducer,
  auth: persistReducer(sessionPersistConfig, authReducer)
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const middlewares = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middlewares);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

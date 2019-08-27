import types from './countriesActionTypes';

const fetchCountriesRequest = () => ({
  type: types.COUNTRIES_FETCH_REQUEST
});

const fetchCountriesSuccess = countries => ({
  type: types.COUNTRIES_FETCH_SUCCESS,
  payload: {
    countries
  }
});

const fetchCountriesError = error => ({
  type: types.COUNTRIES_FETCH_ERROR,
  payload: { error }
});

export default {
  fetchCountriesRequest,
  fetchCountriesSuccess,
  fetchCountriesError
};

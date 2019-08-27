import types from './countriesActionTypes';

export default function countriesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.COUNTRIES_FETCH_SUCCESS:
      return payload.countries;

    default:
      return state;
  }
}

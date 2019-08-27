import axios from 'axios';
import actions from './countriesActions';

axios.defaults.baseURL = 'http://localhost:3002';

const fetchCountriesItems = () => async dispatch => {
  dispatch(actions.fetchCountriesRequest());

  try {
    const response = await axios.get('/countries');
    dispatch(actions.fetchCountriesSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchCountriesError(error));
  }
};

export default { fetchCountriesItems };

import { combineReducers } from 'redux';
import CitySearchReducer from './components/CitySearch/citySearchReducers';

const rootReducer = combineReducers({
  citySearch: CitySearchReducer
});

export default rootReducer;

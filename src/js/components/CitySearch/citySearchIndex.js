import { connect } from 'react-redux';
import CitySearch from './CitySearch';

function mapStoreToProps(store) {
  return {
    cities: store.citySearch
  };
}

export default connect(mapStoreToProps)(CitySearch);
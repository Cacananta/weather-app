import { connect } from 'react-redux';
import CitySearch from './CitySearch';

function mapStoreToProps(store) {
  return {
    cities: store.citySearch.cities,
    showContent: store.citySearch.cities
  };
}

export default connect(mapStoreToProps)(CitySearch);
import { connect } from 'react-redux';
import Weather from './Weather';

function MapStoreToProps(store) {
  return {
    cities: store.citySearch.cities,
    showContent: store.citySearch.showContent
  }
}

export default connect(MapStoreToProps)(Weather);
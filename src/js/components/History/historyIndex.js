import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
  return {
    cities: store.citySearch.cities,
    showDisplay: store.citySearch.showDisplay
  }
}

export default connect(mapStoreToProps)(History);
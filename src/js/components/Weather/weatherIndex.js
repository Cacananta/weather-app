import { connect } from 'react-redux';
import Weather from './Weather';

function MapStoreToProps(store) {
  return {
    something: 'hello world!'
  }
}

export default connect(MapStoreToProps)(Weather);
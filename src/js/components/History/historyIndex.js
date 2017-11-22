import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
  return {
    something: 'hello world!'
  }
}

export default connect(mapStoreToProps)(History);
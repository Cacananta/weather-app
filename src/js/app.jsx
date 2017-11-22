import React from 'react';
import Weather from './components/Weather/Weather.jsx';
import History from './components/History/History.jsx';
import CitySearch from './components/CitySearch/citySearch.jsx';

export default class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <header>
          <div className="jumbotron mb-0">
            <h1 className="display-3">Weather Application</h1>
            <p className="lead">On the move? Pack accordingly for your destination!</p>
          </div>
        </header>
        <div className="container">
          <CitySearch />
          <div className="row">
            <Weather />
            <History />
          </div>
        </div>
      </div>
    );
  }
}

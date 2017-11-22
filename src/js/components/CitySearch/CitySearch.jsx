import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux'
import { addCity } from './citySearchActions'

var dateAndTime = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

export default class CitySearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputClick = this.handleInputClick.bind(this);
    this.kelvinToFahrenheit = this.kelvinToFahrenheit.bind(this);
  }

  kelvinToFahrenheit(kelvin) {
    return (1.8 * (kelvin - 273) + 32).toFixed(2);
  }

  handleInputClick(e) {
    const { dispatch } = this.props;
    console.log(this.props);
    let cityName = document.getElementById('cityInput').value;
    Axios.get('/api/' + cityName)
      .then((res) => {
        const response = res.data;
        const newCity = {
          cityName: response.name,
          weather: response.weather.main,
          lat: response.coord.lat,
          lon: response.coord.lon,
          temp: this.kelvinToFahrenheit(response.main.temp),
          max: this.kelvinToFahrenheit(response.main.temp_max),
          min: this.kelvinToFahrenheit(response.main.temp_min),
          humidity: response.main.humidity,
          wind: response.wind.speed,
          dateAndTime: dateAndTime
        }
        console.log(newCity);
        dispatch(addCity(newCity));
      })
      .catch((err) => {
        console.log(err);
        // alert('Uh oh! We can\'t find ' + cityName + '. Please enter another city location. Error: ' + err);
      })
  }

  render() {
    // const { cities, dispatch } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col my-4">
            <button type="button" className="btn btn-primary mx-1">San Diego</button>
            <button type="button" className="btn btn-primary mx-1">New York</button>
            <button type="button" className="btn btn-primary mx-1">Hong Kong</button>
            <button type="button" className="btn btn-primary mx-1">Yosemite</button>
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-4">
            <input id="cityInput" type="text" className="form-control" placeholder="Search by city..." />
            <span className="input-group-btn">
              <button onClick={this.handleInputClick} className="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

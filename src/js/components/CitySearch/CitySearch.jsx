import React from 'react';
import Axios from 'axios';
import { addCity, showCity } from './citySearchActions';

export default class CitySearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputClick = this.handleInputClick.bind(this);
    this.searchButton = this.searchButton.bind(this)
    this.kelvinToFahrenheit = this.kelvinToFahrenheit.bind(this);
  }

  kelvinToFahrenheit(kelvin) {
    return (1.8 * (kelvin - 273) + 32).toFixed(2);
  }

  handleInputClick() {
    const { dispatch } = this.props;
    let cityName = document.getElementById('cityInput').value;
    Axios.get('/api/' + cityName)
      .then((res) => {
        const response = res.data;
        const newCity = {
          cityName: response.name,
          weather: response.weather[0].main,
          lat: response.coord.lat,
          lon: response.coord.lon,
          pressure: response.main.pressure,
          temp: this.kelvinToFahrenheit(response.main.temp),
          max: this.kelvinToFahrenheit(response.main.temp_max),
          min: this.kelvinToFahrenheit(response.main.temp_min),
          humidity: response.main.humidity,
          wind: response.wind.speed,
          dateAndTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
          id: response.id
        }
        dispatch(addCity(newCity));
        dispatch(showCity(newCity));
      });
    document.getElementById('cityInput').value = '';
  }

  searchButton(e) {
    const { cities, dispatch } = this.props;
    let cityName = e.target.textContent
    cities.map(city => city.cityName == cityName ?
      Axios.get('/api/' + cityName)
        .then((res) => {
          const response = res.data;
          const newCity = {
            cityName: response.name,
            weather: response.weather[0].main,
            lat: response.coord.lat,
            lon: response.coord.lon,
            pressure: response.main.pressure,
            temp: this.kelvinToFahrenheit(response.main.temp),
            max: this.kelvinToFahrenheit(response.main.temp_max),
            min: this.kelvinToFahrenheit(response.main.temp_min),
            humidity: response.main.humidity,
            wind: response.wind.speed,
            dateAndTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
            id: response.id
          }
          dispatch(showCity(newCity));
        })
      : city
    )
  }

  render() {
    const { cities, showDisplay } = this.props;
    return (
      <div >
        <div className="row">
          <div className="col my-4">
            {cities && cities.map(city =>
              <button value={city.id} onClick={this.searchButton} key={city.id} type="button" className="btn btn-primary mx-1">{city.cityName}</button>)}
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
      </div >
    )
  }
}

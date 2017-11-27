import React from 'react';


export default class Weather extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { cities, showContent } = this.props;
    return (
      <div className="col-6">
        <div className="card border-primary mb-3">
          <div className="card-header">City Information</div>
          <div className="card-body text-primary">
            <div className="row">
              <div className="col text-center">
                {showContent.weather == 'Clear' ? 
                <img src="/images/clear.png" alt="sunny" height="50px"/> :
                showContent.weather == 'Clouds' ?
                <img src="/images/clouds.png" alt="cloudy" height="50px"/> : 
                showContent.weather == 'Fog' ?
                <img src="/images/fog.png" alt="foggy" height="50px"/> :              
                showContent.weather == 'Rain' ?
                <img src="/images/rain.png" alt="rainy" height="50px"/> :                
                showContent.weather == 'Snow' ?
                <img src="/images/snow.png" alt="snowy" height="50px"/> :
                <img alt="No weather icon information"></img>}
                <h2 className="card-title text-muted"><strong>{showContent.cityName}</strong></h2>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <p className="card-text">Latitude/Longitude: {showContent.lat}, {showContent.lon}</p>
              </div>
            </div>
          </div>
          {/* CITY INFORMATION */}
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p><strong>Temp:</strong></p>
                  <p className="text-success">{showContent.temp} F</p>
                </div>
                <div className="col">
                  <p><strong>Pressure:</strong></p>
                  <p className="text-success">{showContent.pressure}</p>
                </div>
                <div className="col">
                  <p><strong>Humidity:</strong></p>
                  <p className="text-success">{showContent.humidity}%</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p><strong>Temp Low:</strong></p>
                  <p className="text-success">{showContent.min} F</p>
                </div>
                <div className="col">
                  <p><strong>Temp High:</strong></p>
                  <p className="text-success">{showContent.max} F</p>
                </div>
                <div className="col">
                  <p><strong>Wind:</strong></p>
                  <p className="text-success">{showContent.wind} MPH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  
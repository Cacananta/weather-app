import React from 'react';


export default class Weather extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="col-6">
        <div className="card border-primary mb-3">
          <div className="card-header">City Information</div>
          <div className="card-body text-primary">
            <div className="row">
              <div className="col text-center">
                <img src="/images/sunny.png" alt="sunny" height="50px"/>
                <h4 className="card-title">San Diego</h4>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <p className="card-text">Latitude/Longitude: 11.11, 111.11</p>
              </div>
            </div>
          </div>
          {/* CITY INFORMATION */}
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p><strong>Temp (F):</strong></p>
                  <p>72F</p>
                </div>
                <div className="col">
                  <p><strong>Pressure:</strong></p>
                  <p>100</p>
                </div>
                <div className="col">
                  <p><strong>Humidity:</strong></p>
                  <p>75%</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p><strong>Temp Low:</strong></p>
                  <p>60</p>
                </div>
                <div className="col">
                  <p><strong>Temp High:</strong></p>
                  <p>75</p>
                </div>
                <div className="col">
                  <p><strong>Wind:</strong></p>
                  <p>5 MPH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  
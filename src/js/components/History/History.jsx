import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cities } = this.props;
    return (
      <div className="col-6">
        <div className="card border-primary mb-3">
          <div className="card-header">Search History</div>
          <div className="card-body text-primary">
            <ul className="list-group">
              {cities.map(city => 
                <li key={city.id} className="list-group-item">
                  <div className="row">
                    <div className="col">
                      {city.cityName}
                    </div>
                    <div className="col">
                      {city.dateAndTime}
                    </div>
                  </div>
                </li>
              )
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
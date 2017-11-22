import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-6">
        <div className="card border-primary mb-3">
          <div className="card-header">Search History</div>
          <div className="card-body text-primary">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="row">
                  <div className="col">
                    San Diego
                  </div>
                  <div className="col">
                    Date and Time
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col">
                    Another City
                  </div>
                  <div className="col">
                    Date and Time
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
const defaultState = {
  cities: [],
  showContent: [
    {
      cityName: '',
      weather: 'Sunny',
      lat: '0.00',
      lon: '0.00',
      pressure: '000',
      temp: '00.00 F',
      max: '00.00 F',
      min: '00.00 F',
      humidity: '00',
      wind: '0 MPH',
    }
  ]
};

export default function CitySearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CITY': {
      return {
        ...state,
        cities:
        [...state.cities, payload]
      };
    }
    case 'SHOW_CITY': {
      return {
        ...state,
        showContent: payload
      }
    }
    default: {
      return state
    }
  }
}


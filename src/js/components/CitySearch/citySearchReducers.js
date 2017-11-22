const defaultState = {
  cities: [],
};

export default function CitySearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CITY': {
      return {
        cities:
        [...state.cities, payload]
      }
    }
    default: {
      return state
    }
  }
}


import Axios from 'axios';

export function addCity(newCity) {
  return {
    type: 'ADD_CITY',
    payload: newCity
  }
}

export function showCity(newCity) {
  return {
    type: 'SHOW_CITY',
    payload: newCity
  }
}
/* global fetch */
import 'whatwg-fetch';

import {
  FETCHED_PRESIDENTS,
  FETCHED_PRESIDENTS_STATUS,
  FETCHED_PRESIDENT,
} from './types';

export const fetchPresidents = () => {
  return (dispatch) => {
    dispatch({ type: FETCHED_PRESIDENTS_STATUS, payload: 'LOADING' });

    fetch('/api/presidents')
      .then(response => response.json())
      .then((results) => {
        dispatch({ type: FETCHED_PRESIDENTS, payload: results });
        return dispatch({ type: FETCHED_PRESIDENTS_STATUS, payload: 'DONE' });
      })
      .catch((err) => {
        console.log(`fetchPresidents exception:[${err}]`);
        dispatch({ type: FETCHED_PRESIDENTS_STATUS, payload: 'ERROR' });
      });
  };
};

export const fetchPresident = (number) => {
  return (dispatch) => {
    fetch(`/api/presidents/${number}`)
      .then(response => response.json())
      .then(results => dispatch({ type: FETCHED_PRESIDENT, payload: results }))
      .catch((err) => {
        console.log(`fetchPresident exception:[${err}]`);
      });
  };
};

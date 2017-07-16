/* global it, expect */
import Immutable, { Map } from 'immutable';
import reducer from './reducerMain';
import {
  FETCHED_PRESIDENTS,
  FETCHED_PRESIDENTS_STATUS,
} from '../actions/types';


it('should handle FETCHED_PRESIDENTS_STATUS', () => {
  // LOADING
  let state = reducer(Map({}), {
    type: FETCHED_PRESIDENTS_STATUS,
    payload: 'LOADING',
  });
  expect(state.get('loadStatus')).toBeDefined();
  expect(state.get('loadStatus')).toBe('LOADING');

  // DONE
  state = reducer(Map({}), {
    type: FETCHED_PRESIDENTS_STATUS,
    payload: 'DONE',
  });
  expect(state.get('loadStatus')).toBeDefined();
  expect(state.get('loadStatus')).toBe('DONE');
});


it('should handle FETCHED_PRESIDENTS', () => {
  const presidents = [{ number: 1, president: 'George Washington' }, { number: 2, president: 'John Adams' }, { number: 3, president: 'Thomas Jefferson' }];

  const state = reducer(Map({}), {
    type: FETCHED_PRESIDENTS,
    payload: presidents,
  });

  expect(state.get('presidents')).toBeDefined();
  expect(state.get('presidents').size).toBe(3);
  expect(state.get('presidents')).toEqual(Immutable.fromJS(presidents));

  expect(state.get('presidents').get(0).get('number')).toEqual(1);
  expect(state.get('presidents').get(0).get('president')).toEqual('George Washington');
  expect(state.get('presidents').get(1).get('number')).toEqual(2);
  expect(state.get('presidents').get(1).get('president')).toEqual('John Adams');
  expect(state.get('presidents').get(2).get('number')).toEqual(3);
  expect(state.get('presidents').get(2).get('president')).toEqual('Thomas Jefferson');
});

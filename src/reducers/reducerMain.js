import Immutable, { Map } from 'immutable';

import {
  FETCHED_PRESIDENTS,
  FETCHED_PRESIDENTS_STATUS,
  FETCHED_PRESIDENT,
} from '../actions/types';

const INITIAL_STATE = Map({
  // presidents: List([]),
});

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHED_PRESIDENTS: {
      return state.merge(Map({
        presidents: Immutable.fromJS(action.payload),
      }));
    }

    case FETCHED_PRESIDENTS_STATUS: {
      return state.merge(Map({
        loadStatus: action.payload,
      }));
    }

    case FETCHED_PRESIDENT: {
      return state.merge(Map({
        selectedPresident: Immutable.fromJS(action.payload),
      }));
    }

    default:
      return state;
  }
};

export default mainReducer;

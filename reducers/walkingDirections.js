import { REHYDRATE } from 'redux-persist/constants';

import { REQUEST_WALKING_DIRECTIONS, RECEIVE_WALKING_DIRECTIONS, ERROR_WALKING_DIRECTIONS,
  coordinatesMatch } from '../actions/walkingDirections';

export const initialState = {
  isFetching: false,
  error: '',
  origin: {
    longitude: 0,
    latitude: 0,
  },
  destination: {
    longitude: 0,
    latitude: 0,
  },
  coords: [],
  duration: '',
  distance: '',
};

function walkingDirections(state = initialState, action) {
  switch (action.type) {
    case REQUEST_WALKING_DIRECTIONS:
      return Object.assign({}, state, {
        isFetching: true,
        destination: action.destination,
      });
    case RECEIVE_WALKING_DIRECTIONS: {
      const responseCorrespondsToLatestRequest = coordinatesMatch(state.destination, action.destination);
      if (responseCorrespondsToLatestRequest) {
        return Object.assign({}, state, {
          isFetching: false,
          origin: action.origin,
          ...action.route,
        });
      }
      return state;
    }
    case ERROR_WALKING_DIRECTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        coords: [],
        lastUpdated: action.receivedAt,
        error: action.error,
      });
    case REHYDRATE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default walkingDirections;

// Local Variables:
// mode: react
// End:

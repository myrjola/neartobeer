import { REQUEST_WALKING_DIRECTIONS, RECEIVE_WALKING_DIRECTIONS, ERROR_WALKING_DIRECTIONS,
         coordinatesMatch } from '../actions';

function walkingDirections(state = {
  isFetching: false,
  error: '',
  origin: {
    longitude: 0,
    latitiude: 0,
  },
  destination: {
    longitude: 0,
    latitude: 0,
  },
  coords: [],
}, action) {
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
          coords: action.coords,
          lastUpdated: action.receivedAt,
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
    default:
      return state;
  }
}

export default walkingDirections;

// Local Variables:
// mode: js2-jsx
// End:
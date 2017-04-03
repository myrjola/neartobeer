import { REQUEST_WALKING_DIRECTIONS, RECEIVE_WALKING_DIRECTIONS, ERROR_WALKING_DIRECTIONS } from '../actions';

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
      });
    case RECEIVE_WALKING_DIRECTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        origin: action.origin,
        coords: action.coords,
        lastUpdated: action.receivedAt,
      });
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

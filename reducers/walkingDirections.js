import { REQUEST_WALKING_DIRECTIONS, RECEIVE_WALKING_DIRECTIONS, INVALIDATE_WALKING_DIRECTIONS } from '../actions';

function walkingDirections(state = {
  isFetching: false,
  didInvalidate: true,
  coords: [],
}, action) {
  switch (action.type) {
    case INVALIDATE_WALKING_DIRECTIONS:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case REQUEST_WALKING_DIRECTIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_WALKING_DIRECTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        coords: action.coords,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export default walkingDirections;

// Local Variables:
// mode: js2-jsx
// End:

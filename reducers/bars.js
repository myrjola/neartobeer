import { REQUEST_BARS, RECEIVE_BARS, INVALIDATE_BARS, ERROR_BARS } from '../actions/bars.js';

export const initialState = {
  isFetching: false,
  didInvalidate: true,
  items: [],
};

function bars(state = initialState, action) {
  switch (action.type) {
    case INVALIDATE_BARS:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case REQUEST_BARS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_BARS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.bars,
        lastUpdated: action.receivedAt,
      });
    case ERROR_BARS:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}

export default bars;

// Local Variables:
// mode: js2-jsx
// End:

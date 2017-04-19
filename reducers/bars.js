import { REQUEST_BARS, RECEIVE_BARS, INVALIDATE_BARS, ERROR_BARS, SELECT_BAR, DESELECT_BAR } from '../actions/bars.js';

export const initialState = {
  isFetching: false,
  didInvalidate: true,
  items: [],
  selectedBarId: null,
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
        didInvalidate: true,
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
    case SELECT_BAR:
      return {
        ...state,
        selectedBarId: action.barId,
      };
    case DESELECT_BAR:
      return {
        ...state,
        selectedBarId: null,
      };
    default:
      return state;
  }
}

export default bars;

// Local Variables:
// mode: js2-jsx
// End:

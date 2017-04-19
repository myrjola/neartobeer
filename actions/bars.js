import checkStatus from '../util/checkStatus';

export const REQUEST_BARS = 'REQUEST_BARS';
export const RECEIVE_BARS = 'RECEIVE_BARS';
export const ERROR_BARS = 'ERROR_BARS';
export const INVALIDATE_BARS = 'INVALIDATE_BARS';
export const SELECT_BAR = 'SELECT_BAR';
export const DESELECT_BAR = 'DESELECT_BAR';

export const invalidateBars = {
  type: INVALIDATE_BARS,
};

export const requestBars = {
  type: REQUEST_BARS,
};

export const receiveBars = json => ({
  type: RECEIVE_BARS,
  bars: json,
  receivedAt: Date.now(),
});

export const errorBars = error => ({
  type: ERROR_BARS,
  error,
});

export const selectBar = barId => ({
  type: SELECT_BAR,
  barId,
});

export const deselectBar = {
  type: DESELECT_BAR,
};

export function fetchBars() {
  return (dispatch) => {
    dispatch(requestBars);
    return fetch('http://beersunderthirty.org/places/places.json')
      .then(checkStatus)
      .then(response => response.json())
      .then(json => dispatch(receiveBars(json)))
      .catch(error => dispatch(errorBars(error)));
  };
}

function shouldFetchBars(state) {
  if (!state.bars) {
    return true;
  } else if (state.bars.isFetching) {
    return false;
  }

  // The cache invalidates after one hour.
  const ONE_HOUR = 60 * 60 * 1000; /* ms */
  if (Date.now() - state.bars.lastUpdated > ONE_HOUR) {
    return true;
  }

  return state.bars.didInvalidate;
}

export function fetchBarsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBars(getState())) {
      return dispatch(fetchBars());
    }
  };
}

// Local Variables:
// mode: js2-jsx
// End:

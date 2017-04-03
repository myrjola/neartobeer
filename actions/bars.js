import checkStatus from '../util/checkStatus';

export const REQUEST_BARS = 'REQUEST_BARS';
export const RECEIVE_BARS = 'RECEIVE_BARS';
export const INVALIDATE_BARS = 'INVALIDATE_BARS';

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

function fetchBars() {
  return (dispatch) => {
    dispatch(requestBars);
    // TODO: How to handle errors? Remember to set state.bars.isFetching to false.
    return fetch('http://beersunderthirty.org/places/places.json')
      .then(checkStatus)
      .then(response => response.json())
      .then(json => dispatch(receiveBars(json)));
  };
}

function shouldFetchBars(state) {
  if (!state.bars.items) {
    return true;
  } else if (state.bars.isFetching) {
    return false;
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

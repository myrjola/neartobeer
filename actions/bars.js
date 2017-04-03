import checkStatus from '../util/checkStatus';

export const REQUEST_BARS = 'REQUEST_BARS';
export const RECEIVE_BARS = 'RECEIVE_BARS';
export const ERROR_BARS = 'ERROR_BARS';
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

export const errorBars = error => ({
  type: ERROR_BARS,
  error,
});

function fetchBars() {
  return (dispatch) => {
    dispatch(requestBars);
    // TODO: How to handle errors? Remember to set state.bars.isFetching to false.
    return fetch('http://beersunderthirty.org/places/places.json')
      .then(checkStatus)
      .then(response => response.json())
      .then(json => dispatch(receiveBars(json)))
      .catch(error => dispatch(errorBars(error)));
  };
}

function shouldFetchBars(state) {
  console.log(state);
  if (!state.bars) {
    console.log('no bars');
    return true;
  } else if (state.bars.isFetching) {
    console.log('fetching');
    return false;
  }
  console.log('validation');
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

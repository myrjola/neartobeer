import checkStatus from '../util/checkStatus';

export const SET_BEER_MAX_PRICE_CATEGORY = 'SET_BEER_MAX_PRICE_CATEGORY';
export const REQUEST_BARS = 'REQUEST_BARS';
export const RECEIVE_BARS = 'RECEIVE_BARS';
export const INVALIDATE_BARS = 'INVALIDATE_BARS';
export const REQUEST_WALKING_DIRECTIONS = 'REQUEST_WALKING_DIRECTIONS';
export const RECEIVE_WALKING_DIRECTIONS = 'RECEIVE_WALKING_DIRECTIONS';
export const INVALIDATE_WALKING_DIRECTIONS = 'INVALIDATE_WALKING_DIRECTIONS';

export const setMaxBeerPriceCategory = category => ({
  type: SET_BEER_MAX_PRICE_CATEGORY,
  category,
});

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

export const invalidateWalkingDirections = {
  type: INVALIDATE_WALKING_DIRECTIONS,
};

export const requestWalkingDirections = {
  type: REQUEST_WALKING_DIRECTIONS,
};

export const receiveWalkingDirections = coords => ({
  type: RECEIVE_WALKING_DIRECTIONS,
  coords,
});

// transforms something like this geocFltrhVvDsEtA}ApSsVrDaEvAcBSYOS_@... to an array of coordinates
const decodeGoogleDirectionsPolyline = function(t,e){for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})};

function fetchWalkingDirections() {
  const mode = 'walking';
  const origin = 'Odenplan';
  const destination = 'Skansen';
  const APIKEY = '***REMOVED***';
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;
  return (dispatch) => {
    dispatch(requestWalkingDirections);
    return fetch(url)
      .then(checkStatus)
      .then(response => response.json())
      .then(json => decodeGoogleDirectionsPolyline(json.routes[0].overview_polyline.points))
      .then(coords => dispatch(receiveWalkingDirections(coords)));
  };
}
function shouldFetchWalkingDirections(state) {
  if (!state.walkingDirections) {
    return true;
  } else if (state.walkingDirections.isFetching) {
    return false;
  }
  return state.walkingDirections.didInvalidate;
}

export function fetchWalkingDirectionsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchWalkingDirections(getState())) {
      return dispatch(fetchWalkingDirections());
    }
  };
}


// Local Variables:
// mode: js2-jsx
// End:

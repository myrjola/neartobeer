import polyline from 'google-polyline';

import checkStatus from '../util/checkStatus';

export const REQUEST_WALKING_DIRECTIONS = 'REQUEST_WALKING_DIRECTIONS';
export const RECEIVE_WALKING_DIRECTIONS = 'RECEIVE_WALKING_DIRECTIONS';
export const ERROR_WALKING_DIRECTIONS = 'ERROR_WALKING_DIRECTIONS';

export const requestWalkingDirections = destination => ({
  type: REQUEST_WALKING_DIRECTIONS,
  destination,
});

export const receiveWalkingDirections = (origin, route, destination) => ({
  type: RECEIVE_WALKING_DIRECTIONS,
  origin,
  route,
  destination,
});

function decodeGoogleRoute(route) {
  const coordinates = polyline.decode(route.overview_polyline.points);
  const routeInformation = route.legs[0];
  return {
    coords: coordinates.map(coordinate => ({ latitude: coordinate[0], longitude: coordinate[1] })),
    distance: routeInformation.distance.text,
    duration: routeInformation.duration.text,
  };
}

export const errorWalkingDirections = error => ({
  type: ERROR_WALKING_DIRECTIONS,
  error,
});

export function coordinatesMatch(coord1, coord2) {
  return coord1.latitude === coord2.latitude && coord1.longitude === coord2.longitude;
}

function coordinatesToString(coord) {
  return `${coord.latitude},${coord.longitude}`;
}

function fetchWalkingDirections(destination) {
  return (dispatch) => {
    dispatch(requestWalkingDirections(destination));
    return navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin = position.coords;
        // FIXME: Figure out how not to repeat ourselves. This key is also in AndroidManifests.xml.
        const APIKEY = '***REMOVED***';
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${coordinatesToString(origin)}` +
              `&destination=${coordinatesToString(destination)}&key=${APIKEY}&mode=walking`;
        return fetch(url)
          .then(checkStatus)
          .then(response => response.json())
          .then(json => decodeGoogleRoute(json.routes[0]))
          .then(route => dispatch(receiveWalkingDirections(origin, route, destination)))
          .catch(error => dispatch(errorWalkingDirections(error)));
      },
      error => dispatch(errorWalkingDirections(error)),
    );
  };
}

function shouldFetchWalkingDirections(state, destination) {
  const destinationHasChanged = coordinatesMatch(destination, state.walkingDirections.destination);
  if (!state.walkingDirections) {
    return true;
  } else if (!destinationHasChanged && state.walkingDirections.isFetching) {
    return false;
  }
  return true;
}

export function fetchWalkingDirectionsIfNeeded(destination) {
  return (dispatch, getState) => {
    if (shouldFetchWalkingDirections(getState(), destination)) {
      return dispatch(fetchWalkingDirections(destination));
    }
  };
}


// Local Variables:
// mode: react
// End:

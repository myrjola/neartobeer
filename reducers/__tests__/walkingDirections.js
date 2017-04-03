import mockStore from 'redux-mock-store';

import { requestWalkingDirections, receiveWalkingDirections,
         fetchWalkingDirectionsIfNeeded } from '../../actions/walkingDirections';
import walkingDirections, { initialState } from '../walkingDirections';

var store = null;

beforeEach(() => {
  store = mockStore({ walkingDirections: initialState });
});

const origin = {
  latitude: 53.213,
  longitude: 69.123,
};

const destination = {
  latitude: 54.213,
  longitude: 19.123,
};

const coords = [origin, destination];

it("doesn't accept old walking directions", () => {
  expect(walkingDirections(initialState, receiveWalkingDirections(origin, coords, destination))).toMatchSnapshot();
});

it('requests new walking directions', () => {
  expect(walkingDirections(initialState, requestWalkingDirections(destination))).toMatchSnapshot();
});

it('receives new walking directions', () => {
  const state = walkingDirections(initialState, requestWalkingDirections(destination));
  expect(walkingDirections(state, receiveWalkingDirections(origin, coords, destination))).toMatchSnapshot();
});

it('errors when HTTP request fails', async () => {
  fetch.mockResponseFailure('Service unavailable!');
  navigator.mockSuccess({ coords: origin });
  await store.dispatch(fetchWalkingDirectionsIfNeeded(destination));
  expect(store.getActions()).toMatchSnapshot();
});

it('requests and receives new walking directions', async () => {
  const response = '{"routes": [{"overview_polyline": {"points": "_p~iF~ps|U_ulLnnqC_mqNvxq`@"}}]}';
  fetch.mockResponseSuccess(response);
  navigator.mockSuccess({ coords: origin });
  await store.dispatch(fetchWalkingDirectionsIfNeeded(destination));
  expect(store.getActions()).toMatchSnapshot();
});

it('errors when geolocation fails', async () => {
  const response = '{"routes": [{"overview_polyline": {"points": "_p~iF~ps|U_ulLnnqC_mqNvxq`@"}}]}';
  fetch.mockResponseSuccess(response);
  navigator.mockFailure("Can't get location");
  await store.dispatch(fetchWalkingDirectionsIfNeeded(destination));
  expect(store.getActions()).toMatchSnapshot();
});

// Local Variables:
// mode: js2-jsx
// End:

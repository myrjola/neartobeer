import { requestWalkingDirections, receiveWalkingDirections } from '../../actions/walkingDirections';
import walkingDirections, { initialState } from '../walkingDirections';

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

// Local Variables:
// mode: js2-jsx
// End:

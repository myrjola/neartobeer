// Import both of these before the test renderer
import React from 'react';
import 'react-native';

import renderer from 'react-test-renderer';

import BarMap from '../BarMap';

const exampleBars = [
  {
    post_id: 38,
    post_title: 'MacLarens',
    post_author: 1,
    post_content: 'Serves chilled Norrlands Guld on tap for only 29:-.' +
      'One of the most best places in town for cheap beer lovers.',
    post_category: 'Beer under 30',
    default_category: 'Beer under 30',
    post_type: 'gd_place',
    post_status: 'publish',
    post_address: 'Norrtullsgatan 11',
    post_city: 'Stockholm',
    post_region: 'Stockholm County',
    post_country: 'Sweden',
    post_zip: '113 29',
    post_latitude: 59.3419634,
    post_longitude: 18.051719899999966,
  },
  {
    post_id: 39,
    post_title: 'Lion Bar Sveavägen 39',
    post_author: 1,
    post_content: 'The famous Lion Bar chain is a perfect find for bargain brew lovers! 7 Places all around' +
      ' Stockholm serve chilled Spendrups (40cl, tapped) for 23:- until 20h. After this the prices will increase ' +
      'in two steps: until midnight the price will be 36:-, thereafter 40:-. Go and get there early to get yourself' +
      ' a crispy brew for under 30:- !',
    post_category: 'Beer under 50',
    default_category: 'Beer under 30',
    post_type: 'gd_place',
    post_status: 'publish',
    post_address: 'Sveavägen 39 Stockholm',
    post_city: 'Stockholm',
    post_region: 'Stockholm County',
    post_country: 'Sweden',
    post_latitude: 59.3404626,
    post_longitude: 18.05888660000005,
  },
];

// So that we don't need to mess with Redux store.
jest.mock('../../containers/WalkingDirections', () => 'WalkingDirections');
jest.mock('../../containers/BarMarkerContainer', () => 'BarMarkerContainer');

it('renders without bars', () => {
  expect(renderer.create(
    <BarMap dispatch={jest.fn()} isFetching={false} />,
  )).toMatchSnapshot();
});

it('renders with bars', () => {
  expect(renderer.create(
    <BarMap
      dispatch={jest.fn()}
      isFetching={false}
      items={exampleBars}
    />,
  )).toMatchSnapshot();
});

// Local Variables:
// mode: react
// End:

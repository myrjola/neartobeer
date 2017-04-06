import mockStore from 'redux-mock-store';

import { requestBars, receiveBars, invalidateBars, fetchBarsIfNeeded } from '../../actions/bars';
import bars, { initialState } from '../bars';

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

var store = null;

beforeEach(() => {
  store = mockStore({ bars: initialState });
  global.Date.now = jest.fn(() => 1482363367071);
});

it('invalidates content', () => {
  expect(bars(initialState, invalidateBars)).toMatchSnapshot();
});

it('requests new bars', () => {
  expect(bars(initialState, requestBars)).toMatchSnapshot();
});

it('receives new bars', () => {
  expect(bars(initialState, receiveBars(exampleBars))).toMatchSnapshot();
});

it('errors when HTTP request fails', async () => {
  fetch.mockResponseFailure('Service unavailable!');
  await store.dispatch(fetchBarsIfNeeded());
  expect(store.getActions()).toMatchSnapshot();
});

it('requests and receives new bars', async () => {
  fetch.mockResponseSuccess(JSON.stringify(exampleBars));
  await store.dispatch(fetchBarsIfNeeded());
  expect(store.getActions()).toMatchSnapshot();
});

it("doesn't request bars when fetch in progress", async () => {
  store = mockStore({ bars: bars(initialState, requestBars) });
  await store.dispatch(fetchBarsIfNeeded());
  expect(store.getActions()).toMatchSnapshot();
});

it("doesn't request bars when cache not invalidated", async () => {
  store = mockStore({ bars: bars(initialState, receiveBars(exampleBars)) });
  await store.dispatch(fetchBarsIfNeeded());
  expect(store.getActions()).toMatchSnapshot();
});

it('invalidates over one hour old cache', async () => {
  var receiveBarsState = { bars: bars(initialState, receiveBars(exampleBars)) };
  const ONE_HOUR = 60 * 60 * 1000; /* ms */
  receiveBarsState.bars.lastUpdated = Date.now() - ONE_HOUR - 1;
  store = mockStore(receiveBarsState);
  fetch.mockResponseSuccess(JSON.stringify([]));
  await store.dispatch(fetchBarsIfNeeded());
  expect(store.getActions()).toMatchSnapshot();
});

// Local Variables:
// mode: js2-jsx
// End:

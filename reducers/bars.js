import { REQUEST_BARS, RECEIVE_BARS, INVALIDATE_BARS } from '../actions';

const BARS = [
  {
    post_id: 38,
    post_title: 'MacLarens',
    post_author: 1,
    post_content: 'Serves chilled Norrlands Guld on tap for only 29:-.' +
      'One of the most best places in town for cheap beer lovers.',
    post_category: 'Beer under 30',
    default_category: 'Beer under 30',
    post_tags: '',
    post_type: 'gd_place',
    post_status: 'publish',
    is_featured: '',
    geodir_video: '',
    post_address: 'Norrtullsgatan 11',
    post_city: 'Stockholm',
    post_region: 'Stockholm County',
    post_country: 'Sweden',
    post_zip: '113 29',
    post_latitude: 59.3419634,
    post_longitude: 18.051719899999966,
    geodir_timing: '',
    geodir_contact: '',
    geodir_email: '',
    geodir_website: '',
    geodir_twitter: '',
    geodir_facebook: '',
    geodir_special_offers: '',
    IMAGE: '',
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
    post_tags: '',
    post_type: 'gd_place',
    post_status: 'publish',
    is_featured: '',
    geodir_video: '',
    post_address: 'Sveavägen 39 Stockholm',
    post_city: 'Stockholm',
    post_region: 'Stockholm County',
    post_country: 'Sweden',
    post_zip: '',
    post_latitude: 59.3404626,
    post_longitude: 18.05888660000005,
    geodir_timing: '',
    geodir_contact: '',
    geodir_email: '',
    geodir_website: '',
    geodir_twitter: '',
    geodir_facebook: '',
    geodir_special_offers: '',
    IMAGE: '',
  },
];

function bars(state = {
  isFetching: false,
  didInvalidate: false,
  items: BARS,
}, action) {
  switch (action.type) {
    case INVALIDATE_BARS:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case REQUEST_BARS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_BARS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.bars,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export default bars;

// Local Variables:
// mode: js2-jsx
// End:

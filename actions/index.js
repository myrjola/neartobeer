import polyline from 'google-polyline';

import checkStatus from '../util/checkStatus';

export const SET_BEER_MAX_PRICE_CATEGORY = 'SET_BEER_MAX_PRICE_CATEGORY';
export const setMaxBeerPriceCategory = category => ({
  type: SET_BEER_MAX_PRICE_CATEGORY,
  category,
});

// Local Variables:
// mode: js2-jsx
// End:

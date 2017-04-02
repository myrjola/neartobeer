import { SET_BEER_MAX_PRICE_CATEGORY } from '../actions';

export const BEER_UNDER_30 = 'Beer under 30';
export const BEER_UNDER_40 = 'Beer under 40';
export const BEER_UNDER_50 = 'Beer under 50';
export const maxBeerPriceCategories = [BEER_UNDER_30, BEER_UNDER_40, BEER_UNDER_50];

const maxBeerPriceCategory = (state = BEER_UNDER_50, action) => {
  switch (action.type) {
    case SET_BEER_MAX_PRICE_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export default maxBeerPriceCategory;

// Local Variables:
// mode: js2-jsx
// End:

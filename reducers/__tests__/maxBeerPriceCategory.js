import { setMaxBeerPriceCategory } from '../../actions/maxBeerPriceCategory';
import maxBeerPriceCategory, { BEER_UNDER_40 } from '../maxBeerPriceCategory';

it('sets max beer price category', () => {
  expect(maxBeerPriceCategory(null, setMaxBeerPriceCategory(BEER_UNDER_40))).toMatchSnapshot();
});

// Local Variables:
// mode: js2-jsx
// End:

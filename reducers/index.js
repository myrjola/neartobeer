import { combineReducers } from 'redux';
import maxBeerPriceCategory from './maxBeerPriceCategory';
import bars from './bars';

const beersUnderXApp = combineReducers({
  maxBeerPriceCategory,
  bars,
});

export default beersUnderXApp;

// Local Variables:
// mode: js2-jsx
// End:

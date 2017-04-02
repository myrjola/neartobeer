import { combineReducers } from 'redux';
import maxBeerPriceCategory from './maxBeerPriceCategory';
import bars from './bars';

const beersUnderXReducer = combineReducers({
  maxBeerPriceCategory,
  bars,
});

export default beersUnderXReducer;

// Local Variables:
// mode: js2-jsx
// End:

import { combineReducers } from 'redux';
import maxBeerPriceCategory from './maxBeerPriceCategory';
import bars from './bars';
import walkingDirections from './walkingDirections';

const beersUnderXReducer = combineReducers({
  maxBeerPriceCategory,
  bars,
  walkingDirections,
});

export default beersUnderXReducer;

// Local Variables:
// mode: js2-jsx
// End:

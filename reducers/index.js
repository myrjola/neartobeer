import { combineReducers } from 'redux';
import maxBeerPriceCategory from './maxBeerPriceCategory';
import bars from './bars';
import walkingDirections from './walkingDirections';

const neartobeerReducer = combineReducers({
  maxBeerPriceCategory,
  bars,
  walkingDirections,
});

export default neartobeerReducer;

// Local Variables:
// mode: react
// End:

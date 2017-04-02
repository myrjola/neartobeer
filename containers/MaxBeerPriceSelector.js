import { connect } from 'react-redux';
import { SegmentedControls } from 'react-native-radio-buttons';

import { setMaxBeerPriceCategory } from '../actions';
import { maxBeerPriceCategories } from '../reducers/maxBeerPriceCategory';

const mapStateToProps = state => ({
  options: maxBeerPriceCategories,
  selectedOption: state.maxBeerPriceCategory,
});

const mapDispatchToProps = dispatch => ({
  onSelection: selection => dispatch(setMaxBeerPriceCategory(selection)),
});

const MaxBeerPriceSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SegmentedControls);

export default MaxBeerPriceSelector;

// Local Variables:
// mode: js2-jsx
// End:

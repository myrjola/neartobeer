import { connect } from 'react-redux';

import MaxBeerPriceRadioButtons from '../components/MaxBeerPriceRadioButtons';
import { setMaxBeerPriceCategory } from '../actions/maxBeerPriceCategory';
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
)(MaxBeerPriceRadioButtons);

export default MaxBeerPriceSelector;

// Local Variables:
// mode: js2-jsx
// End:

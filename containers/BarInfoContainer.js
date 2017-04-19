import { connect } from 'react-redux';

import BarInfo from '../components/BarInfo';

const mapStateToProps = state => ({
  bar: state.bars.selectedBarId,
});

const BarInfoContainer = connect(
  mapStateToProps,
)(BarInfo);

export default BarInfoContainer;

// Local Variables:
// mode: js2-jsx
// End:

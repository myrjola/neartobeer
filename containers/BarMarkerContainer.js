import { connect } from 'react-redux';

import BarMarker, { getBarCoordinate } from '../components/BarMarker';
import { fetchWalkingDirectionsIfNeeded } from '../actions';

const mapDispatchToProps = (dispatch, props) => ({
  onPress: () => dispatch(fetchWalkingDirectionsIfNeeded(getBarCoordinate(props.bar))),
});

const BarMarkerContainer = connect(
  null,
  mapDispatchToProps,
)(BarMarker);

export default BarMarkerContainer;

// Local Variables:
// mode: js2-jsx
// End:

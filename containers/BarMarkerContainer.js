import { connect } from 'react-redux';

import BarMarker, { getBarCoordinate } from '../components/BarMarker';
import { fetchWalkingDirectionsIfNeeded } from '../actions/walkingDirections';
import { selectBar } from '../actions/bars';

const mapDispatchToProps = (dispatch, props) => ({
  onPress: () => {
    dispatch(fetchWalkingDirectionsIfNeeded(getBarCoordinate(props.bar)));
    dispatch(selectBar(props.bar.post_id));
  },
});

const BarMarkerContainer = connect(
  null,
  mapDispatchToProps,
)(BarMarker);

export default BarMarkerContainer;

// Local Variables:
// mode: react
// End:

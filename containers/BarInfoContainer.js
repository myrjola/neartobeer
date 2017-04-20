import { connect } from 'react-redux';

import BarInfo from '../components/BarInfo';

const mapStateToProps = (state) => {
  const walkingDirections = state.walkingDirections;
  return {
    bar: state.bars.items.find(bar => bar.post_id === state.bars.selectedBarId),
    walkingDuration: walkingDirections.duration,
    walkingDistance: walkingDirections.distance,
  };
};

const BarInfoContainer = connect(
  mapStateToProps,
)(BarInfo);

export default BarInfoContainer;

// Local Variables:
// mode: js2-jsx
// End:

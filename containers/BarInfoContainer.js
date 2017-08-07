import { connect } from 'react-redux';
import { deselectBar } from '../actions/bars';

import BarInfo from '../components/BarInfo';

const mapStateToProps = (state) => {
  const walkingDirections = state.walkingDirections;
  return {
    bar: state.bars.items.find(bar => bar.post_id === state.bars.selectedBarId),
    walkingDuration: walkingDirections.duration,
    walkingDistance: walkingDirections.distance,
  };
};

const mapDispatchToProps = dispatch => ({
  hideBarInfoView: () => {
    dispatch(deselectBar);
  },
});

const BarInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BarInfo);

export default BarInfoContainer;

// Local Variables:
// mode: react
// End:

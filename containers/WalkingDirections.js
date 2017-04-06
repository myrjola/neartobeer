import { connect } from 'react-redux';
import MapView from 'react-native-maps';

const mapStateToProps = state => ({
  coordinates: state.walkingDirections.coords,
  strokeColor: '#00B1FF',
  strokeWidth: 5,
});

const WalkingDirections = connect(
    mapStateToProps,
)(MapView.Polyline);

export default WalkingDirections;

// Local Variables:
// mode: js2-jsx
// End:

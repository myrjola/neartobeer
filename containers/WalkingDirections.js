import { connect } from 'react-redux';
import MapView from 'react-native-maps';

const mapStateToProps = state => ({
  coordinates: state.walkingDirections.coords,
});

const MaxBeerPriceSelector = connect(
    mapStateToProps,
)(MapView.Polyline);

export default MaxBeerPriceSelector;

// Local Variables:
// mode: js2-jsx
// End:

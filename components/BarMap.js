import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import BarMarker from './BarMarker';
import WalkingDirections from '../containers/WalkingDirections';

import { fetchBarsIfNeeded, fetchWalkingDirectionsIfNeeded } from '../actions';

class BarMap extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBarsIfNeeded());
    dispatch(fetchWalkingDirectionsIfNeeded());
  }

  render() {
    const bars = this.props.items;
    return (
      <MapView
        style={StyleSheet.absoluteFillObject}
        showsUserLocation={true}
        initialRegion={{
          latitude: 59.329323,
          longitude: 18.068580,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {bars.map(bar => (
          <BarMarker
            key={bar.post_id}
            bar={bar}
          />),
                 )
        }
        <WalkingDirections />
      </MapView>
    );
  }
}

BarMap.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    post_id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default BarMap;

// Local Variables:
// mode: js2-jsx
// End:

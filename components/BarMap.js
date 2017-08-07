import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import BarMarkerContainer from '../containers/BarMarkerContainer';
import WalkingDirections from '../containers/WalkingDirections';

const BarMap = ({ items, onPress }) => (
  <MapView
    ref={(ref) => { this.map = ref; }}
    style={StyleSheet.absoluteFillObject}
    onPress={onPress}
    showsUserLocation={true}
    showsMyLocationButton={false}
    initialRegion={{
      latitude: 59.329323,
      longitude: 18.068580,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    {
      items.map(
        bar => (
          <BarMarkerContainer
            key={bar.post_id}
            bar={bar}
          />
        ),
      )
    }
    <WalkingDirections />
  </MapView>
);

BarMap.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    post_id: PropTypes.number.isRequired,
  }).isRequired),
  isFetching: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

BarMap.defaultProps = {
  items: [],
};

export default BarMap;

// Local Variables:
// mode: react
// End:
